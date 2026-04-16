import { z } from "zod";

import { dataCacheTtlSeconds } from "@/lib/api/cache-policy";
import type { createApiClient } from "@/lib/api/api-client";
import { isNotFoundError } from "@/lib/api/errors";
import { candidateProfileSchema, constituencySchema, districtSchema } from "@/lib/schemas";
import { toCandidateSlug } from "@/features/districts/lib/candidate-slug";
import type { DistrictRepository } from "./district-repository";

type ApiClient = ReturnType<typeof createApiClient>;

const constituencyRecordSchema = z.object({
  district: districtSchema,
  constituency: constituencySchema
});

const candidateRecordSchema = constituencyRecordSchema.extend({
  candidate: candidateProfileSchema
});

export function createApiDistrictRepository(apiClient: ApiClient): DistrictRepository {
  return {
    async list() {
      const response = await apiClient.get("/v1/districts", {
        cacheTtlSeconds: dataCacheTtlSeconds.reference,
        schema: districtSchema.array()
      });

      return response.data;
    },
    async listMobile() {
      const districts = await this.list();

      return districts.filter((district) => district.showOnMobile);
    },
    async findBySlug(slug) {
      try {
        const response = await apiClient.get(`/v1/districts/${slug}`, {
          cacheTtlSeconds: dataCacheTtlSeconds.reference,
          schema: districtSchema
        });

        return response.data;
      } catch (error) {
        if (isNotFoundError(error)) {
          return null;
        }

        throw error;
      }
    },
    async findConstituency(districtSlug, constituencySlug) {
      try {
        const response = await apiClient.get(
          `/v1/districts/${districtSlug}/constituencies/${constituencySlug}`,
          {
            cacheTtlSeconds: dataCacheTtlSeconds.reference,
            schema: constituencyRecordSchema
          }
        );

        return response.data;
      } catch (error) {
        if (isNotFoundError(error)) {
          return null;
        }

        throw error;
      }
    },
    async findCandidate(districtSlug, constituencySlug, candidateSlug) {
      try {
        const response = await apiClient.get(
          `/v1/districts/${districtSlug}/constituencies/${constituencySlug}/candidates/${candidateSlug}`,
          {
            cacheTtlSeconds: dataCacheTtlSeconds.reference,
            schema: candidateRecordSchema
          }
        );

        return response.data;
      } catch (error) {
        if (isNotFoundError(error)) {
          return null;
        }

        throw error;
      }
    },
    async listSlugs() {
      const districts = await this.list();

      return districts.map((district) => district.slug);
    },
    async listConstituencySlugs() {
      const districts = await this.list();

      return districts.flatMap((district) =>
        district.constituenciesList.map((constituency) => ({
          slug: district.slug,
          constituencySlug: constituency.slug
        }))
      );
    },
    async listCandidateSlugs() {
      const districts = await this.list();

      return districts.flatMap((district) =>
        district.constituenciesList.flatMap((constituency) =>
          constituency.candidates.map((candidate) => ({
            slug: district.slug,
            constituencySlug: constituency.slug,
            candidateSlug: toCandidateSlug(candidate)
          }))
        )
      );
    }
  };
}

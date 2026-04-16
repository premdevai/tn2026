import { DataSourceError } from "@/lib/api/api-client";
import type { DataSourceMeta } from "@/lib/schemas";
import { fixtureDataSourceMeta } from "@/lib/schemas";

export const dataSourceModes = ["static", "api", "api-with-static-fallback"] as const;

export type DataSourceMode = (typeof dataSourceModes)[number];

export function getDataSourceMode(envValue = process.env.DATA_SOURCE): DataSourceMode {
  if (envValue === "api" || envValue === "api-with-static-fallback") {
    return envValue;
  }

  return "static";
}

export function getWorkerApiBaseUrl(mode: DataSourceMode, envValue = process.env.WORKER_API_BASE_URL) {
  if (mode === "static") {
    return null;
  }

  if (!envValue) {
    if (mode === "api") {
      throw new DataSourceError("WORKER_API_BASE_URL is required when DATA_SOURCE=api.", {
        code: "missing_config"
      });
    }

    return null;
  }

  return envValue;
}

export function getRuntimeDataSourceMeta(mode: DataSourceMode): DataSourceMeta {
  if (mode === "static") {
    return fixtureDataSourceMeta;
  }

  return {
    source: "worker",
    updatedAt: new Date().toISOString(),
    cacheTtlSeconds: mode === "api-with-static-fallback" ? 30 : 0
  };
}

export function formatDataSourceLabel(meta: DataSourceMeta) {
  switch (meta.source) {
    case "eci":
      return "ECI";
    case "worker":
      return "Worker API";
    case "cms":
      return "CMS";
    case "fixture":
      return "Fixture";
  }
}

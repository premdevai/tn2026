import { z } from "zod";

import { dataSourceMetaSchema } from "@/lib/schemas";

export const apiEnvelopeSchema = <Schema extends z.ZodTypeAny>(dataSchema: Schema) =>
  z.object({
    data: dataSchema,
    meta: dataSourceMetaSchema
  });

export type ApiEnvelope<T> = {
  data: T;
  meta: z.infer<typeof dataSourceMetaSchema>;
};

export type ApiClientErrorCode =
  | "missing_config"
  | "network_error"
  | "http_error"
  | "invalid_response";

export class DataSourceError extends Error {
  readonly code: ApiClientErrorCode;
  readonly status?: number;
  readonly details?: unknown;

  constructor(message: string, options: { code: ApiClientErrorCode; status?: number; details?: unknown }) {
    super(message);
    this.name = "DataSourceError";
    this.code = options.code;
    this.status = options.status;
    this.details = options.details;
  }
}

type QueryValue = string | number | boolean | null | undefined;

type ApiRequestOptions<Schema extends z.ZodTypeAny> = {
  cacheTtlSeconds: number;
  query?: Record<string, QueryValue>;
  schema: Schema;
};

type ApiMutationOptions<Schema extends z.ZodTypeAny> = {
  body: unknown;
  schema: Schema;
};

type FetchLike = typeof fetch;

type ApiClientOptions = {
  baseUrl: string;
  fetchImpl?: FetchLike;
};

export function createApiClient({ baseUrl, fetchImpl = fetch }: ApiClientOptions) {
  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");

  async function request<Schema extends z.ZodTypeAny>(
    path: string,
    init: RequestInit,
    schema: Schema
  ): Promise<ApiEnvelope<z.infer<Schema>>> {
    let response: Response;

    try {
      response = await fetchImpl(buildUrl(normalizedBaseUrl, path), init);
    } catch (error) {
      throw new DataSourceError("Unable to reach the data source.", {
        code: "network_error",
        details: error
      });
    }

    if (!response.ok) {
      throw new DataSourceError(`Data source returned HTTP ${response.status}.`, {
        code: "http_error",
        status: response.status
      });
    }

    const payload: unknown = await response.json();
    const parsed = apiEnvelopeSchema(schema).safeParse(payload);

    if (!parsed.success) {
      throw new DataSourceError("Data source response did not match the expected schema.", {
        code: "invalid_response",
        details: parsed.error.flatten()
      });
    }

    return parsed.data as ApiEnvelope<z.infer<Schema>>;
  }

  return {
    get<Schema extends z.ZodTypeAny>(
      path: string,
      { cacheTtlSeconds, query, schema }: ApiRequestOptions<Schema>
    ) {
      const url = appendQuery(path, query);

      return request(
        url,
        {
          method: "GET",
          next: { revalidate: cacheTtlSeconds }
        },
        schema
      );
    },
    post<Schema extends z.ZodTypeAny>(path: string, { body, schema }: ApiMutationOptions<Schema>) {
      return request(
        path,
        {
          body: JSON.stringify(body),
          headers: {
            "content-type": "application/json"
          },
          method: "POST"
        },
        schema
      );
    }
  };
}

function buildUrl(baseUrl: string, path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}

function appendQuery(path: string, query?: Record<string, QueryValue>) {
  if (!query) {
    return path;
  }

  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, String(value));
    }
  }

  const queryString = params.toString();

  return queryString ? `${path}?${queryString}` : path;
}

import { DataSourceError } from "@/lib/api/api-client";

export function isNotFoundError(error: unknown) {
  return error instanceof DataSourceError && error.status === 404;
}

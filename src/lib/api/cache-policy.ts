export const dataCacheTtlSeconds = {
  live: 30,
  reference: 1800,
  editorial: 21600
} as const;

export type DataCachePolicy = keyof typeof dataCacheTtlSeconds;

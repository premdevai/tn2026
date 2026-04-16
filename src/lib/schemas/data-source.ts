import { z } from "zod";

export const dataSourceSchema = z.enum(["eci", "worker", "cms", "fixture"]);

export const dataSourceMetaSchema = z.object({
  source: dataSourceSchema,
  updatedAt: z.string().datetime(),
  cacheTtlSeconds: z.number().int().nonnegative()
});

export type DataSource = z.infer<typeof dataSourceSchema>;
export type DataSourceMeta = z.infer<typeof dataSourceMetaSchema>;

export const fixtureDataSourceMeta: DataSourceMeta = {
  source: "fixture",
  updatedAt: "2026-04-16T00:00:00.000Z",
  cacheTtlSeconds: 86400
};

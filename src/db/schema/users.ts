import { InferModel, sql } from "drizzle-orm";
import { integer, numeric, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  external_id: text("external_id").notNull().unique(), // the clerk User Id
  first_name: text("first_name").default(""),
  email: text("email").default(""),
  contact: text("contact"),
  resume_link: text("resume_link"),
  college: text("college"),
  cgpa: numeric("cgpa"),
  current_role: text("current_role"),
  current_company: text("current_company"),

  applying_role: text("applying_role"),

  applying_company: text("applying_company"),

  short_description: text("short_description"),

  job_id: text("job_id"),
  job_link: text("job_link"),

  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`
  ),
});

export type Users = InferModel<typeof users>;

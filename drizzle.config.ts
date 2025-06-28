import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema/index.ts",
  dialect: "turso",
  dbCredentials: {
    url:
      process.env.DATABASE_URL ??
      "libsql://referalgenerator-nnitesh147.aws-ap-south-1.turso.io",
    authToken:
      process.env.DATABASE_AUTH_TOKEN ??
      "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJnaWQiOiIxNWVlMDY4OS05OGY1LTQzM2MtYTgwOS01M2JlOWI5N2RjZDQiLCJpYXQiOjE3NTEwNTY2NjIsInJpZCI6ImQxMTNlNWU5LWY0MzEtNDAxNy1hYTg5LTlkMGM1MDA5Yjg2MSJ9.8trzB3M-mHLx2TcpJ1fRKFAvusMSSOhejpFpCbvlVBsSA4lx19Zv1rwNNsADCKuOtorlzZwaVbfJxiwsCWxOBw",
  },
});

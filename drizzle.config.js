import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://aiformmaker_owner:pt6AYk4vwlPD@ep-morning-cloud-a5ipj22d.us-east-2.aws.neon.tech/aiformmaker?sslmode=requireQ',
  }
});
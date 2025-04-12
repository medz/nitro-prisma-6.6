import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "~/prisma/client";

export default defineEventHandler((event) => {
  const adapter = new PrismaD1(event.context.cloudflare.env.DB_MBTI as any);
  const client = new PrismaClient({ adapter });
});

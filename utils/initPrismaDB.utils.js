import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function initDB() {
  try {
    await prisma.$connect();
    console.log("Connected to MongoDB with Prisma!");
  } catch (error) {
    console.error("Could not connect to MongoDB:", error);
  }
}

export { prisma, initDB };
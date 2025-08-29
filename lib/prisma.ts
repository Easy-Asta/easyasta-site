import { PrismaClient } from '@prisma/client';

// Instantiate a single Prisma client instance. In a serverless environment
// this ensures that new connections are not created on every request.
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
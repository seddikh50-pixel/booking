-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "rating" DOUBLE PRECISION;

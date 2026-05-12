/*
  Warnings:

  - You are about to drop the column `endTime` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Schedule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "endTime",
DROP COLUMN "startTime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "eveningEnd" TEXT,
ADD COLUMN     "eveningStart" TEXT,
ADD COLUMN     "morningEnd" TEXT,
ADD COLUMN     "morningStart" TEXT;

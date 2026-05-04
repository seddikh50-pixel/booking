/*
  Warnings:

  - You are about to drop the `Seddik` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Seddik";

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

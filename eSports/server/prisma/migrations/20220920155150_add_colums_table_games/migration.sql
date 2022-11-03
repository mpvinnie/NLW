/*
  Warnings:

  - Added the required column `description` to the `games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followers` to the `games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viewers` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_games" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    "viewers" INTEGER NOT NULL,
    "followers" INTEGER NOT NULL
);
INSERT INTO "new_games" ("bannerUrl", "id", "title") SELECT "bannerUrl", "id", "title" FROM "games";
DROP TABLE "games";
ALTER TABLE "new_games" RENAME TO "games";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

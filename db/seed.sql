CREATE TYPE "categories" AS ENUM (
  'home_improvement',
  'hobbies',
  'life_hacks',
  'food_and_drink',
  'outdoors'
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "full_name" varchar(100),
  "email" varchar(200),
  "password" varchar,
  "is_admin" boolean,
  "created_at" timestamp DEFAULT now()
);

CREATE TABLE "comments" (
  "comment_id" serial PRIMARY KEY,
  "user_id" int,
  "post_id" int,
  "comment" text,
  "created_at" timestamp DEFAULT now()
);

CREATE TABLE "posts" (
  "id" serial PRIMARY KEY,
  "user_id" int,
  "category" categories,
  "description" text,
  "upvote" int default 0,
  "downvote" int default 0,
  "created_at" timestamp DEFAULT now(),
  "title" text,
  "post_pic" text
);

CREATE TABLE "category" (
  "id" serial PRIMARY KEY,
  "category_name" categories
);

ALTER TABLE "comments" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("category") REFERENCES "category" ("id");

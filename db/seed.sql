CREATE TYPE "categories" AS ENUM (
  'home_improvement',
  'hobbies',
  'life_hacks',
  'food_and_drink',
  'outdoors'
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "username" varchar(100),
  "email" varchar(200),
  "password" varchar,
  "is_admin" boolean default false,
  "created_at" timestamp DEFAULT now(),
  "profile_pic" text,
  "user_description" text
);

CREATE TABLE "comments" (
  "comment_id" serial PRIMARY KEY,
  "user_id" int,
  "post_id" int,
  "comment" text,
  "created_at" timestamp DEFAULT now(),
  "comment_pic" text,
  "upvote" int default 0,
  "downvote" int default 0
);

CREATE TABLE "posts" (
  "post_id" serial PRIMARY KEY,
  "user_id" int,
  "category" categories,
  "description" text,
  "created_at" timestamp DEFAULT now(),
  "title" text,
  "post_pic" text
);

CREATE TABLE "category" (
  "id" serial PRIMARY KEY,
  "category_name" categories
);

CREATE TABLE "votes" (
  "post_vote_id" serial PRIMARY KEY,
  "user_id" INT REFERENCES "users" ("id"),
  "comment_id" INT REFERENCES "comments" ("comment_id"),
  "upvote" int default 0,
  "downvote" int default 0
);


ALTER TABLE "comments" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("post_id");

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("category") REFERENCES "category" ("id");

ALTER TABLE "users" ADD "profile_pic" text;
ALTER TABLE "users" ADD "user_description" text;

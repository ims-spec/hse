CREATE TABLE "divisions" (
  "id" int4 NOT NULL,
  "division" varchar(255) NOT NULL,
  "created_at" timestamptz(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "employees" (
  "id" int4 NOT NULL,
  "title" varchar(255) NOT NULL,
  "created_at" timestamptz(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "hse" (
  "id" int4 NOT NULL,
  "name" varchar(255),
  "created_at" timestamptz,
  PRIMARY KEY ("id")
);

CREATE TABLE "title_jobs" (
  "id" int4 NOT NULL,
  "job_title" varchar(255),
  "created_at" timestamptz,
  PRIMARY KEY ("id")
);


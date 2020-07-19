-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

CREATE TABLE "feedback" (
	"id" SERIAL PRIMARY KEY,
	"feeling_rating" VARCHAR(1) NOT NULL,
	"feeling_comment" VARCHAR(1250) DEFAULT '',
	"understanding_rating" VARCHAR (1) NOT NULL,
	"understanding_comment" VARCHAR(1250) DEFAULT '',
	"support_rating" VARCHAR(1) NOT NULL,
	"support_comment" VARCHAR(1250) DEFAULT '',
	"additional_comments" VARCHAR(1500) DEFAULT ''
);

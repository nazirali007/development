-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "strapi_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"time" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_database_schema" (
	"id" serial PRIMARY KEY NOT NULL,
	"schema" json,
	"time" timestamp,
	"hash" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_core_store_settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar(255),
	"value" text,
	"type" varchar(255),
	"environment" varchar(255),
	"tag" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_webhooks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"url" text,
	"headers" jsonb,
	"events" jsonb,
	"enabled" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_curatedcards" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(255),
	"curatedimageurl" varchar(255),
	"curatedcardalt" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "google_ads_testimonies_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"google_ad_id" integer,
	"testimony_id" integer,
	"testimony_order" double precision,
	CONSTRAINT "google_ads_testimonies_links_unique" UNIQUE("google_ad_id","testimony_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "retreats_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" integer,
	"component_id" integer,
	"component_type" varchar(255),
	"field" varchar(255),
	"order" double precision,
	CONSTRAINT "retreats_unique" UNIQUE("entity_id","component_id","component_type","field")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "retreats" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_internal_employees" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_internal_team_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar(255),
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_banners" (
	"id" serial PRIMARY KEY NOT NULL,
	"link" varchar(255),
	"img_url" varchar(255),
	"expiration_date" date
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_costings" (
	"id" serial PRIMARY KEY NOT NULL,
	"mode" varchar(255),
	"price" bigint,
	"partialamount" bigint,
	"discountedprice" bigint
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_costingnotes" (
	"id" serial PRIMARY KEY NOT NULL,
	"note" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blogs_author_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"blog_id" integer,
	"user_id" integer,
	"blog_order" double precision,
	CONSTRAINT "blogs_author_links_unique" UNIQUE("blog_id","user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_dates_temps" (
	"id" serial PRIMARY KEY NOT NULL,
	"datetemp" date
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_dates" (
	"id" serial PRIMARY KEY NOT NULL,
	"tripdate" date
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"line" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_faqs" (
	"id" serial PRIMARY KEY NOT NULL,
	"question" varchar(255),
	"answer" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_metacontents" (
	"id" serial PRIMARY KEY NOT NULL,
	"metatitle" text,
	"metakeywords" text,
	"metadescription" text,
	"schemamarkup" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_schema_markups" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" varchar(255),
	"type" varchar(255),
	"name" varchar(255),
	"image" varchar(255),
	"description" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_texts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_trip_dates" (
	"id" serial PRIMARY KEY NOT NULL,
	"tripdate" date
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"rating" numeric(10, 2),
	"description" text,
	"author" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "employees" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tvs" (
	"id" serial PRIMARY KEY NOT NULL,
	"view" varchar(255),
	"noticeboard" text,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tvs_topemployees_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"tv_id" integer,
	"employee_id" integer,
	"employee_order" double precision,
	CONSTRAINT "tvs_topemployees_links_unique" UNIQUE("tv_id","employee_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "google_ads" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_destinations" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "google_ads_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" integer,
	"component_id" integer,
	"component_type" varchar(255),
	"field" varchar(255),
	"order" double precision,
	CONSTRAINT "google_ads_unique" UNIQUE("entity_id","component_id","component_type","field")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "admin_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstname" varchar(255),
	"lastname" varchar(255),
	"username" varchar(255),
	"email" varchar(255),
	"password" varchar(255),
	"reset_password_token" varchar(255),
	"registration_token" varchar(255),
	"is_active" boolean,
	"blocked" boolean,
	"prefered_language" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "admin_permissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"action" varchar(255),
	"action_parameters" jsonb,
	"subject" varchar(255),
	"properties" jsonb,
	"conditions" jsonb,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "admin_roles" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"code" varchar(255),
	"description" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_api_tokens" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"description" varchar(255),
	"type" varchar(255),
	"access_key" varchar(255),
	"last_used_at" timestamp(6),
	"expires_at" timestamp(6),
	"lifespan" bigint,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_api_token_permissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"action" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_transfer_tokens" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"description" varchar(255),
	"access_key" varchar(255),
	"last_used_at" timestamp(6),
	"expires_at" timestamp(6),
	"lifespan" bigint,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_transfer_token_permissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"action" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "files" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"alternative_text" varchar(255),
	"caption" varchar(255),
	"width" integer,
	"height" integer,
	"formats" jsonb,
	"hash" varchar(255),
	"ext" varchar(255),
	"mime" varchar(255),
	"size" numeric(10, 2),
	"url" varchar(255),
	"preview_url" varchar(255),
	"provider" varchar(255),
	"provider_metadata" jsonb,
	"folder_path" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "upload_folders" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"path_id" integer,
	"path" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer,
	CONSTRAINT "upload_folders_path_id_index" UNIQUE("path_id"),
	CONSTRAINT "upload_folders_path_index" UNIQUE("path")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_releases" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"released_at" timestamp(6),
	"scheduled_at" timestamp(6),
	"timezone" varchar(255),
	"status" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_release_actions" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar(255),
	"target_id" integer,
	"target_type" varchar(255),
	"content_type" varchar(255),
	"locale" varchar(255),
	"is_entry_valid" boolean,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "i18n_locale" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"code" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "up_permissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"action" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "up_roles" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"description" varchar(255),
	"type" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "up_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(255),
	"email" varchar(255),
	"provider" varchar(255),
	"password" varchar(255),
	"reset_password_token" varchar(255),
	"confirmation_token" varchar(255),
	"confirmed" boolean,
	"blocked" boolean,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "actions" (
	"id" serial PRIMARY KEY NOT NULL,
	"execute_at" timestamp(6),
	"mode" varchar(255),
	"entity_id" integer,
	"entity_slug" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(255),
	"title" varchar(255),
	"bannerimageurl" varchar(255),
	"bannerimagealt" varchar(255),
	"content" text,
	"description" text,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blog_pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"about" text,
	"metatitle" text,
	"metakeywords" text,
	"metadescription" text,
	"schemamarkup" jsonb,
	"bannerimageurl" text,
	"bannerimagealt" text,
	"slug" varchar(255),
	"titleabout" text,
	"smallabout" text,
	"location" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customizeds" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"description" varchar(255),
	"formtitle" varchar(255),
	"formdescription" varchar(255),
	"slug" varchar(255),
	"videourl" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "domestic_trips" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"about" text,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "homes" (
	"id" serial PRIMARY KEY NOT NULL,
	"heading_1" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "international_homes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"about" text,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "leaderboards" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_heading" varchar(255),
	"page_type" varchar(255),
	"noticeboard_content" text,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trips" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(255),
	"name" text,
	"description" text,
	"price" bigint,
	"discount" bigint,
	"pickup" text,
	"drop" text,
	"inclusions" text,
	"exclusions" text,
	"note" text,
	"itinerary" text,
	"prebooking" boolean,
	"is_customized" boolean,
	"is_international" boolean,
	"is_domestic" boolean,
	"coverimageurl" text,
	"bannerimageurl" text,
	"reviewvideourl" text,
	"perk_1" varchar(255),
	"perk_2" varchar(255),
	"durationdays" integer,
	"metatitle" text,
	"metakeywords" text,
	"metadescription" text,
	"schemamarkup" jsonb,
	"itinerarypdfurl" text,
	"cover_imageurlalt" text,
	"bannerimageurlalt" text,
	"titledescription" text,
	"smalldescription" text,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "admin_permissions_role_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"permission_id" integer,
	"role_id" integer,
	"permission_order" double precision,
	CONSTRAINT "admin_permissions_role_links_unique" UNIQUE("permission_id","role_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "admin_users_roles_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"role_id" integer,
	"role_order" double precision,
	"user_order" double precision,
	CONSTRAINT "admin_users_roles_links_unique" UNIQUE("user_id","role_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_api_token_permissions_token_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"api_token_permission_id" integer,
	"api_token_id" integer,
	"api_token_permission_order" double precision,
	CONSTRAINT "strapi_api_token_permissions_token_links_unique" UNIQUE("api_token_permission_id","api_token_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_transfer_token_permissions_token_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"transfer_token_permission_id" integer,
	"transfer_token_id" integer,
	"transfer_token_permission_order" double precision,
	CONSTRAINT "strapi_transfer_token_permissions_token_links_unique" UNIQUE("transfer_token_permission_id","transfer_token_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "files_related_morphs" (
	"id" serial PRIMARY KEY NOT NULL,
	"file_id" integer,
	"related_id" integer,
	"related_type" varchar(255),
	"field" varchar(255),
	"order" double precision
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "files_folder_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"file_id" integer,
	"folder_id" integer,
	"file_order" double precision,
	CONSTRAINT "files_folder_links_unique" UNIQUE("file_id","folder_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "upload_folders_parent_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"folder_id" integer,
	"inv_folder_id" integer,
	"folder_order" double precision,
	CONSTRAINT "upload_folders_parent_links_unique" UNIQUE("folder_id","inv_folder_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strapi_release_actions_release_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"release_action_id" integer,
	"release_id" integer,
	"release_action_order" double precision,
	CONSTRAINT "strapi_release_actions_release_links_unique" UNIQUE("release_action_id","release_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "up_permissions_role_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"permission_id" integer,
	"role_id" integer,
	"permission_order" double precision,
	CONSTRAINT "up_permissions_role_links_unique" UNIQUE("permission_id","role_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "up_users_role_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"role_id" integer,
	"user_order" double precision,
	CONSTRAINT "up_users_role_links_unique" UNIQUE("user_id","role_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blogs_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" integer,
	"component_id" integer,
	"component_type" varchar(255),
	"field" varchar(255),
	"order" double precision,
	CONSTRAINT "blogs_unique" UNIQUE("entity_id","component_id","component_type","field")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blogs_relatedblogs_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"blog_id" integer,
	"inv_blog_id" integer,
	"blog_order" double precision,
	CONSTRAINT "blogs_relatedblogs_links_unique" UNIQUE("blog_id","inv_blog_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blogs_destinations_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"blog_id" integer,
	"category_id" integer,
	"category_order" double precision,
	CONSTRAINT "blogs_destinations_links_unique" UNIQUE("blog_id","category_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blog_pages_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" integer,
	"component_id" integer,
	"component_type" varchar(255),
	"field" varchar(255),
	"order" double precision,
	CONSTRAINT "blog_pages_unique" UNIQUE("entity_id","component_id","component_type","field")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blog_pages_allblogs_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"blog_page_id" integer,
	"blog_id" integer,
	"blog_order" double precision,
	CONSTRAINT "blog_pages_allblogs_links_unique" UNIQUE("blog_page_id","blog_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blog_pages_featuredblogs_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"blog_page_id" integer,
	"blog_id" integer,
	"blog_order" double precision,
	CONSTRAINT "blog_pages_featuredblogs_links_unique" UNIQUE("blog_page_id","blog_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blog_pages_landing_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"blog_page_id" integer,
	"blog_id" integer,
	CONSTRAINT "blog_pages_landing_links_unique" UNIQUE("blog_page_id","blog_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories_parentcategory_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_id" integer,
	"inv_category_id" integer,
	"category_order" double precision,
	"inv_category_order" double precision,
	CONSTRAINT "categories_parentcategory_links_unique" UNIQUE("category_id","inv_category_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories_categories_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_id" integer,
	"inv_category_id" integer,
	"category_order" double precision,
	"inv_category_order" double precision,
	CONSTRAINT "categories_categories_links_unique" UNIQUE("category_id","inv_category_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customizeds_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" integer,
	"component_id" integer,
	"component_type" varchar(255),
	"field" varchar(255),
	"order" double precision,
	CONSTRAINT "customizeds_unique" UNIQUE("entity_id","component_id","component_type","field")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "domestic_trips_trips_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"domestic_trip_id" integer,
	"trip_id" integer,
	"trip_order" double precision,
	CONSTRAINT "domestic_trips_trips_links_unique" UNIQUE("domestic_trip_id","trip_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "homes_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" integer,
	"component_id" integer,
	"component_type" varchar(255),
	"field" varchar(255),
	"order" double precision,
	CONSTRAINT "homes_unique" UNIQUE("entity_id","component_id","component_type","field")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "international_homes_trips_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"international_home_id" integer,
	"trip_id" integer,
	"trip_order" double precision,
	CONSTRAINT "international_homes_trips_links_unique" UNIQUE("international_home_id","trip_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "leaderboards_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" integer,
	"component_id" integer,
	"component_type" varchar(255),
	"field" varchar(255),
	"order" double precision,
	CONSTRAINT "leaderboards_unique" UNIQUE("entity_id","component_id","component_type","field")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trips_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" integer,
	"component_id" integer,
	"component_type" varchar(255),
	"field" varchar(255),
	"order" double precision,
	CONSTRAINT "trips_unique" UNIQUE("entity_id","component_id","component_type","field")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trips_categories_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"trip_id" integer,
	"category_id" integer,
	"category_order" double precision,
	"trip_order" double precision,
	CONSTRAINT "trips_categories_links_unique" UNIQUE("trip_id","category_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trips_relatedtrips_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"trip_id" integer,
	"inv_trip_id" integer,
	"trip_order" double precision,
	CONSTRAINT "trips_relatedtrips_links_unique" UNIQUE("trip_id","inv_trip_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_day_2s" (
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_day_2s_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" integer,
	"component_id" integer,
	"component_type" varchar(255),
	"field" varchar(255),
	"order" double precision,
	CONSTRAINT "components_trip_day_2s_unique" UNIQUE("entity_id","component_id","component_type","field")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "google_ads_trips_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"google_ad_id" integer,
	"trip_id" integer,
	"trip_order" double precision,
	CONSTRAINT "google_ads_trips_links_unique" UNIQUE("google_ad_id","trip_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teams" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "employees_team_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" integer,
	"team_id" integer,
	"employee_order" double precision,
	CONSTRAINT "employees_team_links_unique" UNIQUE("employee_id","team_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teams_leader_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_id" integer,
	"employee_id" integer,
	CONSTRAINT "teams_leader_links_unique" UNIQUE("team_id","employee_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "homes_categories_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"home_id" integer,
	"category_id" integer,
	"category_order" double precision,
	CONSTRAINT "homes_categories_links_unique" UNIQUE("home_id","category_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "components_trip_itineraries" (
	"id" serial PRIMARY KEY NOT NULL,
	"day" integer,
	"title" varchar(255),
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activities_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" integer,
	"component_id" integer,
	"component_type" varchar(255),
	"field" varchar(255),
	"order" double precision,
	CONSTRAINT "activities_unique" UNIQUE("entity_id","component_id","component_type","field")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activities" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"slug" varchar(255),
	"description" text,
	"fullday" boolean,
	"cost" bigint,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "google_ads_activities_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"google_ad_id" integer,
	"activity_id" integer,
	"activity_order" double precision,
	CONSTRAINT "google_ads_activities_links_unique" UNIQUE("google_ad_id","activity_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "testimonies" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"name" varchar(255),
	"rating" varchar(255),
	"review" text,
	"created_at" timestamp(6),
	"updated_at" timestamp(6),
	"published_at" timestamp(6),
	"created_by_id" integer,
	"updated_by_id" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "google_ads_testimonies_links" ADD CONSTRAINT "google_ads_testimonies_links_fk" FOREIGN KEY ("google_ad_id") REFERENCES "public"."google_ads"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "google_ads_testimonies_links" ADD CONSTRAINT "google_ads_testimonies_links_inv_fk" FOREIGN KEY ("testimony_id") REFERENCES "public"."testimonies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "retreats_components" ADD CONSTRAINT "retreats_entity_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."retreats"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "retreats" ADD CONSTRAINT "retreats_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "retreats" ADD CONSTRAINT "retreats_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs_author_links" ADD CONSTRAINT "blogs_author_links_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs_author_links" ADD CONSTRAINT "blogs_author_links_inv_fk" FOREIGN KEY ("user_id") REFERENCES "public"."up_users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employees" ADD CONSTRAINT "employees_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employees" ADD CONSTRAINT "employees_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tvs" ADD CONSTRAINT "tvs_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tvs" ADD CONSTRAINT "tvs_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tvs_topemployees_links" ADD CONSTRAINT "tvs_topemployees_links_fk" FOREIGN KEY ("tv_id") REFERENCES "public"."tvs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tvs_topemployees_links" ADD CONSTRAINT "tvs_topemployees_links_inv_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "google_ads" ADD CONSTRAINT "google_ads_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "google_ads" ADD CONSTRAINT "google_ads_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "google_ads_components" ADD CONSTRAINT "google_ads_entity_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."google_ads"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_users" ADD CONSTRAINT "admin_users_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_users" ADD CONSTRAINT "admin_users_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_permissions" ADD CONSTRAINT "admin_permissions_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_permissions" ADD CONSTRAINT "admin_permissions_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_roles" ADD CONSTRAINT "admin_roles_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_roles" ADD CONSTRAINT "admin_roles_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_api_tokens" ADD CONSTRAINT "strapi_api_tokens_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_api_tokens" ADD CONSTRAINT "strapi_api_tokens_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_api_token_permissions" ADD CONSTRAINT "strapi_api_token_permissions_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_api_token_permissions" ADD CONSTRAINT "strapi_api_token_permissions_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_transfer_tokens" ADD CONSTRAINT "strapi_transfer_tokens_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_transfer_tokens" ADD CONSTRAINT "strapi_transfer_tokens_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_transfer_token_permissions" ADD CONSTRAINT "strapi_transfer_token_permissions_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_transfer_token_permissions" ADD CONSTRAINT "strapi_transfer_token_permissions_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "files" ADD CONSTRAINT "files_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "files" ADD CONSTRAINT "files_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "upload_folders" ADD CONSTRAINT "upload_folders_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "upload_folders" ADD CONSTRAINT "upload_folders_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_releases" ADD CONSTRAINT "strapi_releases_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_releases" ADD CONSTRAINT "strapi_releases_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_release_actions" ADD CONSTRAINT "strapi_release_actions_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_release_actions" ADD CONSTRAINT "strapi_release_actions_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "i18n_locale" ADD CONSTRAINT "i18n_locale_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "i18n_locale" ADD CONSTRAINT "i18n_locale_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "up_permissions" ADD CONSTRAINT "up_permissions_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "up_permissions" ADD CONSTRAINT "up_permissions_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "up_roles" ADD CONSTRAINT "up_roles_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "up_roles" ADD CONSTRAINT "up_roles_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "up_users" ADD CONSTRAINT "up_users_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "up_users" ADD CONSTRAINT "up_users_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "actions" ADD CONSTRAINT "actions_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "actions" ADD CONSTRAINT "actions_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs" ADD CONSTRAINT "blogs_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs" ADD CONSTRAINT "blogs_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blog_pages" ADD CONSTRAINT "blog_pages_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blog_pages" ADD CONSTRAINT "blog_pages_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "categories" ADD CONSTRAINT "categories_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "categories" ADD CONSTRAINT "categories_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customizeds" ADD CONSTRAINT "customizeds_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customizeds" ADD CONSTRAINT "customizeds_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "domestic_trips" ADD CONSTRAINT "domestic_trips_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "domestic_trips" ADD CONSTRAINT "domestic_trips_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "homes" ADD CONSTRAINT "homes_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "homes" ADD CONSTRAINT "homes_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "international_homes" ADD CONSTRAINT "international_homes_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "international_homes" ADD CONSTRAINT "international_homes_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "leaderboards" ADD CONSTRAINT "leaderboards_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "leaderboards" ADD CONSTRAINT "leaderboards_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trips" ADD CONSTRAINT "trips_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trips" ADD CONSTRAINT "trips_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_permissions_role_links" ADD CONSTRAINT "admin_permissions_role_links_fk" FOREIGN KEY ("permission_id") REFERENCES "public"."admin_permissions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_permissions_role_links" ADD CONSTRAINT "admin_permissions_role_links_inv_fk" FOREIGN KEY ("role_id") REFERENCES "public"."admin_roles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_users_roles_links" ADD CONSTRAINT "admin_users_roles_links_fk" FOREIGN KEY ("user_id") REFERENCES "public"."admin_users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_users_roles_links" ADD CONSTRAINT "admin_users_roles_links_inv_fk" FOREIGN KEY ("role_id") REFERENCES "public"."admin_roles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_api_token_permissions_token_links" ADD CONSTRAINT "strapi_api_token_permissions_token_links_fk" FOREIGN KEY ("api_token_permission_id") REFERENCES "public"."strapi_api_token_permissions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_api_token_permissions_token_links" ADD CONSTRAINT "strapi_api_token_permissions_token_links_inv_fk" FOREIGN KEY ("api_token_id") REFERENCES "public"."strapi_api_tokens"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_transfer_token_permissions_token_links" ADD CONSTRAINT "strapi_transfer_token_permissions_token_links_fk" FOREIGN KEY ("transfer_token_permission_id") REFERENCES "public"."strapi_transfer_token_permissions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_transfer_token_permissions_token_links" ADD CONSTRAINT "strapi_transfer_token_permissions_token_links_inv_fk" FOREIGN KEY ("transfer_token_id") REFERENCES "public"."strapi_transfer_tokens"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "files_related_morphs" ADD CONSTRAINT "files_related_morphs_fk" FOREIGN KEY ("file_id") REFERENCES "public"."files"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "files_folder_links" ADD CONSTRAINT "files_folder_links_fk" FOREIGN KEY ("file_id") REFERENCES "public"."files"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "files_folder_links" ADD CONSTRAINT "files_folder_links_inv_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."upload_folders"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "upload_folders_parent_links" ADD CONSTRAINT "upload_folders_parent_links_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."upload_folders"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "upload_folders_parent_links" ADD CONSTRAINT "upload_folders_parent_links_inv_fk" FOREIGN KEY ("inv_folder_id") REFERENCES "public"."upload_folders"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_release_actions_release_links" ADD CONSTRAINT "strapi_release_actions_release_links_fk" FOREIGN KEY ("release_action_id") REFERENCES "public"."strapi_release_actions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strapi_release_actions_release_links" ADD CONSTRAINT "strapi_release_actions_release_links_inv_fk" FOREIGN KEY ("release_id") REFERENCES "public"."strapi_releases"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "up_permissions_role_links" ADD CONSTRAINT "up_permissions_role_links_fk" FOREIGN KEY ("permission_id") REFERENCES "public"."up_permissions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "up_permissions_role_links" ADD CONSTRAINT "up_permissions_role_links_inv_fk" FOREIGN KEY ("role_id") REFERENCES "public"."up_roles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "up_users_role_links" ADD CONSTRAINT "up_users_role_links_fk" FOREIGN KEY ("user_id") REFERENCES "public"."up_users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "up_users_role_links" ADD CONSTRAINT "up_users_role_links_inv_fk" FOREIGN KEY ("role_id") REFERENCES "public"."up_roles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs_components" ADD CONSTRAINT "blogs_entity_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs_relatedblogs_links" ADD CONSTRAINT "blogs_relatedblogs_links_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs_relatedblogs_links" ADD CONSTRAINT "blogs_relatedblogs_links_inv_fk" FOREIGN KEY ("inv_blog_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs_destinations_links" ADD CONSTRAINT "blogs_destinations_links_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs_destinations_links" ADD CONSTRAINT "blogs_destinations_links_inv_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blog_pages_components" ADD CONSTRAINT "blog_pages_entity_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."blog_pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blog_pages_allblogs_links" ADD CONSTRAINT "blog_pages_allblogs_links_fk" FOREIGN KEY ("blog_page_id") REFERENCES "public"."blog_pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blog_pages_allblogs_links" ADD CONSTRAINT "blog_pages_allblogs_links_inv_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blog_pages_featuredblogs_links" ADD CONSTRAINT "blog_pages_featuredblogs_links_fk" FOREIGN KEY ("blog_page_id") REFERENCES "public"."blog_pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blog_pages_featuredblogs_links" ADD CONSTRAINT "blog_pages_featuredblogs_links_inv_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blog_pages_landing_links" ADD CONSTRAINT "blog_pages_landing_links_fk" FOREIGN KEY ("blog_page_id") REFERENCES "public"."blog_pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blog_pages_landing_links" ADD CONSTRAINT "blog_pages_landing_links_inv_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "categories_parentcategory_links" ADD CONSTRAINT "categories_parentcategory_links_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "categories_parentcategory_links" ADD CONSTRAINT "categories_parentcategory_links_inv_fk" FOREIGN KEY ("inv_category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "categories_categories_links" ADD CONSTRAINT "categories_categories_links_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "categories_categories_links" ADD CONSTRAINT "categories_categories_links_inv_fk" FOREIGN KEY ("inv_category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customizeds_components" ADD CONSTRAINT "customizeds_entity_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."customizeds"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "domestic_trips_trips_links" ADD CONSTRAINT "domestic_trips_trips_links_fk" FOREIGN KEY ("domestic_trip_id") REFERENCES "public"."domestic_trips"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "domestic_trips_trips_links" ADD CONSTRAINT "domestic_trips_trips_links_inv_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "homes_components" ADD CONSTRAINT "homes_entity_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."homes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "international_homes_trips_links" ADD CONSTRAINT "international_homes_trips_links_fk" FOREIGN KEY ("international_home_id") REFERENCES "public"."international_homes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "international_homes_trips_links" ADD CONSTRAINT "international_homes_trips_links_inv_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "leaderboards_components" ADD CONSTRAINT "leaderboards_entity_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."leaderboards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trips_components" ADD CONSTRAINT "trips_entity_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trips_categories_links" ADD CONSTRAINT "trips_categories_links_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trips_categories_links" ADD CONSTRAINT "trips_categories_links_inv_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trips_relatedtrips_links" ADD CONSTRAINT "trips_relatedtrips_links_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trips_relatedtrips_links" ADD CONSTRAINT "trips_relatedtrips_links_inv_fk" FOREIGN KEY ("inv_trip_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "components_trip_day_2s_components" ADD CONSTRAINT "components_trip_day_2s_entity_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."components_trip_day_2s"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "google_ads_trips_links" ADD CONSTRAINT "google_ads_trips_links_fk" FOREIGN KEY ("google_ad_id") REFERENCES "public"."google_ads"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "google_ads_trips_links" ADD CONSTRAINT "google_ads_trips_links_inv_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams" ADD CONSTRAINT "teams_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams" ADD CONSTRAINT "teams_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employees_team_links" ADD CONSTRAINT "employees_team_links_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employees_team_links" ADD CONSTRAINT "employees_team_links_inv_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_leader_links" ADD CONSTRAINT "teams_leader_links_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_leader_links" ADD CONSTRAINT "teams_leader_links_inv_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "homes_categories_links" ADD CONSTRAINT "homes_categories_links_fk" FOREIGN KEY ("home_id") REFERENCES "public"."homes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "homes_categories_links" ADD CONSTRAINT "homes_categories_links_inv_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activities_components" ADD CONSTRAINT "activities_entity_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activities" ADD CONSTRAINT "activities_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activities" ADD CONSTRAINT "activities_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "google_ads_activities_links" ADD CONSTRAINT "google_ads_activities_links_fk" FOREIGN KEY ("google_ad_id") REFERENCES "public"."google_ads"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "google_ads_activities_links" ADD CONSTRAINT "google_ads_activities_links_inv_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "testimonies" ADD CONSTRAINT "testimonies_created_by_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "testimonies" ADD CONSTRAINT "testimonies_updated_by_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_testimonies_links_fk" ON "google_ads_testimonies_links" USING btree ("google_ad_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_testimonies_links_inv_fk" ON "google_ads_testimonies_links" USING btree ("testimony_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_testimonies_links_order_fk" ON "google_ads_testimonies_links" USING btree ("testimony_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "retreats_component_type_index" ON "retreats_components" USING btree ("component_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "retreats_entity_fk" ON "retreats_components" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "retreats_field_index" ON "retreats_components" USING btree ("field");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "retreats_created_by_id_fk" ON "retreats" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "retreats_updated_by_id_fk" ON "retreats" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_author_links_fk" ON "blogs_author_links" USING btree ("blog_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_author_links_inv_fk" ON "blogs_author_links" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_author_links_order_inv_fk" ON "blogs_author_links" USING btree ("blog_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "employees_created_by_id_fk" ON "employees" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "employees_updated_by_id_fk" ON "employees" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tvs_created_by_id_fk" ON "tvs" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tvs_updated_by_id_fk" ON "tvs" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tvs_topemployees_links_fk" ON "tvs_topemployees_links" USING btree ("tv_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tvs_topemployees_links_inv_fk" ON "tvs_topemployees_links" USING btree ("employee_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tvs_topemployees_links_order_fk" ON "tvs_topemployees_links" USING btree ("employee_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_created_by_id_fk" ON "google_ads" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_updated_by_id_fk" ON "google_ads" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_component_type_index" ON "google_ads_components" USING btree ("component_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_entity_fk" ON "google_ads_components" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_field_index" ON "google_ads_components" USING btree ("field");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_users_created_by_id_fk" ON "admin_users" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_users_updated_by_id_fk" ON "admin_users" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_permissions_created_by_id_fk" ON "admin_permissions" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_permissions_updated_by_id_fk" ON "admin_permissions" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_roles_created_by_id_fk" ON "admin_roles" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_roles_updated_by_id_fk" ON "admin_roles" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_api_tokens_created_by_id_fk" ON "strapi_api_tokens" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_api_tokens_updated_by_id_fk" ON "strapi_api_tokens" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_api_token_permissions_created_by_id_fk" ON "strapi_api_token_permissions" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_api_token_permissions_updated_by_id_fk" ON "strapi_api_token_permissions" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_transfer_tokens_created_by_id_fk" ON "strapi_transfer_tokens" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_transfer_tokens_updated_by_id_fk" ON "strapi_transfer_tokens" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_transfer_token_permissions_created_by_id_fk" ON "strapi_transfer_token_permissions" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_transfer_token_permissions_updated_by_id_fk" ON "strapi_transfer_token_permissions" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "files_created_by_id_fk" ON "files" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "files_updated_by_id_fk" ON "files" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_files_created_at_index" ON "files" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_files_ext_index" ON "files" USING btree ("ext");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_files_folder_path_index" ON "files" USING btree ("folder_path");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_files_name_index" ON "files" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_files_size_index" ON "files" USING btree ("size");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_files_updated_at_index" ON "files" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_folders_created_by_id_fk" ON "upload_folders" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_folders_updated_by_id_fk" ON "upload_folders" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_releases_created_by_id_fk" ON "strapi_releases" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_releases_updated_by_id_fk" ON "strapi_releases" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_release_actions_created_by_id_fk" ON "strapi_release_actions" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_release_actions_updated_by_id_fk" ON "strapi_release_actions" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "i18n_locale_created_by_id_fk" ON "i18n_locale" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "i18n_locale_updated_by_id_fk" ON "i18n_locale" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_permissions_created_by_id_fk" ON "up_permissions" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_permissions_updated_by_id_fk" ON "up_permissions" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_roles_created_by_id_fk" ON "up_roles" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_roles_updated_by_id_fk" ON "up_roles" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_users_created_by_id_fk" ON "up_users" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_users_updated_by_id_fk" ON "up_users" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "actions_created_by_id_fk" ON "actions" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "actions_updated_by_id_fk" ON "actions" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_created_by_id_fk" ON "blogs" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_updated_by_id_fk" ON "blogs" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_created_by_id_fk" ON "blog_pages" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_updated_by_id_fk" ON "blog_pages" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "categories_created_by_id_fk" ON "categories" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "categories_updated_by_id_fk" ON "categories" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "customizeds_created_by_id_fk" ON "customizeds" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "customizeds_updated_by_id_fk" ON "customizeds" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "domestic_trips_created_by_id_fk" ON "domestic_trips" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "domestic_trips_updated_by_id_fk" ON "domestic_trips" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "homes_created_by_id_fk" ON "homes" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "homes_updated_by_id_fk" ON "homes" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "international_homes_created_by_id_fk" ON "international_homes" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "international_homes_updated_by_id_fk" ON "international_homes" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "leaderboards_created_by_id_fk" ON "leaderboards" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "leaderboards_updated_by_id_fk" ON "leaderboards" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_created_by_id_fk" ON "trips" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_updated_by_id_fk" ON "trips" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_permissions_role_links_fk" ON "admin_permissions_role_links" USING btree ("permission_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_permissions_role_links_inv_fk" ON "admin_permissions_role_links" USING btree ("role_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_permissions_role_links_order_inv_fk" ON "admin_permissions_role_links" USING btree ("permission_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_users_roles_links_fk" ON "admin_users_roles_links" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_users_roles_links_inv_fk" ON "admin_users_roles_links" USING btree ("role_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_users_roles_links_order_fk" ON "admin_users_roles_links" USING btree ("role_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "admin_users_roles_links_order_inv_fk" ON "admin_users_roles_links" USING btree ("user_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_api_token_permissions_token_links_fk" ON "strapi_api_token_permissions_token_links" USING btree ("api_token_permission_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_api_token_permissions_token_links_inv_fk" ON "strapi_api_token_permissions_token_links" USING btree ("api_token_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_api_token_permissions_token_links_order_inv_fk" ON "strapi_api_token_permissions_token_links" USING btree ("api_token_permission_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_transfer_token_permissions_token_links_fk" ON "strapi_transfer_token_permissions_token_links" USING btree ("transfer_token_permission_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_transfer_token_permissions_token_links_inv_fk" ON "strapi_transfer_token_permissions_token_links" USING btree ("transfer_token_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_transfer_token_permissions_token_links_order_inv_fk" ON "strapi_transfer_token_permissions_token_links" USING btree ("transfer_token_permission_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "files_related_morphs_fk" ON "files_related_morphs" USING btree ("file_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "files_related_morphs_id_column_index" ON "files_related_morphs" USING btree ("related_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "files_related_morphs_order_index" ON "files_related_morphs" USING btree ("order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "files_folder_links_fk" ON "files_folder_links" USING btree ("file_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "files_folder_links_inv_fk" ON "files_folder_links" USING btree ("folder_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "files_folder_links_order_inv_fk" ON "files_folder_links" USING btree ("file_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_folders_parent_links_fk" ON "upload_folders_parent_links" USING btree ("folder_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_folders_parent_links_inv_fk" ON "upload_folders_parent_links" USING btree ("inv_folder_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "upload_folders_parent_links_order_inv_fk" ON "upload_folders_parent_links" USING btree ("folder_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_release_actions_release_links_fk" ON "strapi_release_actions_release_links" USING btree ("release_action_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_release_actions_release_links_inv_fk" ON "strapi_release_actions_release_links" USING btree ("release_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "strapi_release_actions_release_links_order_inv_fk" ON "strapi_release_actions_release_links" USING btree ("release_action_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_permissions_role_links_fk" ON "up_permissions_role_links" USING btree ("permission_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_permissions_role_links_inv_fk" ON "up_permissions_role_links" USING btree ("role_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_permissions_role_links_order_inv_fk" ON "up_permissions_role_links" USING btree ("permission_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_users_role_links_fk" ON "up_users_role_links" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_users_role_links_inv_fk" ON "up_users_role_links" USING btree ("role_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "up_users_role_links_order_inv_fk" ON "up_users_role_links" USING btree ("user_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_component_type_index" ON "blogs_components" USING btree ("component_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_entity_fk" ON "blogs_components" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_field_index" ON "blogs_components" USING btree ("field");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_relatedblogs_links_fk" ON "blogs_relatedblogs_links" USING btree ("blog_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_relatedblogs_links_inv_fk" ON "blogs_relatedblogs_links" USING btree ("inv_blog_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_relatedblogs_links_order_fk" ON "blogs_relatedblogs_links" USING btree ("blog_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_destinations_links_fk" ON "blogs_destinations_links" USING btree ("blog_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_destinations_links_inv_fk" ON "blogs_destinations_links" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blogs_destinations_links_order_fk" ON "blogs_destinations_links" USING btree ("category_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_component_type_index" ON "blog_pages_components" USING btree ("component_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_entity_fk" ON "blog_pages_components" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_field_index" ON "blog_pages_components" USING btree ("field");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_allblogs_links_fk" ON "blog_pages_allblogs_links" USING btree ("blog_page_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_allblogs_links_inv_fk" ON "blog_pages_allblogs_links" USING btree ("blog_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_allblogs_links_order_fk" ON "blog_pages_allblogs_links" USING btree ("blog_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_featuredblogs_links_fk" ON "blog_pages_featuredblogs_links" USING btree ("blog_page_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_featuredblogs_links_inv_fk" ON "blog_pages_featuredblogs_links" USING btree ("blog_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_featuredblogs_links_order_fk" ON "blog_pages_featuredblogs_links" USING btree ("blog_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_landing_links_fk" ON "blog_pages_landing_links" USING btree ("blog_page_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "blog_pages_landing_links_inv_fk" ON "blog_pages_landing_links" USING btree ("blog_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "categories_parentcategory_links_fk" ON "categories_parentcategory_links" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "categories_parentcategory_links_inv_fk" ON "categories_parentcategory_links" USING btree ("inv_category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "categories_parentcategory_links_order_fk" ON "categories_parentcategory_links" USING btree ("category_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "categories_parentcategory_links_order_inv_fk" ON "categories_parentcategory_links" USING btree ("inv_category_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "categories_categories_links_fk" ON "categories_categories_links" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "categories_categories_links_inv_fk" ON "categories_categories_links" USING btree ("inv_category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "categories_categories_links_order_fk" ON "categories_categories_links" USING btree ("category_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "categories_categories_links_order_inv_fk" ON "categories_categories_links" USING btree ("inv_category_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "customizeds_component_type_index" ON "customizeds_components" USING btree ("component_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "customizeds_entity_fk" ON "customizeds_components" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "customizeds_field_index" ON "customizeds_components" USING btree ("field");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "domestic_trips_trips_links_fk" ON "domestic_trips_trips_links" USING btree ("domestic_trip_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "domestic_trips_trips_links_inv_fk" ON "domestic_trips_trips_links" USING btree ("trip_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "domestic_trips_trips_links_order_fk" ON "domestic_trips_trips_links" USING btree ("trip_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "homes_component_type_index" ON "homes_components" USING btree ("component_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "homes_entity_fk" ON "homes_components" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "homes_field_index" ON "homes_components" USING btree ("field");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "international_homes_trips_links_fk" ON "international_homes_trips_links" USING btree ("international_home_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "international_homes_trips_links_inv_fk" ON "international_homes_trips_links" USING btree ("trip_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "international_homes_trips_links_order_fk" ON "international_homes_trips_links" USING btree ("trip_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "leaderboards_component_type_index" ON "leaderboards_components" USING btree ("component_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "leaderboards_entity_fk" ON "leaderboards_components" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "leaderboards_field_index" ON "leaderboards_components" USING btree ("field");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_component_type_index" ON "trips_components" USING btree ("component_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_entity_fk" ON "trips_components" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_field_index" ON "trips_components" USING btree ("field");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_categories_links_fk" ON "trips_categories_links" USING btree ("trip_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_categories_links_inv_fk" ON "trips_categories_links" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_categories_links_order_fk" ON "trips_categories_links" USING btree ("category_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_categories_links_order_inv_fk" ON "trips_categories_links" USING btree ("trip_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_relatedtrips_links_fk" ON "trips_relatedtrips_links" USING btree ("trip_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_relatedtrips_links_inv_fk" ON "trips_relatedtrips_links" USING btree ("inv_trip_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "trips_relatedtrips_links_order_fk" ON "trips_relatedtrips_links" USING btree ("trip_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "components_trip_day_2s_component_type_index" ON "components_trip_day_2s_components" USING btree ("component_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "components_trip_day_2s_entity_fk" ON "components_trip_day_2s_components" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "components_trip_day_2s_field_index" ON "components_trip_day_2s_components" USING btree ("field");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_trips_links_fk" ON "google_ads_trips_links" USING btree ("google_ad_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_trips_links_inv_fk" ON "google_ads_trips_links" USING btree ("trip_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_trips_links_order_fk" ON "google_ads_trips_links" USING btree ("trip_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "teams_created_by_id_fk" ON "teams" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "teams_updated_by_id_fk" ON "teams" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "employees_team_links_fk" ON "employees_team_links" USING btree ("employee_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "employees_team_links_inv_fk" ON "employees_team_links" USING btree ("team_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "employees_team_links_order_inv_fk" ON "employees_team_links" USING btree ("employee_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "teams_leader_links_fk" ON "teams_leader_links" USING btree ("team_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "teams_leader_links_inv_fk" ON "teams_leader_links" USING btree ("employee_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "homes_categories_links_fk" ON "homes_categories_links" USING btree ("home_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "homes_categories_links_inv_fk" ON "homes_categories_links" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "homes_categories_links_order_fk" ON "homes_categories_links" USING btree ("category_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "activities_component_type_index" ON "activities_components" USING btree ("component_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "activities_entity_fk" ON "activities_components" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "activities_field_index" ON "activities_components" USING btree ("field");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "activities_created_by_id_fk" ON "activities" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "activities_updated_by_id_fk" ON "activities" USING btree ("updated_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_activities_links_fk" ON "google_ads_activities_links" USING btree ("google_ad_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_activities_links_inv_fk" ON "google_ads_activities_links" USING btree ("activity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "google_ads_activities_links_order_fk" ON "google_ads_activities_links" USING btree ("activity_order");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "testimonies_created_by_id_fk" ON "testimonies" USING btree ("created_by_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "testimonies_updated_by_id_fk" ON "testimonies" USING btree ("updated_by_id");
*/
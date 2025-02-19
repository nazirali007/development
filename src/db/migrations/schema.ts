import { pgTable, serial, varchar, timestamp, json, text, jsonb, boolean, index, foreignKey, unique, integer, doublePrecision, date, bigint, numeric } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const strapiMigrations = pgTable("strapi_migrations", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	time: timestamp("time", { mode: 'string' }),
});

export const strapiDatabaseSchema = pgTable("strapi_database_schema", {
	id: serial("id").primaryKey().notNull(),
	schema: json("schema"),
	time: timestamp("time", { mode: 'string' }),
	hash: varchar("hash", { length: 255 }),
});

export const strapiCoreStoreSettings = pgTable("strapi_core_store_settings", {
	id: serial("id").primaryKey().notNull(),
	key: varchar("key", { length: 255 }),
	value: text("value"),
	type: varchar("type", { length: 255 }),
	environment: varchar("environment", { length: 255 }),
	tag: varchar("tag", { length: 255 }),
});

export const strapiWebhooks = pgTable("strapi_webhooks", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	url: text("url"),
	headers: jsonb("headers"),
	events: jsonb("events"),
	enabled: boolean("enabled"),
});

export const componentsTripCuratedcards = pgTable("components_trip_curatedcards", {
	id: serial("id").primaryKey().notNull(),
	slug: varchar("slug", { length: 255 }),
	curatedimageurl: varchar("curatedimageurl", { length: 255 }),
	curatedcardalt: varchar("curatedcardalt", { length: 255 }),
});

export const googleAdsTestimoniesLinks = pgTable("google_ads_testimonies_links", {
	id: serial("id").primaryKey().notNull(),
	googleAdId: integer("google_ad_id"),
	testimonyId: integer("testimony_id"),
	testimonyOrder: doublePrecision("testimony_order"),
},
	(table) => {
		return {
			fk: index("google_ads_testimonies_links_fk").using("btree", table.googleAdId.asc().nullsLast()),
			invFk: index("google_ads_testimonies_links_inv_fk").using("btree", table.testimonyId.asc().nullsLast()),
			orderFk: index("google_ads_testimonies_links_order_fk").using("btree", table.testimonyOrder.asc().nullsLast()),
			googleAdsTestimoniesLinksFk: foreignKey({
				columns: [table.googleAdId],
				foreignColumns: [googleAds.id],
				name: "google_ads_testimonies_links_fk"
			}).onDelete("cascade"),
			googleAdsTestimoniesLinksInvFk: foreignKey({
				columns: [table.testimonyId],
				foreignColumns: [testimonies.id],
				name: "google_ads_testimonies_links_inv_fk"
			}).onDelete("cascade"),
			googleAdsTestimoniesLinksUnique: unique("google_ads_testimonies_links_unique").on(table.googleAdId, table.testimonyId),
		}
	});

export const retreatsComponents = pgTable("retreats_components", {
	id: serial("id").primaryKey().notNull(),
	entityId: integer("entity_id"),
	componentId: integer("component_id"),
	componentType: varchar("component_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			retreatsComponentTypeIdx: index("retreats_component_type_index").using("btree", table.componentType.asc().nullsLast()),
			retreatsEntityIdx: index("retreats_entity_fk").using("btree", table.entityId.asc().nullsLast()),
			retreatsFieldIdx: index("retreats_field_index").using("btree", table.field.asc().nullsLast()),
			retreatsEntityFk: foreignKey({
				columns: [table.entityId],
				foreignColumns: [retreats.id],
				name: "retreats_entity_fk"
			}).onDelete("cascade"),
			retreatsUnique: unique("retreats_unique").on(table.entityId, table.componentId, table.componentType, table.field),
		}
	});

export const retreats = pgTable("retreats", {
	id: serial("id").primaryKey().notNull(),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("retreats_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("retreats_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			retreatsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "retreats_created_by_id_fk"
			}).onDelete("set null"),
			retreatsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "retreats_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const componentsInternalEmployees = pgTable("components_internal_employees", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
});

export const componentsInternalTeamDetails = pgTable("components_internal_team_details", {
	id: serial("id").primaryKey().notNull(),
	heading: varchar("heading", { length: 255 }),
	description: text("description"),
});

export const componentsTripBanners = pgTable("components_trip_banners", {
	id: serial("id").primaryKey().notNull(),
	link: varchar("link", { length: 255 }),
	imgUrl: varchar("img_url", { length: 255 }),
	expirationDate: date("expiration_date"),
});

export const componentsTripCostings = pgTable("components_trip_costings", {
	id: serial("id").primaryKey().notNull(),
	mode: varchar("mode", { length: 255 }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	price: bigint("price", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	partialamount: bigint("partialamount", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	discountedprice: bigint("discountedprice", { mode: "number" }),
});

export const componentsTripCostingnotes = pgTable("components_trip_costingnotes", {
	id: serial("id").primaryKey().notNull(),
	note: varchar("note", { length: 255 }),
});

export const blogsAuthorLinks = pgTable("blogs_author_links", {
	id: serial("id").primaryKey().notNull(),
	blogId: integer("blog_id"),
	userId: integer("user_id"),
	blogOrder: doublePrecision("blog_order"),
},
	(table) => {
		return {
			fk: index("blogs_author_links_fk").using("btree", table.blogId.asc().nullsLast()),
			invFk: index("blogs_author_links_inv_fk").using("btree", table.userId.asc().nullsLast()),
			orderInvFk: index("blogs_author_links_order_inv_fk").using("btree", table.blogOrder.asc().nullsLast()),
			blogsAuthorLinksFk: foreignKey({
				columns: [table.blogId],
				foreignColumns: [blogs.id],
				name: "blogs_author_links_fk"
			}).onDelete("cascade"),
			blogsAuthorLinksInvFk: foreignKey({
				columns: [table.userId],
				foreignColumns: [upUsers.id],
				name: "blogs_author_links_inv_fk"
			}).onDelete("cascade"),
			blogsAuthorLinksUnique: unique("blogs_author_links_unique").on(table.blogId, table.userId),
		}
	});

export const componentsTripDatesTemps = pgTable("components_trip_dates_temps", {
	id: serial("id").primaryKey().notNull(),
	datetemp: date("datetemp"),
});

export const componentsTripDates = pgTable("components_trip_dates", {
	id: serial("id").primaryKey().notNull(),
	tripdate: date("tripdate"),
});

export const componentsTripDetails = pgTable("components_trip_details", {
	id: serial("id").primaryKey().notNull(),
	line: varchar("line", { length: 255 }),
});

export const componentsTripFaqs = pgTable("components_trip_faqs", {
	id: serial("id").primaryKey().notNull(),
	question: varchar("question", { length: 255 }),
	answer: text("answer"),
});

export const componentsTripMetacontents = pgTable("components_trip_metacontents", {
	id: serial("id").primaryKey().notNull(),
	metatitle: text("metatitle"),
	metakeywords: text("metakeywords"),
	metadescription: text("metadescription"),
	schemamarkup: jsonb("schemamarkup"),
});

export const componentsTripSchemaMarkups = pgTable("components_trip_schema_markups", {
	id: serial("id").primaryKey().notNull(),
	content: varchar("content", { length: 255 }),
	type: varchar("type", { length: 255 }),
	name: varchar("name", { length: 255 }),
	image: varchar("image", { length: 255 }),
	description: varchar("description", { length: 255 }),
});

export const componentsTripTexts = pgTable("components_trip_texts", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 255 }),
});

export const componentsTripTripDates = pgTable("components_trip_trip_dates", {
	id: serial("id").primaryKey().notNull(),
	tripdate: date("tripdate"),
});

export const componentsTripTestimonials = pgTable("components_trip_testimonials", {
	id: serial("id").primaryKey().notNull(),
	title: text("title"),
	rating: numeric("rating", { precision: 10, scale: 2 }),
	description: text("description"),
	author: varchar("author", { length: 255 }),
});

export const employees = pgTable("employees", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("employees_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("employees_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			employeesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "employees_created_by_id_fk"
			}).onDelete("set null"),
			employeesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "employees_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const tvs = pgTable("tvs", {
	id: serial("id").primaryKey().notNull(),
	view: varchar("view", { length: 255 }),
	noticeboard: text("noticeboard"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("tvs_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("tvs_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			tvsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "tvs_created_by_id_fk"
			}).onDelete("set null"),
			tvsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "tvs_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const tvsTopemployeesLinks = pgTable("tvs_topemployees_links", {
	id: serial("id").primaryKey().notNull(),
	tvId: integer("tv_id"),
	employeeId: integer("employee_id"),
	employeeOrder: doublePrecision("employee_order"),
},
	(table) => {
		return {
			fk: index("tvs_topemployees_links_fk").using("btree", table.tvId.asc().nullsLast()),
			invFk: index("tvs_topemployees_links_inv_fk").using("btree", table.employeeId.asc().nullsLast()),
			orderFk: index("tvs_topemployees_links_order_fk").using("btree", table.employeeOrder.asc().nullsLast()),
			tvsTopemployeesLinksFk: foreignKey({
				columns: [table.tvId],
				foreignColumns: [tvs.id],
				name: "tvs_topemployees_links_fk"
			}).onDelete("cascade"),
			tvsTopemployeesLinksInvFk: foreignKey({
				columns: [table.employeeId],
				foreignColumns: [employees.id],
				name: "tvs_topemployees_links_inv_fk"
			}).onDelete("cascade"),
			tvsTopemployeesLinksUnique: unique("tvs_topemployees_links_unique").on(table.tvId, table.employeeId),
		}
	});

export const googleAds = pgTable("google_ads", {
	id: serial("id").primaryKey().notNull(),
	slug: varchar("slug", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("google_ads_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("google_ads_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			googleAdsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "google_ads_created_by_id_fk"
			}).onDelete("set null"),
			googleAdsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "google_ads_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const componentsTripDestinations = pgTable("components_trip_destinations", {
	id: serial("id").primaryKey().notNull(),
	destination: varchar("destination", { length: 255 }),
});

export const googleAdsComponents = pgTable("google_ads_components", {
	id: serial("id").primaryKey().notNull(),
	entityId: integer("entity_id"),
	componentId: integer("component_id"),
	componentType: varchar("component_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			googleAdsComponentTypeIdx: index("google_ads_component_type_index").using("btree", table.componentType.asc().nullsLast()),
			googleAdsEntityIdx: index("google_ads_entity_fk").using("btree", table.entityId.asc().nullsLast()),
			googleAdsFieldIdx: index("google_ads_field_index").using("btree", table.field.asc().nullsLast()),
			googleAdsEntityFk: foreignKey({
				columns: [table.entityId],
				foreignColumns: [googleAds.id],
				name: "google_ads_entity_fk"
			}).onDelete("cascade"),
			googleAdsUnique: unique("google_ads_unique").on(table.entityId, table.componentId, table.componentType, table.field),
		}
	});

export const adminUsers = pgTable("admin_users", {
	id: serial("id").primaryKey().notNull(),
	firstname: varchar("firstname", { length: 255 }),
	lastname: varchar("lastname", { length: 255 }),
	username: varchar("username", { length: 255 }),
	email: varchar("email", { length: 255 }),
	password: varchar("password", { length: 255 }),
	resetPasswordToken: varchar("reset_password_token", { length: 255 }),
	registrationToken: varchar("registration_token", { length: 255 }),
	isActive: boolean("is_active"),
	blocked: boolean("blocked"),
	preferedLanguage: varchar("prefered_language", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("admin_users_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("admin_users_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			adminUsersCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [table.id],
				name: "admin_users_created_by_id_fk"
			}).onDelete("set null"),
			adminUsersUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [table.id],
				name: "admin_users_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const adminPermissions = pgTable("admin_permissions", {
	id: serial("id").primaryKey().notNull(),
	action: varchar("action", { length: 255 }),
	actionParameters: jsonb("action_parameters"),
	subject: varchar("subject", { length: 255 }),
	properties: jsonb("properties"),
	conditions: jsonb("conditions"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("admin_permissions_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("admin_permissions_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			adminPermissionsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "admin_permissions_created_by_id_fk"
			}).onDelete("set null"),
			adminPermissionsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "admin_permissions_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const adminRoles = pgTable("admin_roles", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	code: varchar("code", { length: 255 }),
	description: varchar("description", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("admin_roles_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("admin_roles_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			adminRolesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "admin_roles_created_by_id_fk"
			}).onDelete("set null"),
			adminRolesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "admin_roles_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const strapiApiTokens = pgTable("strapi_api_tokens", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	description: varchar("description", { length: 255 }),
	type: varchar("type", { length: 255 }),
	accessKey: varchar("access_key", { length: 255 }),
	lastUsedAt: timestamp("last_used_at", { precision: 6, mode: 'string' }),
	expiresAt: timestamp("expires_at", { precision: 6, mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	lifespan: bigint("lifespan", { mode: "number" }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("strapi_api_tokens_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("strapi_api_tokens_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			strapiApiTokensCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "strapi_api_tokens_created_by_id_fk"
			}).onDelete("set null"),
			strapiApiTokensUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "strapi_api_tokens_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const strapiApiTokenPermissions = pgTable("strapi_api_token_permissions", {
	id: serial("id").primaryKey().notNull(),
	action: varchar("action", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("strapi_api_token_permissions_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("strapi_api_token_permissions_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			strapiApiTokenPermissionsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "strapi_api_token_permissions_created_by_id_fk"
			}).onDelete("set null"),
			strapiApiTokenPermissionsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "strapi_api_token_permissions_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const strapiTransferTokens = pgTable("strapi_transfer_tokens", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	description: varchar("description", { length: 255 }),
	accessKey: varchar("access_key", { length: 255 }),
	lastUsedAt: timestamp("last_used_at", { precision: 6, mode: 'string' }),
	expiresAt: timestamp("expires_at", { precision: 6, mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	lifespan: bigint("lifespan", { mode: "number" }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("strapi_transfer_tokens_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("strapi_transfer_tokens_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			strapiTransferTokensCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "strapi_transfer_tokens_created_by_id_fk"
			}).onDelete("set null"),
			strapiTransferTokensUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "strapi_transfer_tokens_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const strapiTransferTokenPermissions = pgTable("strapi_transfer_token_permissions", {
	id: serial("id").primaryKey().notNull(),
	action: varchar("action", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("strapi_transfer_token_permissions_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("strapi_transfer_token_permissions_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			strapiTransferTokenPermissionsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "strapi_transfer_token_permissions_created_by_id_fk"
			}).onDelete("set null"),
			strapiTransferTokenPermissionsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "strapi_transfer_token_permissions_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const files = pgTable("files", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	alternativeText: varchar("alternative_text", { length: 255 }),
	caption: varchar("caption", { length: 255 }),
	width: integer("width"),
	height: integer("height"),
	formats: jsonb("formats"),
	hash: varchar("hash", { length: 255 }),
	ext: varchar("ext", { length: 255 }),
	mime: varchar("mime", { length: 255 }),
	size: numeric("size", { precision: 10, scale: 2 }),
	url: varchar("url", { length: 255 }),
	previewUrl: varchar("preview_url", { length: 255 }),
	provider: varchar("provider", { length: 255 }),
	providerMetadata: jsonb("provider_metadata"),
	folderPath: varchar("folder_path", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("files_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("files_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			uploadFilesCreatedAtIdx: index("upload_files_created_at_index").using("btree", table.createdAt.asc().nullsLast()),
			uploadFilesExtIdx: index("upload_files_ext_index").using("btree", table.ext.asc().nullsLast()),
			uploadFilesFolderPathIdx: index("upload_files_folder_path_index").using("btree", table.folderPath.asc().nullsLast()),
			uploadFilesNameIdx: index("upload_files_name_index").using("btree", table.name.asc().nullsLast()),
			uploadFilesSizeIdx: index("upload_files_size_index").using("btree", table.size.asc().nullsLast()),
			uploadFilesUpdatedAtIdx: index("upload_files_updated_at_index").using("btree", table.updatedAt.asc().nullsLast()),
			filesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "files_created_by_id_fk"
			}).onDelete("set null"),
			filesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "files_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const uploadFolders = pgTable("upload_folders", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	pathId: integer("path_id"),
	path: varchar("path", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("upload_folders_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("upload_folders_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			uploadFoldersCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "upload_folders_created_by_id_fk"
			}).onDelete("set null"),
			uploadFoldersUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "upload_folders_updated_by_id_fk"
			}).onDelete("set null"),
			uploadFoldersPathIdIndex: unique("upload_folders_path_id_index").on(table.pathId),
			uploadFoldersPathIndex: unique("upload_folders_path_index").on(table.path),
		}
	});

export const strapiReleases = pgTable("strapi_releases", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	releasedAt: timestamp("released_at", { precision: 6, mode: 'string' }),
	scheduledAt: timestamp("scheduled_at", { precision: 6, mode: 'string' }),
	timezone: varchar("timezone", { length: 255 }),
	status: varchar("status", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("strapi_releases_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("strapi_releases_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			strapiReleasesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "strapi_releases_created_by_id_fk"
			}).onDelete("set null"),
			strapiReleasesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "strapi_releases_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const strapiReleaseActions = pgTable("strapi_release_actions", {
	id: serial("id").primaryKey().notNull(),
	type: varchar("type", { length: 255 }),
	targetId: integer("target_id"),
	targetType: varchar("target_type", { length: 255 }),
	contentType: varchar("content_type", { length: 255 }),
	locale: varchar("locale", { length: 255 }),
	isEntryValid: boolean("is_entry_valid"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("strapi_release_actions_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("strapi_release_actions_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			strapiReleaseActionsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "strapi_release_actions_created_by_id_fk"
			}).onDelete("set null"),
			strapiReleaseActionsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "strapi_release_actions_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const i18NLocale = pgTable("i18n_locale", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	code: varchar("code", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("i18n_locale_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("i18n_locale_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			i18NLocaleCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "i18n_locale_created_by_id_fk"
			}).onDelete("set null"),
			i18NLocaleUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "i18n_locale_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const upPermissions = pgTable("up_permissions", {
	id: serial("id").primaryKey().notNull(),
	action: varchar("action", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("up_permissions_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("up_permissions_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			upPermissionsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "up_permissions_created_by_id_fk"
			}).onDelete("set null"),
			upPermissionsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "up_permissions_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const upRoles = pgTable("up_roles", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	description: varchar("description", { length: 255 }),
	type: varchar("type", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("up_roles_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("up_roles_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			upRolesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "up_roles_created_by_id_fk"
			}).onDelete("set null"),
			upRolesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "up_roles_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const upUsers = pgTable("up_users", {
	id: serial("id").primaryKey().notNull(),
	username: varchar("username", { length: 255 }),
	email: varchar("email", { length: 255 }),
	provider: varchar("provider", { length: 255 }),
	password: varchar("password", { length: 255 }),
	resetPasswordToken: varchar("reset_password_token", { length: 255 }),
	confirmationToken: varchar("confirmation_token", { length: 255 }),
	confirmed: boolean("confirmed"),
	blocked: boolean("blocked"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
	description: text("description"),
},
	(table) => {
		return {
			createdByIdFk: index("up_users_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("up_users_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			upUsersCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "up_users_created_by_id_fk"
			}).onDelete("set null"),
			upUsersUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "up_users_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const actions = pgTable("actions", {
	id: serial("id").primaryKey().notNull(),
	executeAt: timestamp("execute_at", { precision: 6, mode: 'string' }),
	mode: varchar("mode", { length: 255 }),
	entityId: integer("entity_id"),
	entitySlug: varchar("entity_slug", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("actions_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("actions_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			actionsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "actions_created_by_id_fk"
			}).onDelete("set null"),
			actionsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "actions_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const blogs = pgTable("blogs", {
	id: serial("id").primaryKey().notNull(),
	slug: varchar("slug", { length: 255 }),
	title: varchar("title", { length: 255 }),
	bannerimageurl: varchar("bannerimageurl", { length: 255 }),
	bannerimagealt: varchar("bannerimagealt", { length: 255 }),
	content: text("content"),
	description: text("description"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("blogs_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("blogs_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			blogsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "blogs_created_by_id_fk"
			}).onDelete("set null"),
			blogsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "blogs_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const blogPages = pgTable("blog_pages", {
	id: serial("id").primaryKey().notNull(),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("blog_pages_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("blog_pages_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			blogPagesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "blog_pages_created_by_id_fk"
			}).onDelete("set null"),
			blogPagesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "blog_pages_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const categories = pgTable("categories", {
	id: serial("id").primaryKey().notNull(),
	title: text("title"),
	about: text("about"),
	metatitle: text("metatitle"),
	metakeywords: text("metakeywords"),
	metadescription: text("metadescription"),
	schemamarkup: jsonb("schemamarkup"),
	bannerimageurl: text("bannerimageurl"),
	bannerimagealt: text("bannerimagealt"),
	slug: varchar("slug", { length: 255 }),
	titleabout: text("titleabout"),
	smallabout: text("smallabout"),
	location: varchar("location", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("categories_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("categories_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			categoriesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "categories_created_by_id_fk"
			}).onDelete("set null"),
			categoriesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "categories_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const customizeds = pgTable("customizeds", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 255 }),
	description: varchar("description", { length: 255 }),
	formtitle: varchar("formtitle", { length: 255 }),
	formdescription: varchar("formdescription", { length: 255 }),
	slug: varchar("slug", { length: 255 }),
	videourl: varchar("videourl", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("customizeds_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("customizeds_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			customizedsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "customizeds_created_by_id_fk"
			}).onDelete("set null"),
			customizedsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "customizeds_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const domesticTrips = pgTable("domestic_trips", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 255 }),
	about: text("about"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("domestic_trips_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("domestic_trips_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			domesticTripsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "domestic_trips_created_by_id_fk"
			}).onDelete("set null"),
			domesticTripsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "domestic_trips_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const homes = pgTable("homes", {
	id: serial("id").primaryKey().notNull(),
	heading1: varchar("heading_1", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("homes_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("homes_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			homesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "homes_created_by_id_fk"
			}).onDelete("set null"),
			homesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "homes_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const internationalHomes = pgTable("international_homes", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 255 }),
	about: text("about"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("international_homes_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("international_homes_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			internationalHomesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "international_homes_created_by_id_fk"
			}).onDelete("set null"),
			internationalHomesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "international_homes_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const leaderboards = pgTable("leaderboards", {
	id: serial("id").primaryKey().notNull(),
	pageHeading: varchar("page_heading", { length: 255 }),
	pageType: varchar("page_type", { length: 255 }),
	noticeboardContent: text("noticeboard_content"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("leaderboards_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("leaderboards_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			leaderboardsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "leaderboards_created_by_id_fk"
			}).onDelete("set null"),
			leaderboardsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "leaderboards_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const trips = pgTable("trips", {
	id: serial("id").primaryKey().notNull(),
	slug: varchar("slug", { length: 255 }),
	name: text("name"),
	description: text("description"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	price: bigint("price", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	discount: bigint("discount", { mode: "number" }),
	pickup: text("pickup"),
	drop: text("drop"),
	inclusions: text("inclusions"),
	exclusions: text("exclusions"),
	note: text("note"),
	itinerary: text("itinerary"),
	prebooking: boolean("prebooking"),
	isCustomized: boolean("is_customized"),
	isInternational: boolean("is_international"),
	isDomestic: boolean("is_domestic"),
	coverimageurl: text("coverimageurl"),
	bannerimageurl: text("bannerimageurl"),
	reviewvideourl: text("reviewvideourl"),
	perk1: varchar("perk_1", { length: 255 }),
	perk2: varchar("perk_2", { length: 255 }),
	durationdays: integer("durationdays"),
	metatitle: text("metatitle"),
	metakeywords: text("metakeywords"),
	metadescription: text("metadescription"),
	schemamarkup: jsonb("schemamarkup"),
	itinerarypdfurl: text("itinerarypdfurl"),
	coverImageurlalt: text("cover_imageurlalt"),
	bannerimageurlalt: text("bannerimageurlalt"),
	titledescription: text("titledescription"),
	smalldescription: text("smalldescription"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("trips_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("trips_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			tripsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "trips_created_by_id_fk"
			}).onDelete("set null"),
			tripsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "trips_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const adminPermissionsRoleLinks = pgTable("admin_permissions_role_links", {
	id: serial("id").primaryKey().notNull(),
	permissionId: integer("permission_id"),
	roleId: integer("role_id"),
	permissionOrder: doublePrecision("permission_order"),
},
	(table) => {
		return {
			fk: index("admin_permissions_role_links_fk").using("btree", table.permissionId.asc().nullsLast()),
			invFk: index("admin_permissions_role_links_inv_fk").using("btree", table.roleId.asc().nullsLast()),
			orderInvFk: index("admin_permissions_role_links_order_inv_fk").using("btree", table.permissionOrder.asc().nullsLast()),
			adminPermissionsRoleLinksFk: foreignKey({
				columns: [table.permissionId],
				foreignColumns: [adminPermissions.id],
				name: "admin_permissions_role_links_fk"
			}).onDelete("cascade"),
			adminPermissionsRoleLinksInvFk: foreignKey({
				columns: [table.roleId],
				foreignColumns: [adminRoles.id],
				name: "admin_permissions_role_links_inv_fk"
			}).onDelete("cascade"),
			adminPermissionsRoleLinksUnique: unique("admin_permissions_role_links_unique").on(table.permissionId, table.roleId),
		}
	});

export const adminUsersRolesLinks = pgTable("admin_users_roles_links", {
	id: serial("id").primaryKey().notNull(),
	userId: integer("user_id"),
	roleId: integer("role_id"),
	roleOrder: doublePrecision("role_order"),
	userOrder: doublePrecision("user_order"),
},
	(table) => {
		return {
			fk: index("admin_users_roles_links_fk").using("btree", table.userId.asc().nullsLast()),
			invFk: index("admin_users_roles_links_inv_fk").using("btree", table.roleId.asc().nullsLast()),
			orderFk: index("admin_users_roles_links_order_fk").using("btree", table.roleOrder.asc().nullsLast()),
			orderInvFk: index("admin_users_roles_links_order_inv_fk").using("btree", table.userOrder.asc().nullsLast()),
			adminUsersRolesLinksFk: foreignKey({
				columns: [table.userId],
				foreignColumns: [adminUsers.id],
				name: "admin_users_roles_links_fk"
			}).onDelete("cascade"),
			adminUsersRolesLinksInvFk: foreignKey({
				columns: [table.roleId],
				foreignColumns: [adminRoles.id],
				name: "admin_users_roles_links_inv_fk"
			}).onDelete("cascade"),
			adminUsersRolesLinksUnique: unique("admin_users_roles_links_unique").on(table.userId, table.roleId),
		}
	});

export const strapiApiTokenPermissionsTokenLinks = pgTable("strapi_api_token_permissions_token_links", {
	id: serial("id").primaryKey().notNull(),
	apiTokenPermissionId: integer("api_token_permission_id"),
	apiTokenId: integer("api_token_id"),
	apiTokenPermissionOrder: doublePrecision("api_token_permission_order"),
},
	(table) => {
		return {
			fk: index("strapi_api_token_permissions_token_links_fk").using("btree", table.apiTokenPermissionId.asc().nullsLast()),
			invFk: index("strapi_api_token_permissions_token_links_inv_fk").using("btree", table.apiTokenId.asc().nullsLast()),
			orderInvFk: index("strapi_api_token_permissions_token_links_order_inv_fk").using("btree", table.apiTokenPermissionOrder.asc().nullsLast()),
			strapiApiTokenPermissionsTokenLinksFk: foreignKey({
				columns: [table.apiTokenPermissionId],
				foreignColumns: [strapiApiTokenPermissions.id],
				name: "strapi_api_token_permissions_token_links_fk"
			}).onDelete("cascade"),
			strapiApiTokenPermissionsTokenLinksInvFk: foreignKey({
				columns: [table.apiTokenId],
				foreignColumns: [strapiApiTokens.id],
				name: "strapi_api_token_permissions_token_links_inv_fk"
			}).onDelete("cascade"),
			strapiApiTokenPermissionsTokenLinksUnique: unique("strapi_api_token_permissions_token_links_unique").on(table.apiTokenPermissionId, table.apiTokenId),
		}
	});

export const strapiTransferTokenPermissionsTokenLinks = pgTable("strapi_transfer_token_permissions_token_links", {
	id: serial("id").primaryKey().notNull(),
	transferTokenPermissionId: integer("transfer_token_permission_id"),
	transferTokenId: integer("transfer_token_id"),
	transferTokenPermissionOrder: doublePrecision("transfer_token_permission_order"),
},
	(table) => {
		return {
			fk: index("strapi_transfer_token_permissions_token_links_fk").using("btree", table.transferTokenPermissionId.asc().nullsLast()),
			invFk: index("strapi_transfer_token_permissions_token_links_inv_fk").using("btree", table.transferTokenId.asc().nullsLast()),
			orderInvFk: index("strapi_transfer_token_permissions_token_links_order_inv_fk").using("btree", table.transferTokenPermissionOrder.asc().nullsLast()),
			strapiTransferTokenPermissionsTokenLinksFk: foreignKey({
				columns: [table.transferTokenPermissionId],
				foreignColumns: [strapiTransferTokenPermissions.id],
				name: "strapi_transfer_token_permissions_token_links_fk"
			}).onDelete("cascade"),
			strapiTransferTokenPermissionsTokenLinksInvFk: foreignKey({
				columns: [table.transferTokenId],
				foreignColumns: [strapiTransferTokens.id],
				name: "strapi_transfer_token_permissions_token_links_inv_fk"
			}).onDelete("cascade"),
			strapiTransferTokenPermissionsTokenLinksUnique: unique("strapi_transfer_token_permissions_token_links_unique").on(table.transferTokenPermissionId, table.transferTokenId),
		}
	});

export const filesRelatedMorphs = pgTable("files_related_morphs", {
	id: serial("id").primaryKey().notNull(),
	fileId: integer("file_id"),
	relatedId: integer("related_id"),
	relatedType: varchar("related_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			fk: index("files_related_morphs_fk").using("btree", table.fileId.asc().nullsLast()),
			idColumnIdx: index("files_related_morphs_id_column_index").using("btree", table.relatedId.asc().nullsLast()),
			orderIdx: index().using("btree", table.order.asc().nullsLast()),
			filesRelatedMorphsFk: foreignKey({
				columns: [table.fileId],
				foreignColumns: [files.id],
				name: "files_related_morphs_fk"
			}).onDelete("cascade"),
		}
	});

export const filesFolderLinks = pgTable("files_folder_links", {
	id: serial("id").primaryKey().notNull(),
	fileId: integer("file_id"),
	folderId: integer("folder_id"),
	fileOrder: doublePrecision("file_order"),
},
	(table) => {
		return {
			fk: index("files_folder_links_fk").using("btree", table.fileId.asc().nullsLast()),
			invFk: index("files_folder_links_inv_fk").using("btree", table.folderId.asc().nullsLast()),
			orderInvFk: index("files_folder_links_order_inv_fk").using("btree", table.fileOrder.asc().nullsLast()),
			filesFolderLinksFk: foreignKey({
				columns: [table.fileId],
				foreignColumns: [files.id],
				name: "files_folder_links_fk"
			}).onDelete("cascade"),
			filesFolderLinksInvFk: foreignKey({
				columns: [table.folderId],
				foreignColumns: [uploadFolders.id],
				name: "files_folder_links_inv_fk"
			}).onDelete("cascade"),
			filesFolderLinksUnique: unique("files_folder_links_unique").on(table.fileId, table.folderId),
		}
	});

export const uploadFoldersParentLinks = pgTable("upload_folders_parent_links", {
	id: serial("id").primaryKey().notNull(),
	folderId: integer("folder_id"),
	invFolderId: integer("inv_folder_id"),
	folderOrder: doublePrecision("folder_order"),
},
	(table) => {
		return {
			fk: index("upload_folders_parent_links_fk").using("btree", table.folderId.asc().nullsLast()),
			invFk: index("upload_folders_parent_links_inv_fk").using("btree", table.invFolderId.asc().nullsLast()),
			orderInvFk: index("upload_folders_parent_links_order_inv_fk").using("btree", table.folderOrder.asc().nullsLast()),
			uploadFoldersParentLinksFk: foreignKey({
				columns: [table.folderId],
				foreignColumns: [uploadFolders.id],
				name: "upload_folders_parent_links_fk"
			}).onDelete("cascade"),
			uploadFoldersParentLinksInvFk: foreignKey({
				columns: [table.invFolderId],
				foreignColumns: [uploadFolders.id],
				name: "upload_folders_parent_links_inv_fk"
			}).onDelete("cascade"),
			uploadFoldersParentLinksUnique: unique("upload_folders_parent_links_unique").on(table.folderId, table.invFolderId),
		}
	});

export const strapiReleaseActionsReleaseLinks = pgTable("strapi_release_actions_release_links", {
	id: serial("id").primaryKey().notNull(),
	releaseActionId: integer("release_action_id"),
	releaseId: integer("release_id"),
	releaseActionOrder: doublePrecision("release_action_order"),
},
	(table) => {
		return {
			fk: index("strapi_release_actions_release_links_fk").using("btree", table.releaseActionId.asc().nullsLast()),
			invFk: index("strapi_release_actions_release_links_inv_fk").using("btree", table.releaseId.asc().nullsLast()),
			orderInvFk: index("strapi_release_actions_release_links_order_inv_fk").using("btree", table.releaseActionOrder.asc().nullsLast()),
			strapiReleaseActionsReleaseLinksFk: foreignKey({
				columns: [table.releaseActionId],
				foreignColumns: [strapiReleaseActions.id],
				name: "strapi_release_actions_release_links_fk"
			}).onDelete("cascade"),
			strapiReleaseActionsReleaseLinksInvFk: foreignKey({
				columns: [table.releaseId],
				foreignColumns: [strapiReleases.id],
				name: "strapi_release_actions_release_links_inv_fk"
			}).onDelete("cascade"),
			strapiReleaseActionsReleaseLinksUnique: unique("strapi_release_actions_release_links_unique").on(table.releaseActionId, table.releaseId),
		}
	});

export const upPermissionsRoleLinks = pgTable("up_permissions_role_links", {
	id: serial("id").primaryKey().notNull(),
	permissionId: integer("permission_id"),
	roleId: integer("role_id"),
	permissionOrder: doublePrecision("permission_order"),
},
	(table) => {
		return {
			fk: index("up_permissions_role_links_fk").using("btree", table.permissionId.asc().nullsLast()),
			invFk: index("up_permissions_role_links_inv_fk").using("btree", table.roleId.asc().nullsLast()),
			orderInvFk: index("up_permissions_role_links_order_inv_fk").using("btree", table.permissionOrder.asc().nullsLast()),
			upPermissionsRoleLinksFk: foreignKey({
				columns: [table.permissionId],
				foreignColumns: [upPermissions.id],
				name: "up_permissions_role_links_fk"
			}).onDelete("cascade"),
			upPermissionsRoleLinksInvFk: foreignKey({
				columns: [table.roleId],
				foreignColumns: [upRoles.id],
				name: "up_permissions_role_links_inv_fk"
			}).onDelete("cascade"),
			upPermissionsRoleLinksUnique: unique("up_permissions_role_links_unique").on(table.permissionId, table.roleId),
		}
	});

export const upUsersRoleLinks = pgTable("up_users_role_links", {
	id: serial("id").primaryKey().notNull(),
	userId: integer("user_id"),
	roleId: integer("role_id"),
	userOrder: doublePrecision("user_order"),
},
	(table) => {
		return {
			fk: index("up_users_role_links_fk").using("btree", table.userId.asc().nullsLast()),
			invFk: index("up_users_role_links_inv_fk").using("btree", table.roleId.asc().nullsLast()),
			orderInvFk: index("up_users_role_links_order_inv_fk").using("btree", table.userOrder.asc().nullsLast()),
			upUsersRoleLinksFk: foreignKey({
				columns: [table.userId],
				foreignColumns: [upUsers.id],
				name: "up_users_role_links_fk"
			}).onDelete("cascade"),
			upUsersRoleLinksInvFk: foreignKey({
				columns: [table.roleId],
				foreignColumns: [upRoles.id],
				name: "up_users_role_links_inv_fk"
			}).onDelete("cascade"),
			upUsersRoleLinksUnique: unique("up_users_role_links_unique").on(table.userId, table.roleId),
		}
	});

export const blogsComponents = pgTable("blogs_components", {
	id: serial("id").primaryKey().notNull(),
	entityId: integer("entity_id"),
	componentId: integer("component_id"),
	componentType: varchar("component_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			blogsComponentTypeIdx: index("blogs_component_type_index").using("btree", table.componentType.asc().nullsLast()),
			blogsEntityIdx: index("blogs_entity_fk").using("btree", table.entityId.asc().nullsLast()),
			blogsFieldIdx: index("blogs_field_index").using("btree", table.field.asc().nullsLast()),
			blogsEntityFk: foreignKey({
				columns: [table.entityId],
				foreignColumns: [blogs.id],
				name: "blogs_entity_fk"
			}).onDelete("cascade"),
			blogsUnique: unique("blogs_unique").on(table.entityId, table.componentId, table.componentType, table.field),
		}
	});

export const blogsRelatedblogsLinks = pgTable("blogs_relatedblogs_links", {
	id: serial("id").primaryKey().notNull(),
	blogId: integer("blog_id"),
	invBlogId: integer("inv_blog_id"),
	blogOrder: doublePrecision("blog_order"),
},
	(table) => {
		return {
			fk: index("blogs_relatedblogs_links_fk").using("btree", table.blogId.asc().nullsLast()),
			invFk: index("blogs_relatedblogs_links_inv_fk").using("btree", table.invBlogId.asc().nullsLast()),
			orderFk: index("blogs_relatedblogs_links_order_fk").using("btree", table.blogOrder.asc().nullsLast()),
			blogsRelatedblogsLinksFk: foreignKey({
				columns: [table.blogId],
				foreignColumns: [blogs.id],
				name: "blogs_relatedblogs_links_fk"
			}).onDelete("cascade"),
			blogsRelatedblogsLinksInvFk: foreignKey({
				columns: [table.invBlogId],
				foreignColumns: [blogs.id],
				name: "blogs_relatedblogs_links_inv_fk"
			}).onDelete("cascade"),
			blogsRelatedblogsLinksUnique: unique("blogs_relatedblogs_links_unique").on(table.blogId, table.invBlogId),
		}
	});

export const blogsDestinationsLinks = pgTable("blogs_destinations_links", {
	id: serial("id").primaryKey().notNull(),
	blogId: integer("blog_id"),
	categoryId: integer("category_id"),
	categoryOrder: doublePrecision("category_order"),
},
	(table) => {
		return {
			fk: index("blogs_destinations_links_fk").using("btree", table.blogId.asc().nullsLast()),
			invFk: index("blogs_destinations_links_inv_fk").using("btree", table.categoryId.asc().nullsLast()),
			orderFk: index("blogs_destinations_links_order_fk").using("btree", table.categoryOrder.asc().nullsLast()),
			blogsDestinationsLinksFk: foreignKey({
				columns: [table.blogId],
				foreignColumns: [blogs.id],
				name: "blogs_destinations_links_fk"
			}).onDelete("cascade"),
			blogsDestinationsLinksInvFk: foreignKey({
				columns: [table.categoryId],
				foreignColumns: [categories.id],
				name: "blogs_destinations_links_inv_fk"
			}).onDelete("cascade"),
			blogsDestinationsLinksUnique: unique("blogs_destinations_links_unique").on(table.blogId, table.categoryId),
		}
	});

export const blogPagesComponents = pgTable("blog_pages_components", {
	id: serial("id").primaryKey().notNull(),
	entityId: integer("entity_id"),
	componentId: integer("component_id"),
	componentType: varchar("component_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			blogPagesComponentTypeIdx: index("blog_pages_component_type_index").using("btree", table.componentType.asc().nullsLast()),
			blogPagesEntityIdx: index("blog_pages_entity_fk").using("btree", table.entityId.asc().nullsLast()),
			blogPagesFieldIdx: index("blog_pages_field_index").using("btree", table.field.asc().nullsLast()),
			blogPagesEntityFk: foreignKey({
				columns: [table.entityId],
				foreignColumns: [blogPages.id],
				name: "blog_pages_entity_fk"
			}).onDelete("cascade"),
			blogPagesUnique: unique("blog_pages_unique").on(table.entityId, table.componentId, table.componentType, table.field),
		}
	});

export const blogPagesAllblogsLinks = pgTable("blog_pages_allblogs_links", {
	id: serial("id").primaryKey().notNull(),
	blogPageId: integer("blog_page_id"),
	blogId: integer("blog_id"),
	blogOrder: doublePrecision("blog_order"),
},
	(table) => {
		return {
			fk: index("blog_pages_allblogs_links_fk").using("btree", table.blogPageId.asc().nullsLast()),
			invFk: index("blog_pages_allblogs_links_inv_fk").using("btree", table.blogId.asc().nullsLast()),
			orderFk: index("blog_pages_allblogs_links_order_fk").using("btree", table.blogOrder.asc().nullsLast()),
			blogPagesAllblogsLinksFk: foreignKey({
				columns: [table.blogPageId],
				foreignColumns: [blogPages.id],
				name: "blog_pages_allblogs_links_fk"
			}).onDelete("cascade"),
			blogPagesAllblogsLinksInvFk: foreignKey({
				columns: [table.blogId],
				foreignColumns: [blogs.id],
				name: "blog_pages_allblogs_links_inv_fk"
			}).onDelete("cascade"),
			blogPagesAllblogsLinksUnique: unique("blog_pages_allblogs_links_unique").on(table.blogPageId, table.blogId),
		}
	});

export const blogPagesFeaturedblogsLinks = pgTable("blog_pages_featuredblogs_links", {
	id: serial("id").primaryKey().notNull(),
	blogPageId: integer("blog_page_id"),
	blogId: integer("blog_id"),
	blogOrder: doublePrecision("blog_order"),
},
	(table) => {
		return {
			fk: index("blog_pages_featuredblogs_links_fk").using("btree", table.blogPageId.asc().nullsLast()),
			invFk: index("blog_pages_featuredblogs_links_inv_fk").using("btree", table.blogId.asc().nullsLast()),
			orderFk: index("blog_pages_featuredblogs_links_order_fk").using("btree", table.blogOrder.asc().nullsLast()),
			blogPagesFeaturedblogsLinksFk: foreignKey({
				columns: [table.blogPageId],
				foreignColumns: [blogPages.id],
				name: "blog_pages_featuredblogs_links_fk"
			}).onDelete("cascade"),
			blogPagesFeaturedblogsLinksInvFk: foreignKey({
				columns: [table.blogId],
				foreignColumns: [blogs.id],
				name: "blog_pages_featuredblogs_links_inv_fk"
			}).onDelete("cascade"),
			blogPagesFeaturedblogsLinksUnique: unique("blog_pages_featuredblogs_links_unique").on(table.blogPageId, table.blogId),
		}
	});

export const blogPagesLandingLinks = pgTable("blog_pages_landing_links", {
	id: serial("id").primaryKey().notNull(),
	blogPageId: integer("blog_page_id"),
	blogId: integer("blog_id"),
},
	(table) => {
		return {
			fk: index("blog_pages_landing_links_fk").using("btree", table.blogPageId.asc().nullsLast()),
			invFk: index("blog_pages_landing_links_inv_fk").using("btree", table.blogId.asc().nullsLast()),
			blogPagesLandingLinksFk: foreignKey({
				columns: [table.blogPageId],
				foreignColumns: [blogPages.id],
				name: "blog_pages_landing_links_fk"
			}).onDelete("cascade"),
			blogPagesLandingLinksInvFk: foreignKey({
				columns: [table.blogId],
				foreignColumns: [blogs.id],
				name: "blog_pages_landing_links_inv_fk"
			}).onDelete("cascade"),
			blogPagesLandingLinksUnique: unique("blog_pages_landing_links_unique").on(table.blogPageId, table.blogId),
		}
	});

export const categoriesParentcategoryLinks = pgTable("categories_parentcategory_links", {
	id: serial("id").primaryKey().notNull(),
	categoryId: integer("category_id"),
	invCategoryId: integer("inv_category_id"),
	categoryOrder: doublePrecision("category_order"),
	invCategoryOrder: doublePrecision("inv_category_order"),
},
	(table) => {
		return {
			fk: index("categories_parentcategory_links_fk").using("btree", table.categoryId.asc().nullsLast()),
			invFk: index("categories_parentcategory_links_inv_fk").using("btree", table.invCategoryId.asc().nullsLast()),
			orderFk: index("categories_parentcategory_links_order_fk").using("btree", table.categoryOrder.asc().nullsLast()),
			orderInvFk: index("categories_parentcategory_links_order_inv_fk").using("btree", table.invCategoryOrder.asc().nullsLast()),
			categoriesParentcategoryLinksFk: foreignKey({
				columns: [table.categoryId],
				foreignColumns: [categories.id],
				name: "categories_parentcategory_links_fk"
			}).onDelete("cascade"),
			categoriesParentcategoryLinksInvFk: foreignKey({
				columns: [table.invCategoryId],
				foreignColumns: [categories.id],
				name: "categories_parentcategory_links_inv_fk"
			}).onDelete("cascade"),
			categoriesParentcategoryLinksUnique: unique("categories_parentcategory_links_unique").on(table.categoryId, table.invCategoryId),
		}
	});

export const categoriesCategoriesLinks = pgTable("categories_categories_links", {
	id: serial("id").primaryKey().notNull(),
	categoryId: integer("category_id"),
	invCategoryId: integer("inv_category_id"),
	categoryOrder: doublePrecision("category_order"),
	invCategoryOrder: doublePrecision("inv_category_order"),
},
	(table) => {
		return {
			fk: index("categories_categories_links_fk").using("btree", table.categoryId.asc().nullsLast()),
			invFk: index("categories_categories_links_inv_fk").using("btree", table.invCategoryId.asc().nullsLast()),
			orderFk: index("categories_categories_links_order_fk").using("btree", table.categoryOrder.asc().nullsLast()),
			orderInvFk: index("categories_categories_links_order_inv_fk").using("btree", table.invCategoryOrder.asc().nullsLast()),
			categoriesCategoriesLinksFk: foreignKey({
				columns: [table.categoryId],
				foreignColumns: [categories.id],
				name: "categories_categories_links_fk"
			}).onDelete("cascade"),
			categoriesCategoriesLinksInvFk: foreignKey({
				columns: [table.invCategoryId],
				foreignColumns: [categories.id],
				name: "categories_categories_links_inv_fk"
			}).onDelete("cascade"),
			categoriesCategoriesLinksUnique: unique("categories_categories_links_unique").on(table.categoryId, table.invCategoryId),
		}
	});

export const customizedsComponents = pgTable("customizeds_components", {
	id: serial("id").primaryKey().notNull(),
	entityId: integer("entity_id"),
	componentId: integer("component_id"),
	componentType: varchar("component_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			customizedsComponentTypeIdx: index("customizeds_component_type_index").using("btree", table.componentType.asc().nullsLast()),
			customizedsEntityIdx: index("customizeds_entity_fk").using("btree", table.entityId.asc().nullsLast()),
			customizedsFieldIdx: index("customizeds_field_index").using("btree", table.field.asc().nullsLast()),
			customizedsEntityFk: foreignKey({
				columns: [table.entityId],
				foreignColumns: [customizeds.id],
				name: "customizeds_entity_fk"
			}).onDelete("cascade"),
			customizedsUnique: unique("customizeds_unique").on(table.entityId, table.componentId, table.componentType, table.field),
		}
	});

export const domesticTripsTripsLinks = pgTable("domestic_trips_trips_links", {
	id: serial("id").primaryKey().notNull(),
	domesticTripId: integer("domestic_trip_id"),
	tripId: integer("trip_id"),
	tripOrder: doublePrecision("trip_order"),
},
	(table) => {
		return {
			fk: index("domestic_trips_trips_links_fk").using("btree", table.domesticTripId.asc().nullsLast()),
			invFk: index("domestic_trips_trips_links_inv_fk").using("btree", table.tripId.asc().nullsLast()),
			orderFk: index("domestic_trips_trips_links_order_fk").using("btree", table.tripOrder.asc().nullsLast()),
			domesticTripsTripsLinksFk: foreignKey({
				columns: [table.domesticTripId],
				foreignColumns: [domesticTrips.id],
				name: "domestic_trips_trips_links_fk"
			}).onDelete("cascade"),
			domesticTripsTripsLinksInvFk: foreignKey({
				columns: [table.tripId],
				foreignColumns: [trips.id],
				name: "domestic_trips_trips_links_inv_fk"
			}).onDelete("cascade"),
			domesticTripsTripsLinksUnique: unique("domestic_trips_trips_links_unique").on(table.domesticTripId, table.tripId),
		}
	});

export const homesComponents = pgTable("homes_components", {
	id: serial("id").primaryKey().notNull(),
	entityId: integer("entity_id"),
	componentId: integer("component_id"),
	componentType: varchar("component_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			homesComponentTypeIdx: index("homes_component_type_index").using("btree", table.componentType.asc().nullsLast()),
			homesEntityIdx: index("homes_entity_fk").using("btree", table.entityId.asc().nullsLast()),
			homesFieldIdx: index("homes_field_index").using("btree", table.field.asc().nullsLast()),
			homesEntityFk: foreignKey({
				columns: [table.entityId],
				foreignColumns: [homes.id],
				name: "homes_entity_fk"
			}).onDelete("cascade"),
			homesUnique: unique("homes_unique").on(table.entityId, table.componentId, table.componentType, table.field),
		}
	});

export const internationalHomesTripsLinks = pgTable("international_homes_trips_links", {
	id: serial("id").primaryKey().notNull(),
	internationalHomeId: integer("international_home_id"),
	tripId: integer("trip_id"),
	tripOrder: doublePrecision("trip_order"),
},
	(table) => {
		return {
			fk: index("international_homes_trips_links_fk").using("btree", table.internationalHomeId.asc().nullsLast()),
			invFk: index("international_homes_trips_links_inv_fk").using("btree", table.tripId.asc().nullsLast()),
			orderFk: index("international_homes_trips_links_order_fk").using("btree", table.tripOrder.asc().nullsLast()),
			internationalHomesTripsLinksFk: foreignKey({
				columns: [table.internationalHomeId],
				foreignColumns: [internationalHomes.id],
				name: "international_homes_trips_links_fk"
			}).onDelete("cascade"),
			internationalHomesTripsLinksInvFk: foreignKey({
				columns: [table.tripId],
				foreignColumns: [trips.id],
				name: "international_homes_trips_links_inv_fk"
			}).onDelete("cascade"),
			internationalHomesTripsLinksUnique: unique("international_homes_trips_links_unique").on(table.internationalHomeId, table.tripId),
		}
	});

export const leaderboardsComponents = pgTable("leaderboards_components", {
	id: serial("id").primaryKey().notNull(),
	entityId: integer("entity_id"),
	componentId: integer("component_id"),
	componentType: varchar("component_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			leaderboardsComponentTypeIdx: index("leaderboards_component_type_index").using("btree", table.componentType.asc().nullsLast()),
			leaderboardsEntityIdx: index("leaderboards_entity_fk").using("btree", table.entityId.asc().nullsLast()),
			leaderboardsFieldIdx: index("leaderboards_field_index").using("btree", table.field.asc().nullsLast()),
			leaderboardsEntityFk: foreignKey({
				columns: [table.entityId],
				foreignColumns: [leaderboards.id],
				name: "leaderboards_entity_fk"
			}).onDelete("cascade"),
			leaderboardsUnique: unique("leaderboards_unique").on(table.entityId, table.componentId, table.componentType, table.field),
		}
	});

export const tripsComponents = pgTable("trips_components", {
	id: serial("id").primaryKey().notNull(),
	entityId: integer("entity_id"),
	componentId: integer("component_id"),
	componentType: varchar("component_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			tripsComponentTypeIdx: index("trips_component_type_index").using("btree", table.componentType.asc().nullsLast()),
			tripsEntityIdx: index("trips_entity_fk").using("btree", table.entityId.asc().nullsLast()),
			tripsFieldIdx: index("trips_field_index").using("btree", table.field.asc().nullsLast()),
			tripsEntityFk: foreignKey({
				columns: [table.entityId],
				foreignColumns: [trips.id],
				name: "trips_entity_fk"
			}).onDelete("cascade"),
			tripsUnique: unique("trips_unique").on(table.entityId, table.componentId, table.componentType, table.field),
		}
	});

export const tripsCategoriesLinks = pgTable("trips_categories_links", {
	id: serial("id").primaryKey().notNull(),
	tripId: integer("trip_id"),
	categoryId: integer("category_id"),
	categoryOrder: doublePrecision("category_order"),
	tripOrder: doublePrecision("trip_order"),
},
	(table) => {
		return {
			fk: index("trips_categories_links_fk").using("btree", table.tripId.asc().nullsLast()),
			invFk: index("trips_categories_links_inv_fk").using("btree", table.categoryId.asc().nullsLast()),
			orderFk: index("trips_categories_links_order_fk").using("btree", table.categoryOrder.asc().nullsLast()),
			orderInvFk: index("trips_categories_links_order_inv_fk").using("btree", table.tripOrder.asc().nullsLast()),
			tripsCategoriesLinksFk: foreignKey({
				columns: [table.tripId],
				foreignColumns: [trips.id],
				name: "trips_categories_links_fk"
			}).onDelete("cascade"),
			tripsCategoriesLinksInvFk: foreignKey({
				columns: [table.categoryId],
				foreignColumns: [categories.id],
				name: "trips_categories_links_inv_fk"
			}).onDelete("cascade"),
			tripsCategoriesLinksUnique: unique("trips_categories_links_unique").on(table.tripId, table.categoryId),
		}
	});

export const tripsRelatedtripsLinks = pgTable("trips_relatedtrips_links", {
	id: serial("id").primaryKey().notNull(),
	tripId: integer("trip_id"),
	invTripId: integer("inv_trip_id"),
	tripOrder: doublePrecision("trip_order"),
},
	(table) => {
		return {
			fk: index("trips_relatedtrips_links_fk").using("btree", table.tripId.asc().nullsLast()),
			invFk: index("trips_relatedtrips_links_inv_fk").using("btree", table.invTripId.asc().nullsLast()),
			orderFk: index("trips_relatedtrips_links_order_fk").using("btree", table.tripOrder.asc().nullsLast()),
			tripsRelatedtripsLinksFk: foreignKey({
				columns: [table.tripId],
				foreignColumns: [trips.id],
				name: "trips_relatedtrips_links_fk"
			}).onDelete("cascade"),
			tripsRelatedtripsLinksInvFk: foreignKey({
				columns: [table.invTripId],
				foreignColumns: [trips.id],
				name: "trips_relatedtrips_links_inv_fk"
			}).onDelete("cascade"),
			tripsRelatedtripsLinksUnique: unique("trips_relatedtrips_links_unique").on(table.tripId, table.invTripId),
		}
	});

export const componentsTripDay2S = pgTable("components_trip_day_2s", {
	id: serial("id").primaryKey().notNull(),
	heading: varchar("heading", { length: 255 }),
});

export const componentsTripDay2SComponents = pgTable("components_trip_day_2s_components", {
	id: serial("id").primaryKey().notNull(),
	entityId: integer("entity_id"),
	componentId: integer("component_id"),
	componentType: varchar("component_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			componentsTripDay2SComponentTypeIdx: index("components_trip_day_2s_component_type_index").using("btree", table.componentType.asc().nullsLast()),
			componentsTripDay2SEntityIdx: index("components_trip_day_2s_entity_fk").using("btree", table.entityId.asc().nullsLast()),
			componentsTripDay2SFieldIdx: index("components_trip_day_2s_field_index").using("btree", table.field.asc().nullsLast()),
			componentsTripDay2SEntityFk: foreignKey({
				columns: [table.entityId],
				foreignColumns: [componentsTripDay2S.id],
				name: "components_trip_day_2s_entity_fk"
			}).onDelete("cascade"),
			componentsTripDay2SUnique: unique("components_trip_day_2s_unique").on(table.entityId, table.componentId, table.componentType, table.field),
		}
	});

export const googleAdsTripsLinks = pgTable("google_ads_trips_links", {
	id: serial("id").primaryKey().notNull(),
	googleAdId: integer("google_ad_id"),
	tripId: integer("trip_id"),
	tripOrder: doublePrecision("trip_order"),
},
	(table) => {
		return {
			fk: index("google_ads_trips_links_fk").using("btree", table.googleAdId.asc().nullsLast()),
			invFk: index("google_ads_trips_links_inv_fk").using("btree", table.tripId.asc().nullsLast()),
			orderFk: index("google_ads_trips_links_order_fk").using("btree", table.tripOrder.asc().nullsLast()),
			googleAdsTripsLinksFk: foreignKey({
				columns: [table.googleAdId],
				foreignColumns: [googleAds.id],
				name: "google_ads_trips_links_fk"
			}).onDelete("cascade"),
			googleAdsTripsLinksInvFk: foreignKey({
				columns: [table.tripId],
				foreignColumns: [trips.id],
				name: "google_ads_trips_links_inv_fk"
			}).onDelete("cascade"),
			googleAdsTripsLinksUnique: unique("google_ads_trips_links_unique").on(table.googleAdId, table.tripId),
		}
	});

export const teams = pgTable("teams", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("teams_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("teams_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			teamsCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "teams_created_by_id_fk"
			}).onDelete("set null"),
			teamsUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "teams_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const employeesTeamLinks = pgTable("employees_team_links", {
	id: serial("id").primaryKey().notNull(),
	employeeId: integer("employee_id"),
	teamId: integer("team_id"),
	employeeOrder: doublePrecision("employee_order"),
},
	(table) => {
		return {
			fk: index("employees_team_links_fk").using("btree", table.employeeId.asc().nullsLast()),
			invFk: index("employees_team_links_inv_fk").using("btree", table.teamId.asc().nullsLast()),
			orderInvFk: index("employees_team_links_order_inv_fk").using("btree", table.employeeOrder.asc().nullsLast()),
			employeesTeamLinksFk: foreignKey({
				columns: [table.employeeId],
				foreignColumns: [employees.id],
				name: "employees_team_links_fk"
			}).onDelete("cascade"),
			employeesTeamLinksInvFk: foreignKey({
				columns: [table.teamId],
				foreignColumns: [teams.id],
				name: "employees_team_links_inv_fk"
			}).onDelete("cascade"),
			employeesTeamLinksUnique: unique("employees_team_links_unique").on(table.employeeId, table.teamId),
		}
	});

export const teamsLeaderLinks = pgTable("teams_leader_links", {
	id: serial("id").primaryKey().notNull(),
	teamId: integer("team_id"),
	employeeId: integer("employee_id"),
},
	(table) => {
		return {
			fk: index("teams_leader_links_fk").using("btree", table.teamId.asc().nullsLast()),
			invFk: index("teams_leader_links_inv_fk").using("btree", table.employeeId.asc().nullsLast()),
			teamsLeaderLinksFk: foreignKey({
				columns: [table.teamId],
				foreignColumns: [teams.id],
				name: "teams_leader_links_fk"
			}).onDelete("cascade"),
			teamsLeaderLinksInvFk: foreignKey({
				columns: [table.employeeId],
				foreignColumns: [employees.id],
				name: "teams_leader_links_inv_fk"
			}).onDelete("cascade"),
			teamsLeaderLinksUnique: unique("teams_leader_links_unique").on(table.teamId, table.employeeId),
		}
	});

export const homesCategoriesLinks = pgTable("homes_categories_links", {
	id: serial("id").primaryKey().notNull(),
	homeId: integer("home_id"),
	categoryId: integer("category_id"),
	categoryOrder: doublePrecision("category_order"),
},
	(table) => {
		return {
			fk: index("homes_categories_links_fk").using("btree", table.homeId.asc().nullsLast()),
			invFk: index("homes_categories_links_inv_fk").using("btree", table.categoryId.asc().nullsLast()),
			orderFk: index("homes_categories_links_order_fk").using("btree", table.categoryOrder.asc().nullsLast()),
			homesCategoriesLinksFk: foreignKey({
				columns: [table.homeId],
				foreignColumns: [homes.id],
				name: "homes_categories_links_fk"
			}).onDelete("cascade"),
			homesCategoriesLinksInvFk: foreignKey({
				columns: [table.categoryId],
				foreignColumns: [categories.id],
				name: "homes_categories_links_inv_fk"
			}).onDelete("cascade"),
			homesCategoriesLinksUnique: unique("homes_categories_links_unique").on(table.homeId, table.categoryId),
		}
	});

export const componentsTripItineraries = pgTable("components_trip_itineraries", {
	id: serial("id").primaryKey().notNull(),
	day: integer("day"),
	title: varchar("title", { length: 255 }),
	description: text("description"),
});

export const activitiesComponents = pgTable("activities_components", {
	id: serial("id").primaryKey().notNull(),
	entityId: integer("entity_id"),
	componentId: integer("component_id"),
	componentType: varchar("component_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: doublePrecision("order"),
},
	(table) => {
		return {
			activitiesComponentTypeIdx: index("activities_component_type_index").using("btree", table.componentType.asc().nullsLast()),
			activitiesEntityIdx: index("activities_entity_fk").using("btree", table.entityId.asc().nullsLast()),
			activitiesFieldIdx: index("activities_field_index").using("btree", table.field.asc().nullsLast()),
			activitiesEntityFk: foreignKey({
				columns: [table.entityId],
				foreignColumns: [activities.id],
				name: "activities_entity_fk"
			}).onDelete("cascade"),
			activitiesUnique: unique("activities_unique").on(table.entityId, table.componentId, table.componentType, table.field),
		}
	});

export const activities = pgTable("activities", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	slug: varchar("slug", { length: 255 }),
	description: text("description"),
	fullday: boolean("fullday"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	cost: bigint("cost", { mode: "number" }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("activities_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("activities_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			activitiesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "activities_created_by_id_fk"
			}).onDelete("set null"),
			activitiesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "activities_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});

export const googleAdsActivitiesLinks = pgTable("google_ads_activities_links", {
	id: serial("id").primaryKey().notNull(),
	googleAdId: integer("google_ad_id"),
	activityId: integer("activity_id"),
	activityOrder: doublePrecision("activity_order"),
},
	(table) => {
		return {
			fk: index("google_ads_activities_links_fk").using("btree", table.googleAdId.asc().nullsLast()),
			invFk: index("google_ads_activities_links_inv_fk").using("btree", table.activityId.asc().nullsLast()),
			orderFk: index("google_ads_activities_links_order_fk").using("btree", table.activityOrder.asc().nullsLast()),
			googleAdsActivitiesLinksFk: foreignKey({
				columns: [table.googleAdId],
				foreignColumns: [googleAds.id],
				name: "google_ads_activities_links_fk"
			}).onDelete("cascade"),
			googleAdsActivitiesLinksInvFk: foreignKey({
				columns: [table.activityId],
				foreignColumns: [activities.id],
				name: "google_ads_activities_links_inv_fk"
			}).onDelete("cascade"),
			googleAdsActivitiesLinksUnique: unique("google_ads_activities_links_unique").on(table.googleAdId, table.activityId),
		}
	});

export const testimonies = pgTable("testimonies", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 255 }),
	name: varchar("name", { length: 255 }),
	rating: varchar("rating", { length: 255 }),
	review: text("review"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
	(table) => {
		return {
			createdByIdFk: index("testimonies_created_by_id_fk").using("btree", table.createdById.asc().nullsLast()),
			updatedByIdFk: index("testimonies_updated_by_id_fk").using("btree", table.updatedById.asc().nullsLast()),
			testimoniesCreatedByIdFk: foreignKey({
				columns: [table.createdById],
				foreignColumns: [adminUsers.id],
				name: "testimonies_created_by_id_fk"
			}).onDelete("set null"),
			testimoniesUpdatedByIdFk: foreignKey({
				columns: [table.updatedById],
				foreignColumns: [adminUsers.id],
				name: "testimonies_updated_by_id_fk"
			}).onDelete("set null"),
		}
	});
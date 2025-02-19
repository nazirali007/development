import { relations } from "drizzle-orm/relations";
import { googleAds, googleAdsTestimoniesLinks, testimonies, retreats, retreatsComponents, adminUsers, blogs, blogsAuthorLinks, upUsers, employees, tvs, tvsTopemployeesLinks, googleAdsComponents, adminPermissions, adminRoles, strapiApiTokens, strapiApiTokenPermissions, strapiTransferTokens, strapiTransferTokenPermissions, files, uploadFolders, strapiReleases, strapiReleaseActions, i18NLocale, upPermissions, upRoles, actions, blogPages, categories, customizeds, domesticTrips, homes, internationalHomes, leaderboards, trips, adminPermissionsRoleLinks, adminUsersRolesLinks, strapiApiTokenPermissionsTokenLinks, strapiTransferTokenPermissionsTokenLinks, filesRelatedMorphs, filesFolderLinks, uploadFoldersParentLinks, strapiReleaseActionsReleaseLinks, upPermissionsRoleLinks, upUsersRoleLinks, blogsComponents, blogsRelatedblogsLinks, blogsDestinationsLinks, blogPagesComponents, blogPagesAllblogsLinks, blogPagesFeaturedblogsLinks, blogPagesLandingLinks, categoriesParentcategoryLinks, categoriesCategoriesLinks, customizedsComponents, domesticTripsTripsLinks, homesComponents, internationalHomesTripsLinks, leaderboardsComponents, tripsComponents, tripsCategoriesLinks, tripsRelatedtripsLinks, componentsTripDay2S, componentsTripDay2SComponents, googleAdsTripsLinks, teams, employeesTeamLinks, teamsLeaderLinks, homesCategoriesLinks, activities, activitiesComponents, googleAdsActivitiesLinks } from "./schema";

export const googleAdsTestimoniesLinksRelations = relations(googleAdsTestimoniesLinks, ({ one }) => ({
	googleAd: one(googleAds, {
		fields: [googleAdsTestimoniesLinks.googleAdId],
		references: [googleAds.id]
	}),
	testimony: one(testimonies, {
		fields: [googleAdsTestimoniesLinks.testimonyId],
		references: [testimonies.id]
	}),
}));

export const googleAdsRelations = relations(googleAds, ({ one, many }) => ({
	googleAdsTestimoniesLinks: many(googleAdsTestimoniesLinks),
	adminUser_createdById: one(adminUsers, {
		fields: [googleAds.createdById],
		references: [adminUsers.id],
		relationName: "googleAds_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [googleAds.updatedById],
		references: [adminUsers.id],
		relationName: "googleAds_updatedById_adminUsers_id"
	}),
	googleAdsComponents: many(googleAdsComponents),
	googleAdsTripsLinks: many(googleAdsTripsLinks),
	googleAdsActivitiesLinks: many(googleAdsActivitiesLinks),
}));

export const testimoniesRelations = relations(testimonies, ({ one, many }) => ({
	googleAdsTestimoniesLinks: many(googleAdsTestimoniesLinks),
	adminUser_createdById: one(adminUsers, {
		fields: [testimonies.createdById],
		references: [adminUsers.id],
		relationName: "testimonies_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [testimonies.updatedById],
		references: [adminUsers.id],
		relationName: "testimonies_updatedById_adminUsers_id"
	}),
}));

export const retreatsComponentsRelations = relations(retreatsComponents, ({ one }) => ({
	retreat: one(retreats, {
		fields: [retreatsComponents.entityId],
		references: [retreats.id]
	}),
}));

export const retreatsRelations = relations(retreats, ({ one, many }) => ({
	retreatsComponents: many(retreatsComponents),
	adminUser_createdById: one(adminUsers, {
		fields: [retreats.createdById],
		references: [adminUsers.id],
		relationName: "retreats_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [retreats.updatedById],
		references: [adminUsers.id],
		relationName: "retreats_updatedById_adminUsers_id"
	}),
}));

export const adminUsersRelations = relations(adminUsers, ({ one, many }) => ({
	retreats_createdById: many(retreats, {
		relationName: "retreats_createdById_adminUsers_id"
	}),
	retreats_updatedById: many(retreats, {
		relationName: "retreats_updatedById_adminUsers_id"
	}),
	employees_createdById: many(employees, {
		relationName: "employees_createdById_adminUsers_id"
	}),
	employees_updatedById: many(employees, {
		relationName: "employees_updatedById_adminUsers_id"
	}),
	tvs_createdById: many(tvs, {
		relationName: "tvs_createdById_adminUsers_id"
	}),
	tvs_updatedById: many(tvs, {
		relationName: "tvs_updatedById_adminUsers_id"
	}),
	googleAds_createdById: many(googleAds, {
		relationName: "googleAds_createdById_adminUsers_id"
	}),
	googleAds_updatedById: many(googleAds, {
		relationName: "googleAds_updatedById_adminUsers_id"
	}),
	adminUser_createdById: one(adminUsers, {
		fields: [adminUsers.createdById],
		references: [adminUsers.id],
		relationName: "adminUsers_createdById_adminUsers_id"
	}),
	adminUsers_createdById: many(adminUsers, {
		relationName: "adminUsers_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [adminUsers.updatedById],
		references: [adminUsers.id],
		relationName: "adminUsers_updatedById_adminUsers_id"
	}),
	adminUsers_updatedById: many(adminUsers, {
		relationName: "adminUsers_updatedById_adminUsers_id"
	}),
	adminPermissions_createdById: many(adminPermissions, {
		relationName: "adminPermissions_createdById_adminUsers_id"
	}),
	adminPermissions_updatedById: many(adminPermissions, {
		relationName: "adminPermissions_updatedById_adminUsers_id"
	}),
	adminRoles_createdById: many(adminRoles, {
		relationName: "adminRoles_createdById_adminUsers_id"
	}),
	adminRoles_updatedById: many(adminRoles, {
		relationName: "adminRoles_updatedById_adminUsers_id"
	}),
	strapiApiTokens_createdById: many(strapiApiTokens, {
		relationName: "strapiApiTokens_createdById_adminUsers_id"
	}),
	strapiApiTokens_updatedById: many(strapiApiTokens, {
		relationName: "strapiApiTokens_updatedById_adminUsers_id"
	}),
	strapiApiTokenPermissions_createdById: many(strapiApiTokenPermissions, {
		relationName: "strapiApiTokenPermissions_createdById_adminUsers_id"
	}),
	strapiApiTokenPermissions_updatedById: many(strapiApiTokenPermissions, {
		relationName: "strapiApiTokenPermissions_updatedById_adminUsers_id"
	}),
	strapiTransferTokens_createdById: many(strapiTransferTokens, {
		relationName: "strapiTransferTokens_createdById_adminUsers_id"
	}),
	strapiTransferTokens_updatedById: many(strapiTransferTokens, {
		relationName: "strapiTransferTokens_updatedById_adminUsers_id"
	}),
	strapiTransferTokenPermissions_createdById: many(strapiTransferTokenPermissions, {
		relationName: "strapiTransferTokenPermissions_createdById_adminUsers_id"
	}),
	strapiTransferTokenPermissions_updatedById: many(strapiTransferTokenPermissions, {
		relationName: "strapiTransferTokenPermissions_updatedById_adminUsers_id"
	}),
	files_createdById: many(files, {
		relationName: "files_createdById_adminUsers_id"
	}),
	files_updatedById: many(files, {
		relationName: "files_updatedById_adminUsers_id"
	}),
	uploadFolders_createdById: many(uploadFolders, {
		relationName: "uploadFolders_createdById_adminUsers_id"
	}),
	uploadFolders_updatedById: many(uploadFolders, {
		relationName: "uploadFolders_updatedById_adminUsers_id"
	}),
	strapiReleases_createdById: many(strapiReleases, {
		relationName: "strapiReleases_createdById_adminUsers_id"
	}),
	strapiReleases_updatedById: many(strapiReleases, {
		relationName: "strapiReleases_updatedById_adminUsers_id"
	}),
	strapiReleaseActions_createdById: many(strapiReleaseActions, {
		relationName: "strapiReleaseActions_createdById_adminUsers_id"
	}),
	strapiReleaseActions_updatedById: many(strapiReleaseActions, {
		relationName: "strapiReleaseActions_updatedById_adminUsers_id"
	}),
	i18NLocales_createdById: many(i18NLocale, {
		relationName: "i18NLocale_createdById_adminUsers_id"
	}),
	i18NLocales_updatedById: many(i18NLocale, {
		relationName: "i18NLocale_updatedById_adminUsers_id"
	}),
	upPermissions_createdById: many(upPermissions, {
		relationName: "upPermissions_createdById_adminUsers_id"
	}),
	upPermissions_updatedById: many(upPermissions, {
		relationName: "upPermissions_updatedById_adminUsers_id"
	}),
	upRoles_createdById: many(upRoles, {
		relationName: "upRoles_createdById_adminUsers_id"
	}),
	upRoles_updatedById: many(upRoles, {
		relationName: "upRoles_updatedById_adminUsers_id"
	}),
	upUsers_createdById: many(upUsers, {
		relationName: "upUsers_createdById_adminUsers_id"
	}),
	upUsers_updatedById: many(upUsers, {
		relationName: "upUsers_updatedById_adminUsers_id"
	}),
	actions_createdById: many(actions, {
		relationName: "actions_createdById_adminUsers_id"
	}),
	actions_updatedById: many(actions, {
		relationName: "actions_updatedById_adminUsers_id"
	}),
	blogs_createdById: many(blogs, {
		relationName: "blogs_createdById_adminUsers_id"
	}),
	blogs_updatedById: many(blogs, {
		relationName: "blogs_updatedById_adminUsers_id"
	}),
	blogPages_createdById: many(blogPages, {
		relationName: "blogPages_createdById_adminUsers_id"
	}),
	blogPages_updatedById: many(blogPages, {
		relationName: "blogPages_updatedById_adminUsers_id"
	}),
	categories_createdById: many(categories, {
		relationName: "categories_createdById_adminUsers_id"
	}),
	categories_updatedById: many(categories, {
		relationName: "categories_updatedById_adminUsers_id"
	}),
	customizeds_createdById: many(customizeds, {
		relationName: "customizeds_createdById_adminUsers_id"
	}),
	customizeds_updatedById: many(customizeds, {
		relationName: "customizeds_updatedById_adminUsers_id"
	}),
	domesticTrips_createdById: many(domesticTrips, {
		relationName: "domesticTrips_createdById_adminUsers_id"
	}),
	domesticTrips_updatedById: many(domesticTrips, {
		relationName: "domesticTrips_updatedById_adminUsers_id"
	}),
	homes_createdById: many(homes, {
		relationName: "homes_createdById_adminUsers_id"
	}),
	homes_updatedById: many(homes, {
		relationName: "homes_updatedById_adminUsers_id"
	}),
	internationalHomes_createdById: many(internationalHomes, {
		relationName: "internationalHomes_createdById_adminUsers_id"
	}),
	internationalHomes_updatedById: many(internationalHomes, {
		relationName: "internationalHomes_updatedById_adminUsers_id"
	}),
	leaderboards_createdById: many(leaderboards, {
		relationName: "leaderboards_createdById_adminUsers_id"
	}),
	leaderboards_updatedById: many(leaderboards, {
		relationName: "leaderboards_updatedById_adminUsers_id"
	}),
	trips_createdById: many(trips, {
		relationName: "trips_createdById_adminUsers_id"
	}),
	trips_updatedById: many(trips, {
		relationName: "trips_updatedById_adminUsers_id"
	}),
	adminUsersRolesLinks: many(adminUsersRolesLinks),
	teams_createdById: many(teams, {
		relationName: "teams_createdById_adminUsers_id"
	}),
	teams_updatedById: many(teams, {
		relationName: "teams_updatedById_adminUsers_id"
	}),
	activities_createdById: many(activities, {
		relationName: "activities_createdById_adminUsers_id"
	}),
	activities_updatedById: many(activities, {
		relationName: "activities_updatedById_adminUsers_id"
	}),
	testimonies_createdById: many(testimonies, {
		relationName: "testimonies_createdById_adminUsers_id"
	}),
	testimonies_updatedById: many(testimonies, {
		relationName: "testimonies_updatedById_adminUsers_id"
	}),
}));

export const blogsAuthorLinksRelations = relations(blogsAuthorLinks, ({ one }) => ({
	blog: one(blogs, {
		fields: [blogsAuthorLinks.blogId],
		references: [blogs.id]
	}),
	upUser: one(upUsers, {
		fields: [blogsAuthorLinks.userId],
		references: [upUsers.id]
	}),
}));

export const blogsRelations = relations(blogs, ({ one, many }) => ({
	blogsAuthorLinks: many(blogsAuthorLinks),
	adminUser_createdById: one(adminUsers, {
		fields: [blogs.createdById],
		references: [adminUsers.id],
		relationName: "blogs_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [blogs.updatedById],
		references: [adminUsers.id],
		relationName: "blogs_updatedById_adminUsers_id"
	}),
	blogsComponents: many(blogsComponents),
	blogsRelatedblogsLinks_blogId: many(blogsRelatedblogsLinks, {
		relationName: "blogsRelatedblogsLinks_blogId_blogs_id"
	}),
	blogsRelatedblogsLinks_invBlogId: many(blogsRelatedblogsLinks, {
		relationName: "blogsRelatedblogsLinks_invBlogId_blogs_id"
	}),
	blogsDestinationsLinks: many(blogsDestinationsLinks),
	blogPagesAllblogsLinks: many(blogPagesAllblogsLinks),
	blogPagesFeaturedblogsLinks: many(blogPagesFeaturedblogsLinks),
	blogPagesLandingLinks: many(blogPagesLandingLinks),
}));

export const upUsersRelations = relations(upUsers, ({ one, many }) => ({
	blogsAuthorLinks: many(blogsAuthorLinks),
	adminUser_createdById: one(adminUsers, {
		fields: [upUsers.createdById],
		references: [adminUsers.id],
		relationName: "upUsers_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [upUsers.updatedById],
		references: [adminUsers.id],
		relationName: "upUsers_updatedById_adminUsers_id"
	}),
	upUsersRoleLinks: many(upUsersRoleLinks),
}));

export const employeesRelations = relations(employees, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [employees.createdById],
		references: [adminUsers.id],
		relationName: "employees_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [employees.updatedById],
		references: [adminUsers.id],
		relationName: "employees_updatedById_adminUsers_id"
	}),
	tvsTopemployeesLinks: many(tvsTopemployeesLinks),
	employeesTeamLinks: many(employeesTeamLinks),
	teamsLeaderLinks: many(teamsLeaderLinks),
}));

export const tvsRelations = relations(tvs, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [tvs.createdById],
		references: [adminUsers.id],
		relationName: "tvs_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [tvs.updatedById],
		references: [adminUsers.id],
		relationName: "tvs_updatedById_adminUsers_id"
	}),
	tvsTopemployeesLinks: many(tvsTopemployeesLinks),
}));

export const tvsTopemployeesLinksRelations = relations(tvsTopemployeesLinks, ({ one }) => ({
	tv: one(tvs, {
		fields: [tvsTopemployeesLinks.tvId],
		references: [tvs.id]
	}),
	employee: one(employees, {
		fields: [tvsTopemployeesLinks.employeeId],
		references: [employees.id]
	}),
}));

export const googleAdsComponentsRelations = relations(googleAdsComponents, ({ one }) => ({
	googleAd: one(googleAds, {
		fields: [googleAdsComponents.entityId],
		references: [googleAds.id]
	}),
}));

export const adminPermissionsRelations = relations(adminPermissions, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [adminPermissions.createdById],
		references: [adminUsers.id],
		relationName: "adminPermissions_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [adminPermissions.updatedById],
		references: [adminUsers.id],
		relationName: "adminPermissions_updatedById_adminUsers_id"
	}),
	adminPermissionsRoleLinks: many(adminPermissionsRoleLinks),
}));

export const adminRolesRelations = relations(adminRoles, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [adminRoles.createdById],
		references: [adminUsers.id],
		relationName: "adminRoles_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [adminRoles.updatedById],
		references: [adminUsers.id],
		relationName: "adminRoles_updatedById_adminUsers_id"
	}),
	adminPermissionsRoleLinks: many(adminPermissionsRoleLinks),
	adminUsersRolesLinks: many(adminUsersRolesLinks),
}));

export const strapiApiTokensRelations = relations(strapiApiTokens, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [strapiApiTokens.createdById],
		references: [adminUsers.id],
		relationName: "strapiApiTokens_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [strapiApiTokens.updatedById],
		references: [adminUsers.id],
		relationName: "strapiApiTokens_updatedById_adminUsers_id"
	}),
	strapiApiTokenPermissionsTokenLinks: many(strapiApiTokenPermissionsTokenLinks),
}));

export const strapiApiTokenPermissionsRelations = relations(strapiApiTokenPermissions, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [strapiApiTokenPermissions.createdById],
		references: [adminUsers.id],
		relationName: "strapiApiTokenPermissions_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [strapiApiTokenPermissions.updatedById],
		references: [adminUsers.id],
		relationName: "strapiApiTokenPermissions_updatedById_adminUsers_id"
	}),
	strapiApiTokenPermissionsTokenLinks: many(strapiApiTokenPermissionsTokenLinks),
}));

export const strapiTransferTokensRelations = relations(strapiTransferTokens, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [strapiTransferTokens.createdById],
		references: [adminUsers.id],
		relationName: "strapiTransferTokens_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [strapiTransferTokens.updatedById],
		references: [adminUsers.id],
		relationName: "strapiTransferTokens_updatedById_adminUsers_id"
	}),
	strapiTransferTokenPermissionsTokenLinks: many(strapiTransferTokenPermissionsTokenLinks),
}));

export const strapiTransferTokenPermissionsRelations = relations(strapiTransferTokenPermissions, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [strapiTransferTokenPermissions.createdById],
		references: [adminUsers.id],
		relationName: "strapiTransferTokenPermissions_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [strapiTransferTokenPermissions.updatedById],
		references: [adminUsers.id],
		relationName: "strapiTransferTokenPermissions_updatedById_adminUsers_id"
	}),
	strapiTransferTokenPermissionsTokenLinks: many(strapiTransferTokenPermissionsTokenLinks),
}));

export const filesRelations = relations(files, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [files.createdById],
		references: [adminUsers.id],
		relationName: "files_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [files.updatedById],
		references: [adminUsers.id],
		relationName: "files_updatedById_adminUsers_id"
	}),
	filesRelatedMorphs: many(filesRelatedMorphs),
	filesFolderLinks: many(filesFolderLinks),
}));

export const uploadFoldersRelations = relations(uploadFolders, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [uploadFolders.createdById],
		references: [adminUsers.id],
		relationName: "uploadFolders_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [uploadFolders.updatedById],
		references: [adminUsers.id],
		relationName: "uploadFolders_updatedById_adminUsers_id"
	}),
	filesFolderLinks: many(filesFolderLinks),
	uploadFoldersParentLinks_folderId: many(uploadFoldersParentLinks, {
		relationName: "uploadFoldersParentLinks_folderId_uploadFolders_id"
	}),
	uploadFoldersParentLinks_invFolderId: many(uploadFoldersParentLinks, {
		relationName: "uploadFoldersParentLinks_invFolderId_uploadFolders_id"
	}),
}));

export const strapiReleasesRelations = relations(strapiReleases, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [strapiReleases.createdById],
		references: [adminUsers.id],
		relationName: "strapiReleases_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [strapiReleases.updatedById],
		references: [adminUsers.id],
		relationName: "strapiReleases_updatedById_adminUsers_id"
	}),
	strapiReleaseActionsReleaseLinks: many(strapiReleaseActionsReleaseLinks),
}));

export const strapiReleaseActionsRelations = relations(strapiReleaseActions, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [strapiReleaseActions.createdById],
		references: [adminUsers.id],
		relationName: "strapiReleaseActions_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [strapiReleaseActions.updatedById],
		references: [adminUsers.id],
		relationName: "strapiReleaseActions_updatedById_adminUsers_id"
	}),
	strapiReleaseActionsReleaseLinks: many(strapiReleaseActionsReleaseLinks),
}));

export const i18NLocaleRelations = relations(i18NLocale, ({ one }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [i18NLocale.createdById],
		references: [adminUsers.id],
		relationName: "i18NLocale_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [i18NLocale.updatedById],
		references: [adminUsers.id],
		relationName: "i18NLocale_updatedById_adminUsers_id"
	}),
}));

export const upPermissionsRelations = relations(upPermissions, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [upPermissions.createdById],
		references: [adminUsers.id],
		relationName: "upPermissions_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [upPermissions.updatedById],
		references: [adminUsers.id],
		relationName: "upPermissions_updatedById_adminUsers_id"
	}),
	upPermissionsRoleLinks: many(upPermissionsRoleLinks),
}));

export const upRolesRelations = relations(upRoles, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [upRoles.createdById],
		references: [adminUsers.id],
		relationName: "upRoles_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [upRoles.updatedById],
		references: [adminUsers.id],
		relationName: "upRoles_updatedById_adminUsers_id"
	}),
	upPermissionsRoleLinks: many(upPermissionsRoleLinks),
	upUsersRoleLinks: many(upUsersRoleLinks),
}));

export const actionsRelations = relations(actions, ({ one }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [actions.createdById],
		references: [adminUsers.id],
		relationName: "actions_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [actions.updatedById],
		references: [adminUsers.id],
		relationName: "actions_updatedById_adminUsers_id"
	}),
}));

export const blogPagesRelations = relations(blogPages, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [blogPages.createdById],
		references: [adminUsers.id],
		relationName: "blogPages_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [blogPages.updatedById],
		references: [adminUsers.id],
		relationName: "blogPages_updatedById_adminUsers_id"
	}),
	blogPagesComponents: many(blogPagesComponents),
	blogPagesAllblogsLinks: many(blogPagesAllblogsLinks),
	blogPagesFeaturedblogsLinks: many(blogPagesFeaturedblogsLinks),
	blogPagesLandingLinks: many(blogPagesLandingLinks),
}));

export const categoriesRelations = relations(categories, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [categories.createdById],
		references: [adminUsers.id],
		relationName: "categories_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [categories.updatedById],
		references: [adminUsers.id],
		relationName: "categories_updatedById_adminUsers_id"
	}),
	blogsDestinationsLinks: many(blogsDestinationsLinks),
	categoriesParentcategoryLinks_categoryId: many(categoriesParentcategoryLinks, {
		relationName: "categoriesParentcategoryLinks_categoryId_categories_id"
	}),
	categoriesParentcategoryLinks_invCategoryId: many(categoriesParentcategoryLinks, {
		relationName: "categoriesParentcategoryLinks_invCategoryId_categories_id"
	}),
	categoriesCategoriesLinks_categoryId: many(categoriesCategoriesLinks, {
		relationName: "categoriesCategoriesLinks_categoryId_categories_id"
	}),
	categoriesCategoriesLinks_invCategoryId: many(categoriesCategoriesLinks, {
		relationName: "categoriesCategoriesLinks_invCategoryId_categories_id"
	}),
	tripsCategoriesLinks: many(tripsCategoriesLinks),
	homesCategoriesLinks: many(homesCategoriesLinks),
}));

export const customizedsRelations = relations(customizeds, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [customizeds.createdById],
		references: [adminUsers.id],
		relationName: "customizeds_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [customizeds.updatedById],
		references: [adminUsers.id],
		relationName: "customizeds_updatedById_adminUsers_id"
	}),
	customizedsComponents: many(customizedsComponents),
}));

export const domesticTripsRelations = relations(domesticTrips, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [domesticTrips.createdById],
		references: [adminUsers.id],
		relationName: "domesticTrips_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [domesticTrips.updatedById],
		references: [adminUsers.id],
		relationName: "domesticTrips_updatedById_adminUsers_id"
	}),
	domesticTripsTripsLinks: many(domesticTripsTripsLinks),
}));

export const homesRelations = relations(homes, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [homes.createdById],
		references: [adminUsers.id],
		relationName: "homes_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [homes.updatedById],
		references: [adminUsers.id],
		relationName: "homes_updatedById_adminUsers_id"
	}),
	homesComponents: many(homesComponents),
	homesCategoriesLinks: many(homesCategoriesLinks),
}));

export const internationalHomesRelations = relations(internationalHomes, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [internationalHomes.createdById],
		references: [adminUsers.id],
		relationName: "internationalHomes_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [internationalHomes.updatedById],
		references: [adminUsers.id],
		relationName: "internationalHomes_updatedById_adminUsers_id"
	}),
	internationalHomesTripsLinks: many(internationalHomesTripsLinks),
}));

export const leaderboardsRelations = relations(leaderboards, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [leaderboards.createdById],
		references: [adminUsers.id],
		relationName: "leaderboards_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [leaderboards.updatedById],
		references: [adminUsers.id],
		relationName: "leaderboards_updatedById_adminUsers_id"
	}),
	leaderboardsComponents: many(leaderboardsComponents),
}));

export const tripsRelations = relations(trips, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [trips.createdById],
		references: [adminUsers.id],
		relationName: "trips_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [trips.updatedById],
		references: [adminUsers.id],
		relationName: "trips_updatedById_adminUsers_id"
	}),
	domesticTripsTripsLinks: many(domesticTripsTripsLinks),
	internationalHomesTripsLinks: many(internationalHomesTripsLinks),
	tripsComponents: many(tripsComponents),
	tripsCategoriesLinks: many(tripsCategoriesLinks),
	tripsRelatedtripsLinks_tripId: many(tripsRelatedtripsLinks, {
		relationName: "tripsRelatedtripsLinks_tripId_trips_id"
	}),
	tripsRelatedtripsLinks_invTripId: many(tripsRelatedtripsLinks, {
		relationName: "tripsRelatedtripsLinks_invTripId_trips_id"
	}),
	googleAdsTripsLinks: many(googleAdsTripsLinks),
}));

export const adminPermissionsRoleLinksRelations = relations(adminPermissionsRoleLinks, ({ one }) => ({
	adminPermission: one(adminPermissions, {
		fields: [adminPermissionsRoleLinks.permissionId],
		references: [adminPermissions.id]
	}),
	adminRole: one(adminRoles, {
		fields: [adminPermissionsRoleLinks.roleId],
		references: [adminRoles.id]
	}),
}));

export const adminUsersRolesLinksRelations = relations(adminUsersRolesLinks, ({ one }) => ({
	adminUser: one(adminUsers, {
		fields: [adminUsersRolesLinks.userId],
		references: [adminUsers.id]
	}),
	adminRole: one(adminRoles, {
		fields: [adminUsersRolesLinks.roleId],
		references: [adminRoles.id]
	}),
}));

export const strapiApiTokenPermissionsTokenLinksRelations = relations(strapiApiTokenPermissionsTokenLinks, ({ one }) => ({
	strapiApiTokenPermission: one(strapiApiTokenPermissions, {
		fields: [strapiApiTokenPermissionsTokenLinks.apiTokenPermissionId],
		references: [strapiApiTokenPermissions.id]
	}),
	strapiApiToken: one(strapiApiTokens, {
		fields: [strapiApiTokenPermissionsTokenLinks.apiTokenId],
		references: [strapiApiTokens.id]
	}),
}));

export const strapiTransferTokenPermissionsTokenLinksRelations = relations(strapiTransferTokenPermissionsTokenLinks, ({ one }) => ({
	strapiTransferTokenPermission: one(strapiTransferTokenPermissions, {
		fields: [strapiTransferTokenPermissionsTokenLinks.transferTokenPermissionId],
		references: [strapiTransferTokenPermissions.id]
	}),
	strapiTransferToken: one(strapiTransferTokens, {
		fields: [strapiTransferTokenPermissionsTokenLinks.transferTokenId],
		references: [strapiTransferTokens.id]
	}),
}));

export const filesRelatedMorphsRelations = relations(filesRelatedMorphs, ({ one }) => ({
	file: one(files, {
		fields: [filesRelatedMorphs.fileId],
		references: [files.id]
	}),
}));

export const filesFolderLinksRelations = relations(filesFolderLinks, ({ one }) => ({
	file: one(files, {
		fields: [filesFolderLinks.fileId],
		references: [files.id]
	}),
	uploadFolder: one(uploadFolders, {
		fields: [filesFolderLinks.folderId],
		references: [uploadFolders.id]
	}),
}));

export const uploadFoldersParentLinksRelations = relations(uploadFoldersParentLinks, ({ one }) => ({
	uploadFolder_folderId: one(uploadFolders, {
		fields: [uploadFoldersParentLinks.folderId],
		references: [uploadFolders.id],
		relationName: "uploadFoldersParentLinks_folderId_uploadFolders_id"
	}),
	uploadFolder_invFolderId: one(uploadFolders, {
		fields: [uploadFoldersParentLinks.invFolderId],
		references: [uploadFolders.id],
		relationName: "uploadFoldersParentLinks_invFolderId_uploadFolders_id"
	}),
}));

export const strapiReleaseActionsReleaseLinksRelations = relations(strapiReleaseActionsReleaseLinks, ({ one }) => ({
	strapiReleaseAction: one(strapiReleaseActions, {
		fields: [strapiReleaseActionsReleaseLinks.releaseActionId],
		references: [strapiReleaseActions.id]
	}),
	strapiRelease: one(strapiReleases, {
		fields: [strapiReleaseActionsReleaseLinks.releaseId],
		references: [strapiReleases.id]
	}),
}));

export const upPermissionsRoleLinksRelations = relations(upPermissionsRoleLinks, ({ one }) => ({
	upPermission: one(upPermissions, {
		fields: [upPermissionsRoleLinks.permissionId],
		references: [upPermissions.id]
	}),
	upRole: one(upRoles, {
		fields: [upPermissionsRoleLinks.roleId],
		references: [upRoles.id]
	}),
}));

export const upUsersRoleLinksRelations = relations(upUsersRoleLinks, ({ one }) => ({
	upUser: one(upUsers, {
		fields: [upUsersRoleLinks.userId],
		references: [upUsers.id]
	}),
	upRole: one(upRoles, {
		fields: [upUsersRoleLinks.roleId],
		references: [upRoles.id]
	}),
}));

export const blogsComponentsRelations = relations(blogsComponents, ({ one }) => ({
	blog: one(blogs, {
		fields: [blogsComponents.entityId],
		references: [blogs.id]
	}),
}));

export const blogsRelatedblogsLinksRelations = relations(blogsRelatedblogsLinks, ({ one }) => ({
	blog_blogId: one(blogs, {
		fields: [blogsRelatedblogsLinks.blogId],
		references: [blogs.id],
		relationName: "blogsRelatedblogsLinks_blogId_blogs_id"
	}),
	blog_invBlogId: one(blogs, {
		fields: [blogsRelatedblogsLinks.invBlogId],
		references: [blogs.id],
		relationName: "blogsRelatedblogsLinks_invBlogId_blogs_id"
	}),
}));

export const blogsDestinationsLinksRelations = relations(blogsDestinationsLinks, ({ one }) => ({
	blog: one(blogs, {
		fields: [blogsDestinationsLinks.blogId],
		references: [blogs.id]
	}),
	category: one(categories, {
		fields: [blogsDestinationsLinks.categoryId],
		references: [categories.id]
	}),
}));

export const blogPagesComponentsRelations = relations(blogPagesComponents, ({ one }) => ({
	blogPage: one(blogPages, {
		fields: [blogPagesComponents.entityId],
		references: [blogPages.id]
	}),
}));

export const blogPagesAllblogsLinksRelations = relations(blogPagesAllblogsLinks, ({ one }) => ({
	blogPage: one(blogPages, {
		fields: [blogPagesAllblogsLinks.blogPageId],
		references: [blogPages.id]
	}),
	blog: one(blogs, {
		fields: [blogPagesAllblogsLinks.blogId],
		references: [blogs.id]
	}),
}));

export const blogPagesFeaturedblogsLinksRelations = relations(blogPagesFeaturedblogsLinks, ({ one }) => ({
	blogPage: one(blogPages, {
		fields: [blogPagesFeaturedblogsLinks.blogPageId],
		references: [blogPages.id]
	}),
	blog: one(blogs, {
		fields: [blogPagesFeaturedblogsLinks.blogId],
		references: [blogs.id]
	}),
}));

export const blogPagesLandingLinksRelations = relations(blogPagesLandingLinks, ({ one }) => ({
	blogPage: one(blogPages, {
		fields: [blogPagesLandingLinks.blogPageId],
		references: [blogPages.id]
	}),
	blog: one(blogs, {
		fields: [blogPagesLandingLinks.blogId],
		references: [blogs.id]
	}),
}));

export const categoriesParentcategoryLinksRelations = relations(categoriesParentcategoryLinks, ({ one }) => ({
	category_categoryId: one(categories, {
		fields: [categoriesParentcategoryLinks.categoryId],
		references: [categories.id],
		relationName: "categoriesParentcategoryLinks_categoryId_categories_id"
	}),
	category_invCategoryId: one(categories, {
		fields: [categoriesParentcategoryLinks.invCategoryId],
		references: [categories.id],
		relationName: "categoriesParentcategoryLinks_invCategoryId_categories_id"
	}),
}));

export const categoriesCategoriesLinksRelations = relations(categoriesCategoriesLinks, ({ one }) => ({
	category_categoryId: one(categories, {
		fields: [categoriesCategoriesLinks.categoryId],
		references: [categories.id],
		relationName: "categoriesCategoriesLinks_categoryId_categories_id"
	}),
	category_invCategoryId: one(categories, {
		fields: [categoriesCategoriesLinks.invCategoryId],
		references: [categories.id],
		relationName: "categoriesCategoriesLinks_invCategoryId_categories_id"
	}),
}));

export const customizedsComponentsRelations = relations(customizedsComponents, ({ one }) => ({
	customized: one(customizeds, {
		fields: [customizedsComponents.entityId],
		references: [customizeds.id]
	}),
}));

export const domesticTripsTripsLinksRelations = relations(domesticTripsTripsLinks, ({ one }) => ({
	domesticTrip: one(domesticTrips, {
		fields: [domesticTripsTripsLinks.domesticTripId],
		references: [domesticTrips.id]
	}),
	trip: one(trips, {
		fields: [domesticTripsTripsLinks.tripId],
		references: [trips.id]
	}),
}));

export const homesComponentsRelations = relations(homesComponents, ({ one }) => ({
	home: one(homes, {
		fields: [homesComponents.entityId],
		references: [homes.id]
	}),
}));

export const internationalHomesTripsLinksRelations = relations(internationalHomesTripsLinks, ({ one }) => ({
	internationalHome: one(internationalHomes, {
		fields: [internationalHomesTripsLinks.internationalHomeId],
		references: [internationalHomes.id]
	}),
	trip: one(trips, {
		fields: [internationalHomesTripsLinks.tripId],
		references: [trips.id]
	}),
}));

export const leaderboardsComponentsRelations = relations(leaderboardsComponents, ({ one }) => ({
	leaderboard: one(leaderboards, {
		fields: [leaderboardsComponents.entityId],
		references: [leaderboards.id]
	}),
}));

export const tripsComponentsRelations = relations(tripsComponents, ({ one }) => ({
	trip: one(trips, {
		fields: [tripsComponents.entityId],
		references: [trips.id]
	}),
}));

export const tripsCategoriesLinksRelations = relations(tripsCategoriesLinks, ({ one }) => ({
	trip: one(trips, {
		fields: [tripsCategoriesLinks.tripId],
		references: [trips.id]
	}),
	category: one(categories, {
		fields: [tripsCategoriesLinks.categoryId],
		references: [categories.id]
	}),
}));

export const tripsRelatedtripsLinksRelations = relations(tripsRelatedtripsLinks, ({ one }) => ({
	trip_tripId: one(trips, {
		fields: [tripsRelatedtripsLinks.tripId],
		references: [trips.id],
		relationName: "tripsRelatedtripsLinks_tripId_trips_id"
	}),
	trip_invTripId: one(trips, {
		fields: [tripsRelatedtripsLinks.invTripId],
		references: [trips.id],
		relationName: "tripsRelatedtripsLinks_invTripId_trips_id"
	}),
}));

export const componentsTripDay2SComponentsRelations = relations(componentsTripDay2SComponents, ({ one }) => ({
	componentsTripDay2: one(componentsTripDay2S, {
		fields: [componentsTripDay2SComponents.entityId],
		references: [componentsTripDay2S.id]
	}),
}));

export const componentsTripDay2SRelations = relations(componentsTripDay2S, ({ many }) => ({
	componentsTripDay2SComponents: many(componentsTripDay2SComponents),
}));

export const googleAdsTripsLinksRelations = relations(googleAdsTripsLinks, ({ one }) => ({
	googleAd: one(googleAds, {
		fields: [googleAdsTripsLinks.googleAdId],
		references: [googleAds.id]
	}),
	trip: one(trips, {
		fields: [googleAdsTripsLinks.tripId],
		references: [trips.id]
	}),
}));

export const teamsRelations = relations(teams, ({ one, many }) => ({
	adminUser_createdById: one(adminUsers, {
		fields: [teams.createdById],
		references: [adminUsers.id],
		relationName: "teams_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [teams.updatedById],
		references: [adminUsers.id],
		relationName: "teams_updatedById_adminUsers_id"
	}),
	employeesTeamLinks: many(employeesTeamLinks),
	teamsLeaderLinks: many(teamsLeaderLinks),
}));

export const employeesTeamLinksRelations = relations(employeesTeamLinks, ({ one }) => ({
	employee: one(employees, {
		fields: [employeesTeamLinks.employeeId],
		references: [employees.id]
	}),
	team: one(teams, {
		fields: [employeesTeamLinks.teamId],
		references: [teams.id]
	}),
}));

export const teamsLeaderLinksRelations = relations(teamsLeaderLinks, ({ one }) => ({
	team: one(teams, {
		fields: [teamsLeaderLinks.teamId],
		references: [teams.id]
	}),
	employee: one(employees, {
		fields: [teamsLeaderLinks.employeeId],
		references: [employees.id]
	}),
}));

export const homesCategoriesLinksRelations = relations(homesCategoriesLinks, ({ one }) => ({
	home: one(homes, {
		fields: [homesCategoriesLinks.homeId],
		references: [homes.id]
	}),
	category: one(categories, {
		fields: [homesCategoriesLinks.categoryId],
		references: [categories.id]
	}),
}));

export const activitiesComponentsRelations = relations(activitiesComponents, ({ one }) => ({
	activity: one(activities, {
		fields: [activitiesComponents.entityId],
		references: [activities.id]
	}),
}));

export const activitiesRelations = relations(activities, ({ one, many }) => ({
	activitiesComponents: many(activitiesComponents),
	adminUser_createdById: one(adminUsers, {
		fields: [activities.createdById],
		references: [adminUsers.id],
		relationName: "activities_createdById_adminUsers_id"
	}),
	adminUser_updatedById: one(adminUsers, {
		fields: [activities.updatedById],
		references: [adminUsers.id],
		relationName: "activities_updatedById_adminUsers_id"
	}),
	googleAdsActivitiesLinks: many(googleAdsActivitiesLinks),
}));

export const googleAdsActivitiesLinksRelations = relations(googleAdsActivitiesLinks, ({ one }) => ({
	googleAd: one(googleAds, {
		fields: [googleAdsActivitiesLinks.googleAdId],
		references: [googleAds.id]
	}),
	activity: one(activities, {
		fields: [googleAdsActivitiesLinks.activityId],
		references: [activities.id]
	}),
}));
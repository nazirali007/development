// import { AlmatyCategoryTrips } from "../db/trips/almaty-tour-package-cat";
// import { AndamanCategoryTrips } from "../db/trips/andaman-tour-packages-cat";
// import { BakuCategoryTrips } from "../db/trips/baku-tour-packages-cat";
// import { BaliCategoryTrips } from "../db/trips/bali-tour-packages-cat";
// import { DubaiCategoryTrips } from "../db/trips/dubai-tour-package-cat";
// import { goodFridayTrips } from "../db/trips/good-friday-tour-packages-cat";
// // import { HimachalCategoryTrips } from "../db/trips/himachal-tour-packages-cat";
// import { HoneyMoonCategoryTrips } from "../db/trips/honeymoon-packages-cat";
// import { InternationalTripsCat } from "../db/trips/international-trips-cat";
// import { KashmirCategoryTrips } from "../db/trips/kashmir-tour-package-cat";
// import { KeralaCategoryTrips } from "../db/trips/kerala-tour-package-cat";
// import { LadakhCategoryTrips } from "../db/trips/leh-ladakh-tour-packages-cat";
// import { LehSpitiCategoryTrips } from "../db/trips/leh-spiti-tour-packages-cat";
// import { MaldivesCategoryTrips } from "../db/trips/maldives-tour-package-cat";
// import { MeghalayaCategoryTrips } from "../db/trips/meghalaya-tour-package-cat";
// import { NepalCategoryTrips } from "../db/trips/nepal-tour-package-cat";
// import { RajasthanCategoryTrips } from "../db/trips/rajasthan-tour-package-cat";
// import { RussiaCategoryTrips } from "../db/trips/russia-tour-packages-cat";
// import { SingaporeCategoryTrips } from "../db/trips/singapore-tour-package-cat";
// import { SpitiCategoryTrips } from "../db/trips/spiti-valley-cat";
// import { ThailandCategoryTrips } from "../db/trips/thailand-tour-packages-cat";
// import { UttarakhandCategoryTrips } from "../db/trips/uttarakhand-tour-packages-cat";
// import { VietnamCategoryTrips } from "../db/trips/veitnam-tour-packages-cat";
// import { WeekendTripsFromDelhiCategoryTrips } from "../db/trips/weekend-trip-from-delhi-cat";

// type resultType = {
// 	priority?: number;
// 	name: string;
// 	slug: string;
// 	coverimageurl: string;
// 	coverimagealttag: string;
// 	isCustomized: boolean;
// 	tripdates: never[] | Date[];
// 	pickuplocation: string;
// 	discountedPrice: string;
// 	startingcost: string;
// 	duration: string;
// };

// export function GetRelatedTripsToCats({ slug }: { slug: string }) {
// 	let result: resultType[] = [];
// 	switch (slug) {
// 		case "leh-spiti-tour-packages":
// 			result = LehSpitiCategoryTrips; //
// 			break;

// 		case "thailand-tour-packages":
// 			result = ThailandCategoryTrips; //
// 			break;
// 		case "vietnam-tour-package":
// 			result = VietnamCategoryTrips; //
// 			break;
// 		case "meghalaya-tour-package":
// 			result = MeghalayaCategoryTrips; //
// 			break;
// 		case "bali-tour-packages":
// 			result = BaliCategoryTrips;
// 			break;
// 		case "dubai-tour-package":
// 			result = DubaiCategoryTrips;
// 			break;
// 		case "honeymoon-packages":
// 			result = HoneyMoonCategoryTrips;
// 			break;
// 		case "spiti-valley":
// 			result = SpitiCategoryTrips;
// 			break;
// 		case "weekend-trip-from-delhi":
// 			result = WeekendTripsFromDelhiCategoryTrips;
// 			break;
// 		case "kashmir-tour-package":
// 			result = KashmirCategoryTrips;
// 			break;
// 		case "russia-tour-packages":
// 			result = RussiaCategoryTrips;
// 			break;
// 		case "maldives-tour-package":
// 			result = MaldivesCategoryTrips;
// 			break;
// 		case "nepal-tour-package":
// 			result = NepalCategoryTrips;
// 			break;
// 		case "singapore-tour-package":
// 			result = SingaporeCategoryTrips;
// 			break;
// 		case "almaty-tour-package":
// 			result = AlmatyCategoryTrips;
// 			break;
// 		case "baku-tour-packages":
// 			result = BakuCategoryTrips;
// 			break;
// 		case "himachal-tour-packages":
// 			result = HimachalCategoryTrips;
// 			break;
// 		case "uttarakhand-tour-packages":
// 			result = UttarakhandCategoryTrips;
// 			break;
// 		case "kerala-tour-package":
// 			result = KeralaCategoryTrips;
// 			break;
// 		case "leh-ladakh-tour-packages":
// 			result = LadakhCategoryTrips;
// 			break;
// 		case "andaman-tour-packages":
// 			result = AndamanCategoryTrips;
// 			break;
// 		case "rajasthan-tour-package":
// 			result = RajasthanCategoryTrips;
// 			break;
// 		case "good-friday-tour-packages":
// 			result = goodFridayTrips;
// 			break;
// 		case "international-trips-packages":
// 			result = InternationalTripsCat;
// 			break;

// 		default:
// 			break;
// 	}
// 	return result;
// }

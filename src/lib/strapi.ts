"use server"

// const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/trips?filters[slug][$in][0]=Dubai-with-atlantis-aquaventure-lost-chambers&populate=*`, {
// http://localhost:1337/api/home?fields for Headings

const CMS_API_TOKEN = process.env.CMS_API_TOKEN;
const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

import axios from "axios";


// export const getStrapiTVContent = async () => {
//     try {
//         const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/Leaderboard?populate[0]=employee&populate[employee][populate][1]=avatar&populate[3]=team&populate[team][populate][4]=teamImage`, {
//             headers: {
//                 Authorization: `Bearer ${CMS_API_TOKEN}`
//             }
//         }).then((res) => {
//             return res.data;
//         });

//         if (!res || !res.data || !res.data.attributes) {
//             return null;
//         }

//         return res.data.attributes;
//     }
//     catch (error) {
//         console.log("error: while fetching leaderboard data (strapi.ts) ", error);
//         return null;
//     }

// }


export const getStrapiTVContent = async () => {
    try {
        const res = await axios.get(`https://cms.captureatrip.com/api/tv?populate[1]=topemployees&populate[topemployees][populate]=avatar&populate[topemployees][populate]=team`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res || !res.data || !res.data.attributes) {
            return null;
        }

        return res.data.attributes;
    }
    catch (error) {
        console.log("error: while fetching leaderboard data (strapi.ts) ", error);
        return null;
    }

}

export const getStrapiTVLeaderContent = async () => {
    try {
        const res = await axios.get(`https://cms.captureatrip.com/api/tv?populate[1]=topemployees&populate[topemployees][populate][team][populate][1]=leader&populate[topemployees][populate][team][populate][leader][populate]=avatar`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res || !res.data || !res.data.attributes) {
            return null;
        }

        return res.data.attributes;
    }
    catch (error) {
        console.log("error: while fetching leaderboard data (strapi.ts) ", error);
        return null;
    }

}


export const getStrapiTVCustomContent = async () => {
    try {
        const res = await axios.get(`https://cms.captureatrip.com/api/tv?populate[1]=custom`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res || !res.data || !res.data.attributes) {
            return null;
        }

        return res.data.attributes;
    }
    catch (error) {
        console.log("error: while fetching leaderboard data (strapi.ts) ", error);
        return null;
    }

}


export const getStrapiCustomTripPageContent = async ({ slug }: { slug: string }) => {
    // http://cms.captureatrip.com/api/trips?filters[slug][$in][0]=meghalaya-backpacking-trip&populate=dates
    try {
        // console.log("slug", slug); // debug
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/customizeds?filters[slug][$in][0]=${slug}&populate=*`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res) {
            return null;
        }

        const pageContent = res.data[0].attributes;

        if (!pageContent) {
            return null;
        }

        // console.log("pageContent", pageContent); // debug

        return pageContent;
    }
    catch (error) {
        console.log("error: while fetching page data (strapi.ts) ", error);
        return null;
    }
}


export async function getStrapiBlogsContent() {
    try {
        // const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/blog-page?populate=*`, {
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/blog-page?populate[metacontent]=*&populate[featuredblogs][populate][author]=*&populate[landing]=*`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        return res.data.attributes;
    } catch (error) {
        console.log("error: while fetching blogs content (strapi.ts) ", error);
        return null;
    }
}

export async function getStrapiAllBlogs({
    query
}: {
    query: { page: number, PER_PAGE: number }
}) {
    try {
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/blogs?pagination[page]=${query.page}&pagination[pageSize]=${query.PER_PAGE}&populate=*&sort=updatedAt:desc`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        return res.data;
    } catch (error) {
        console.log("error: while fetching blogs content (strapi.ts) ", error);
        return null;
    }
}

export async function getStrapiBlogContent({
    slug
}: {
    slug: string
}) {
    try {

        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[$and][0][slug][$eq]=${slug}&populate[relatedblogs]=*&populate[metacontent]=*&populate[destinations]=*populate[bannerimage]=*&populate[author][populate]=avatar`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res) {
            return null;
        }

        return res.data[0].attributes;

    } catch (error) {
        console.log("error: while fetching blog content (strapi.ts) ", error);
        return null;
    }
}

export async function getStrapiTripSearchQuery() {
    const LIMIT = 100;
    const START = 100;
    // const START = 100;


    try {
        // http://cms.captureatrip.com/api/trips?fields[0]=slug&fields[1]=name&pagination[limit]=169&pagination[start]=1

        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/trips?fields[0]=slug&fields[1]=name&pagination[limit]=${LIMIT}&pagination[start]=${START}`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res) {
            return null;
        }

        const trips = res.data.map((trip: any) => {
            return {
                slug: trip.attributes.slug,
                name: trip.attributes.name
            }
        });

        if (trips.length <= 0) {
            return null;
        }

        return trips;

    } catch (error) {
        console.log("error: while fetching strapi search query (strapi.ts) ", error);
        return null;
    }
}

export async function getStrapiSingleDate({ slug }: { slug: string }) {

    try {
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/trips?filters[$and][0][slug][$eq]=${slug}&populate=*`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            // console.log("res", res.data); // debug
            return res.data
        }
        );

        if (!res) {
            return null;
        }

        const dates = res.data[0].attributes.Dates.map((date: any) => {
            return {
                date: date.tripdate
            }
        })

        if (dates.length <= 0) {
            return null;
        }

        const tripDates = dates.map((date: any) => {
            return date.date
        }
        )

        if (tripDates.length <= 0) {
            return null;
        }

        // console.log("tripDates", tripDates); // debug
        return tripDates;
    }

    catch (error) {
        console.log("error: while fetching strapi dates (strapi.ts) ", error);
        return null;
    }

}

export const getStrapiCarouselContent = async () => {
    try {

        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/home?populate[categories][fields][0]=slug&populate[categories][fields][1]=Title&populate[categories][populate][trips][fields][1]=slug&populate[categories][populate][trips][fields][2]=name&populate[categories][populate][trips][fields][3]=price&populate[categories][populate][trips][fields][4]=isCustomized&populate[categories][populate][trips][fields][5]=isInternational&populate[categories][populate][trips][fields][6]=durationdays&populate[categories][populate][trips][fields][7]=coverimageurl&populate[categories][populate][trips][fields][8]=bannerimageurl&populate[categories][populate][trips][populate][9]=coverimage&populate[categories][populate][trips][populate][10]=bannerimage&populate[categories][populate][trips][populate][11]=dates&populate[categories][populate][trips][fields][12]=pickup&populate[categories][populate][trips][fields][13]=drop&populate[categories][populate][trips][fields][14]=discount`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res) {
            return null;
        }

        const carouselData = res.data.attributes.categories;
        // const carouselContent = carouselData.data.map((trip: any) => {
        return carouselData
        // })
    }
    // });

    // console.log("carouselContent", carouselContent); // debug

    // return carouselContent;
    // }
    catch (error) {
        console.log("error: while fetching carousel data (strapi.ts) ", error);
        return null;
    }
}

export const getStrapiCarouselContentSlug = async ({
    name
}: {
    name: string
}) => {
    try {

        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/home?fields[0]=updatedAt&populate[${name}][populate][0]=dates&populate[${name}][fields][0]=slug&populate[${name}][fields][1]=price&populate[${name}][fields][2]=discount&populate[${name}][fields][3]=slug&populate[${name}][fields][4]=name&populate[${name}][fields][5]=pickup&populate[${name}][fields][6]=drop&populate[${name}][fields][7]=coverimageurl&populate[${name}][fields][8]=isCustomized&populate[${name}][fields][9]=durationdays&populate[${name}][populate][10]=coverimage&populate[${name}][populate][11]=bannerimage&populate[${name}][fields][13]=isInternational`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res) {
            return null;
        }

        const carouselData = res.data.attributes[name];
        // console.log('carouselContent', carouselData.data[0])
        const carouselContent = carouselData.data.map((trip: any) => {
            return {
                id: trip.id,
                slug: trip.attributes.slug,
                price: trip.attributes.price,
                discount: trip.attributes.discount,
                name: trip.attributes.name,
                pickup: trip.attributes.pickup,
                drop: trip.attributes.drop,
                coverimageurl: trip.attributes.coverimageurl,
                bannerimageurl: trip.attributes.bannerimageurl,
                coverimage: trip.attributes.coverimage,
                bannerimage: trip.attributes.bannerimage,
                isCustomized: trip.attributes.isCustomized,
                durationdays: trip.attributes.durationdays,
                isInternational: trip.attributes.isInternational,
                dates: trip.attributes.dates.filter((date: any) => { // filter out past dates
                    let currentDate = new Date();
                    let tripDate = new Date(date.tripdate);
                    if (currentDate < tripDate) {
                        return date.tripdate;
                    }
                })
            }
        });

        // console.log("carouselContent", carouselContent); // debug

        return carouselContent;
    } catch (error) {
        console.log("error: while fetching carousel data (strapi.ts) ", error);
        return null;
    }
}

export const getStrapiBannerSlider = async ({
    name
}: {
    name: string
}) => {
    try {

        // const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/home?fields[0]=updatedAt&populate=${name}`, {
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/home?populate[${name}][populate]=*`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        // console.log("res", res.data.attributes); // debug

        if (!res) {
            return null;
        }

        const bannerSliderData = res.data.attributes[name];

        if (!bannerSliderData) {
            return null;
        }

        // console.log(bannerSliderData) // debug

        const filteredBannerSliders = bannerSliderData.map((data: {
            id: number;
            link: string;
            imgURL: string;
            expirationDate: Date;
            bannerimage: [];
        }) => {
            return {
                id: data.id,
                link: data.link,
                imgURL: data.imgURL,
                expirationDate: data.expirationDate,
                bannerimage: data.bannerimage
            }
        })

        // console.log("filteredBannerSliders", filteredBannerSliders); // debug

        return filteredBannerSliders;

    } catch (error) {
        console.log("error: while fetching banner slider data (strapi.ts) ", error);
        return null;
    }
}

export const getStrapiTripPageContent = async ({ slug }: { slug: string }) => {
    // http://cms.captureatrip.com/api/trips?filters[slug][$in][0]=meghalaya-backpacking-trip&populate=dates
    // http://cms.captureatrip.com/api/trips?filters[slug][$in][0]=meghalaya-backpacking-trip&populate=dates&populate=itineraryaccordion - in use
    try {
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/trips?filters[slug][$in][0]=${slug}&populate[0]=dates&populate[1]=costing&populate[2]=relatedimagesurl&populate[3]=itinerarypdf&populate[relatedtrips][fields][0]=id&populate[relatedtrips][fields][1]=slug&populate[relatedtrips][fields][2]=price&populate[relatedtrips][fields][3]=discount&populate[relatedtrips][fields][4]=name&populate[relatedtrips][fields][5]=pickup&populate[relatedtrips][fields][6]=drop&populate[relatedtrips][populate][7]=coverimage&populate[relatedtrips][populate][8]=bannerimage&populate[relatedtrips][fields][9]=isCustomized&populate[relatedtrips][fields][10]=durationdays&populate[relatedtrips][populate][11]=dates&populate[relatedtrips][fields][12]=bannerimageurl&populate[relatedtrips][fields][13]=coverimageurl&populate[dates][fields]=*&populate[costing][fields]=*&populate[relatedimagesurl][fields]=*&populate[itinerarypdf][fields]=*&populate[bannerimage][fields]=*&populate[categories][fields]=*&populate[itineraryaccordion][fields]=*&populate[dates][fields]=*`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res) {
            return null;
        }

        let pageContent = res.data[0].attributes

        // console.log("pageContent", pageContent); // debug

        if (!pageContent) {
            return null;
        }

        return pageContent;
    }
    catch (error) {
        console.log("error: while fetching page data (strapi.ts) ", error);
        return null;
    }
}


export const getStrapiRetreatTestimonials = async () => {
    try {
        const res = await axios.get(`https://cms.captureatrip.com/api/retreat?populate[testimonials][populate]=image`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res || !res.data || !res.data.attributes) {
            return null;
        }

        return res.data.attributes;
    }
    catch (error) {
        console.log("error: while fetching leaderboard data (strapi.ts) ", error);
        return null;
    }

}


export const getStrapiCatergoryContent = async ({ slug }: { slug: string }) => {
    // http://cms.captureatrip.com/api/categories?filters[$and][0][Title][$eq]=Weekend&sort=id:ASC&populate=*
    try {
        // console.log("slug", slug); // debug
        // const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/categories?filters[$and][0][slug][$eq]=${slug}&populate[trips][populate][1]=dates`, {
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/categories?&filters[slug][$in][0]=${slug}&populate[trips][populate][0]=dates&populate[trips][fields][0]=slug&populate[trips][populate][1]=costing&populate[trips][populate][2]=bannerimage&populate[trips][populate][3]=coverimage&populate[trips][fields][1]=price&populate[trips][fields][2]=discount&populate[trips][fields][3]=name&populate[trips][fields][4]=coverimageurl&populate[trips][fields][5]=durationdays&populate[trips][fields][6]=isCustomized&populate[trips][fields][7]=pickup&populate[trips][fields][8]=drop&populate[trips][fields][9]=bannerimageurlalt&populate[trips][fields][10]=coverimageurlalt&populate[trips][fields][11]=bannerimageurl&populate[trips][fields][12]=isInternational&populate[bannerimage][fields][13]=*&populate[relatedImages][fields][14]=*`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        // console.log("res", res); // debug

        if (!res) {
            return null;
        }

        let pageContent = res.data[0].attributes

        // console.log("pageContent", pageContent); // debug

        // console.log("pageContent", pageContent); // debug

        if (!pageContent) {
            return null;
        }

        return pageContent;
    }
    catch (error) {
        console.log("error: while fetching category data (strapi.ts) ", error);
        return null;
    }
}
export const getStrapiCatergoryDates = async ({ slug }: { slug: string }) => {
    // http://cms.captureatrip.com/api/categories?filters[$and][0][Title][$eq]=Weekend&sort=id:ASC&populate=*
    try {
        // console.log("slug", slug); // debug
        // const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/categories?filters[$and][0][slug][$eq]=${slug}&populate[trips][populate][1]=dates`, {
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/categories?&filters[slug][$in][0]=${slug}&populate[trips][populate][0]=dates&populate[trips][fields][0]=id&fields[0]=slug`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        // console.log("res", res); // debug

        if (!res) {
            return null;
        }

        let pageContent = res.data[0].attributes

        // console.log("pageContent", pageContent); // debug

        // console.log("pageContent", pageContent); // debug

        if (!pageContent) {
            return null;
        }

        return pageContent;
    }
    catch (error) {
        console.log("error: while fetching category data (strapi.ts) ", error);
        return null;
    }
}

export const getStrapiCategoryContentSlug = async ({ slugs }: { slugs: string[] }) => {
    try {
        const requests = slugs.map(slug => {
            return axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/categories?&filters[slug][$in][0]=${slug}&populate[trips][populate][0]=dates&populate[trips][fields][0]=slug&populate[trips][populate][1]=costing&populate[trips][populate][2]=bannerimage&populate[trips][populate][3]=coverimage&populate[trips][fields][1]=price&populate[trips][fields][2]=discount&populate[trips][fields][3]=name&populate[trips][fields][4]=coverimageurl&populate[trips][fields][5]=durationdays&populate[trips][fields][6]=isCustomized&populate[trips][fields][7]=pickup&populate[trips][fields][8]=drop&populate[trips][fields][9]=bannerimageurlalt&populate[trips][fields][10]=coverimageurlalt&populate[trips][fields][11]=bannerimageurl&populate[trips][fields][12]=isInternational&populate[bannerimage][fields][13]=*`, {
                headers: {
                    Authorization: `Bearer ${CMS_API_TOKEN}`
                }
            });
        });

        const responses = await Promise.all(requests);

        const responseData = responses.map(res => res.data.data[0].attributes);



        // console.log("responseData", responseData[0].trips.data); // debug

        const allTrips = responseData.flatMap((data: any) => {
            return data.trips.data.map((trip: any) => {
                return {
                    ...trip.attributes,
                    dates: trip.attributes.dates.filter((date: any) => { // filter out past dates
                        let currentDate = new Date();
                        let tripDate = new Date(date.tripdate);
                        return currentDate < tripDate;
                    })
                }
            });
        }).reduce((uniqueTrips: any[], trip: any) => {
            const existingTrip = uniqueTrips.find((t: any) => t.slug === trip.slug);
            if (!existingTrip) {
                uniqueTrips.push(trip);
            }
            return uniqueTrips;
        }, []);


        // console.log("allTrips", allTrips); // debug

        return allTrips;
    } catch (error) {
        console.log("error: while fetching category data (strapi.ts) ", error);
        return null;
    }
}

export const getStrapiBookingTrip = async ({ slug }: { slug: string }) => {
    // http://cms.captureatrip.com/api/trips?filters[slug][$in][0]=meghalaya-backpacking-trip&populate=dates
    try {
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/trips?filters[slug][$in][0]=${slug}&populate[0]=dates&populate[1]=costing&fields[0]=durationdays&fields[1]=name&fields[2]=pickup&fields[3]=slug&fields[4]=drop`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res) {
            return null;
        }

        let tripData = res.data[0].attributes


        if (!tripData) {
            return null;
        }

        // console.log("tripData", tripData); // debug
        return tripData;
    }
    catch (error) {
        console.log("error: while fetching trip data (strapi.ts) ", error);
        return null;
    }
}

export const getStrapiCuratedCategories = async () => {
    try {
        // http://cms.captureatrip.com/api/home?populate=curatedcategory
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/home?populate[curatedcategory][populate][0]=curatedimage`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res) {
            return null;
        }

        let curatedCategories = res.data.attributes.curatedcategory

        if (!curatedCategories) {
            return null;
        }

        // console.log("curatedCategories", curatedCategories); // debug

        return curatedCategories;

    } catch (error) {
        console.log("error: while fetching curated categories data (strapi.ts) ", error);
        return null;
    }
}

export const getStrapiCollectionCount = async (collection: string) => {
    // http://cms.captureatrip.com/api/categories?fields[0]=slug&pagination[pageSize]=0
    try {
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/${collection}?fields[0]=slug&pagination[pageSize]=0`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res) {
            return null;
        }

        let tripData = res.meta.pagination.total


        if (!tripData) {
            return null;
        }

        // console.log("tripData", tripData); // debug
        return tripData;
    }
    catch (error) {
        console.log("error: while fetching trip data (strapi.ts) ", error);
        return null;
    }

}

// export const getStrapiCollectionSlugs = async (collection: string) => {
//     // http://cms.captureatrip.com/api/categories?fields[0]=slug&pagination[pageSize]=0
//     try {
//         const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/${collection}?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=999`, {
//             headers: {
//                 Authorization: `Bearer ${CMS_API_TOKEN}`
//             }
//         }).then((res) => {
//             return res.data;
//         });

//         if (!res) {
//             return null;
//         }

//         let tripData = res.data


//         if (!tripData) {
//             return null;
//         }

//         // console.log("tripData", tripData); // debug
//         return tripData;
//     }
//     catch (error) {
//         console.log("error: while fetching trip data (strapi.ts) ", error);
//         return null;
//     }

// }

// export const getStrapiCollectionSlugs = async (collection: string) => {
//     const allData: any[] = []; // Initialize an array to store all fetched data
//     let page = 1; // Start with the first page

//     try {
//         while (true) {
//             const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/${collection}?fields[0]=slug&fields[1]=updatedAt&pagination[page]=${page}&pagination[pageSize]=100`, {
//                 headers: {
//                     Authorization: `Bearer ${CMS_API_TOKEN}`
//                 }
//             }).then((res) => res.data);

//             // Check if there's data returned
//             if (res.data.length === 0) {
//                 break; // Exit loop if no more data
//             }

//             allData.push(...res.data); // Append the fetched data
//             page++; // Move to the next page
//         }

//         return allData; // Return all collected data
//     } catch (error) {
//         console.log("Error while fetching trip data (strapi.ts):", error);
//         return null;
//     }
// }

export const getStrapiCollectionSlugs = async (collection: string) => {
    const allData: any[] = []; // Initialize an array to store all fetched data
    let page = 1; // Start with the first page

    try {
        while (true) {
            const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/${collection}?fields[0]=slug&fields[1]=updatedAt&pagination[page]=${page}&pagination[pageSize]=100`, {
                headers: {
                    Authorization: `Bearer ${CMS_API_TOKEN}`
                }
            }).then((res) => res.data);

            // Check if there's data returned
            if (res.data.length === 0) {
                break; // Exit loop if no more data
            }

            allData.push(...res.data); // Append the fetched data

            // Break if the last page is reached
            const totalPages = res.meta.pagination.totalPages; // Get total pages from meta
            if (page >= totalPages) {
                break; // Exit loop if the last page is reached
            }

            page++; // Move to the next page
        }

        return allData; // Return all collected data
    } catch (error) {
        console.log("Error while fetching trip data (strapi.ts):", error);
        return null;
    }
};





export const getStrapiCampaignContent = async ({ slug }: { slug: string }) => {
    // use
    // https://cms.captureatrip.com//api/google-ads/1?populate[1]=trips&populate[2]=activities&populate[3]=Location&populate[Location][populate]=*&populate[background][populate]=*&populate[activities][populate][4]=image&populate[activities][populate][5]=tags&populate[activities][populate][6]=location&populate[7]=trips&populate[trips][populate][8]=coverimage&populate[trips][populate][9]=bannerimage&populate[trips][populate][10]=dates&populate[trips][populate][11]=tags&populate[12]=testimony&populate[testimonies][populate][13]=avatar&populate[testimonies][populate][14]=media&populate[15]=gallery1&populate[gallery1][populate][16]=url&populate[17]=gallery2&populate[gallery2][populate][18]=url
    try {
        const res = await axios.get(`${NEXT_PUBLIC_STRAPI_URL}/api/google-ads?filters[slug][$in][0]=${slug}&populate[1]=trips&populate[2]=activities&populate[3]=Location&populate[Location][populate]=*&populate[background][populate]=*&populate[activities][populate][4]=image&populate[activities][populate][5]=tags&populate[activities][populate][6]=location&populate[7]=trips&populate[trips][populate][8]=coverimage&populate[trips][populate][9]=bannerimage&populate[trips][populate][10]=dates&populate[trips][populate][11]=tags&populate[12]=testimony&populate[testimonies][populate][13]=avatar&populate[testimonies][populate][14]=media&populate[15]=gallery1&populate[gallery1][populate][16]=url&populate[17]=gallery2&populate[gallery2][populate][18]=url`, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        }).then((res) => {
            return res.data;
        });

        if (!res) {
            return null;
        }

        let pageContent = res.data[0]
        // console.log("pageContent", pageContent); // debug

        if (!pageContent) {
            return null;
        }

        return pageContent;
    }
    catch (error) {
        console.log("error: while fetching page data (strapi.ts) ", error);
        return null;
    }
}

export const options = async () => {
    try {
        const res = await axios.get("https://api.gumlet.com/v1/video/assets/670e4f0aab61e82eeb2112b8", {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer 68065080bd2afc50cac2cd27cb2505ae'
            }
        }).then((res) => {
            return res
        })

        if (!res) {
            return null;
        }

        let pageContent = res

        // console.log("pageContent", pageContent); // debug

        if (!pageContent) {
            return null;
        }

        return pageContent;

    }
    catch (error) {
        console.log("error: while fetching page data (strapi.ts) ", error);
        return null;
    }
    // method: 'GET',
    // url: 'https://api.gumlet.com/v1/video/sources',

};

// axios
//     .request(options)

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const CMS_API_TOKEN = process.env.CMS_API_TOKEN;
const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// Function to calculate relevance score
function calculateRelevance(query: any, tripName: any) {
    const queryTerms = query.toLowerCase().split(' ');
    const name = tripName.toLowerCase();
    let relevance = 0;

    // Check if query term appears at the beginning of the trip name
    queryTerms.forEach((term: any) => {
        if (name.startsWith(term)) {
            relevance += 2; // Increase relevance for matches at the beginning
        } else if (name.includes(term)) {
            relevance += 1; // Increment relevance for each matching term
        }
    });

    return relevance;
}

export async function POST(req: NextRequest) {

    try {
        const { query, tripType = "All", tripDuration = "All" }: String | any = await req.json();
        // console.log("days", tripDuration); // debug

        if (!query) return NextResponse.json({ error: 'Search Query is required' }, { status: 403 });

        let apiUrl = `${NEXT_PUBLIC_STRAPI_URL}/api/trips?filters[$or][0][name][$contains]=${query}&filters[$or][1][slug][$contains]=${query}&filters[$or][2][metakeywords][$contains]=${query}&filters[$or][3][metadescription][$contains]=${query}&fields[4]=slug&fields[5]=name`

        switch (tripType) {
            case "Domestic":
                // console.log("domestic"); // debug
                apiUrl = `${apiUrl}` + `&filters[$and][6][isDomestic][$eq]=true&filters[$and][7][isInternational][$eq]=false`
                break;
            case "International":
                // console.log("international"); // debug
                apiUrl = `${apiUrl}` + `&filters[$and][6][isDomestic][$eq]=false&filters[$and][7][isInternational][$eq]=true`
                break;
            default:
                break;
        }

        // Filter by Trip Duration
        if (tripDuration === "0") { // Days = 0 or Null 
            // console.log("tripDuration: 1", tripDuration); // debug
            apiUrl = `${apiUrl}` + `&filters[$and][8][durationdays][$null]=true`
        } else if (tripDuration !== "All") {
            // Dates = not 0 or Null
            // console.log("tripDuration: 2", tripDuration); // debug
            apiUrl = `${apiUrl}` + `&filters[$and][8][durationdays][$eq]=${tripDuration}`
        }
        // console.log("apiUrl: 3", apiUrl); // debug

        // console.log("apiUrl: ", apiUrl); // debug

        const res = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${CMS_API_TOKEN}`
            }
        });

        // console.log("res: ", res.data.data); // raw data // debug

        // Sort Search Result
        res.data.data.sort((a: any, b: any) => {
            const relevanceA = calculateRelevance(query, a.attributes.name);
            const relevanceB = calculateRelevance(query, b.attributes.name);
            return relevanceB - relevanceA; // Sort in descending order of relevance
        });

        return NextResponse.json(res.data, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
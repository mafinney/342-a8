import Business from "../components/Business/Business";

const SEARCH_PATH = "https://api.yelp.com/v3/api/yelp/businesses/search";

export default async function searchBusinesses(term, location, sortBy) {
    const params = new URLSearchParams({
        term,
        location,
        sort_by: sortBy,
        limit: "20",
    });

    const res = await fetch(`${SEARCH_PATH}?${params}`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${env.VITE_YELP_KEY}` },
    });

    if (!res.ok) {
        console.log("res not ok");
        throw new Error(`Yelp request failed (${res.status})`);
    }

    const data = await res.json();

    const businesses = await data.businesses.map(business => ({
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
    }));

    return businesses;
}
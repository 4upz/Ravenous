const apiKey =
    "0daR1W7kCwlmdZJ55B0izCa3jE61QNupYClwqMk-Hi4kYu-sZGB90Ep4BW7y-ioix9KvDfyGiVxdkL29cs8JDtwA0GNSA5X1DE5Mz3BSpU3K2Ap5u4snF0o3adKYXnYx";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.city,
                            state: business.location.state,
                            zipCode: business.location.city,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                        };
                    });
                }
            });
    },
};

export default Yelp;
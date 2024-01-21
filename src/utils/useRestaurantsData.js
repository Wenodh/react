import { useEffect, useState } from 'react';

const useRestaurantsData = () => {
    const [listOfResData, setListOfResData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5248148&lng=78.4497875&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();
            const restaurantData = json?.data?.cards.find(
                (it) =>
                    it?.card?.card?.gridElements?.infoWithStyle?.restaurants
                        ?.length >= 0
            ).card?.card?.gridElements?.infoWithStyle?.restaurants;

            console.log(restaurantData);

            setListOfResData(restaurantData);
        } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
    console.log(listOfResData, loading, error);
    return { listOfResData, loading, error };
};

export default useRestaurantsData;

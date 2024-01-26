import { useEffect, useState } from 'react';
import { RESTAURANTS_URL } from './constants';

const useRestaurantsData = () => {
    const [listOfResData, setListOfResData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(RESTAURANTS_URL);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();
            const restaurantData = json?.data?.cards.find(
                (it) =>
                    it?.card?.card?.gridElements?.infoWithStyle?.restaurants
                        ?.length >= 0
            ).card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfResData(restaurantData);
        } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
    return { listOfResData, loading, error };
};

export default useRestaurantsData;

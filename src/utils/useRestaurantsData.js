import { useEffect, useState } from 'react';
import { RESTAURANTS_URL } from './constants';
import MOCK_DATA from '../mocks/resListData';

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
            const restaurantData = json?.data?.cards;
            setListOfResData(restaurantData);
        } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
            const restaurantData = MOCK_DATA?.data?.cards;
            setListOfResData(restaurantData);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };
    return { listOfResData, loading, error };
};

export default useRestaurantsData;

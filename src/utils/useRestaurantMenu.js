import { useEffect, useState } from 'react';
import { MENU_API } from './constants';
import MOCK_DATA from '../mocks/resMenuList';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        try {
            const response = await fetch(`${MENU_API}${resId}`);
            const json = await response.json();
            setResInfo(json.data.cards);
        } catch (error) {
            console.error('Error fetching menu data:', error);
            setResInfo(
                MOCK_DATA?.[resId]?.data?.cards || MOCK_DATA?.[17103].data.cards
            );
        }
    };
    return resInfo;
};

export default useRestaurantMenu;

import { useEffect, useState } from 'react';
import { MENU_API } from './constants';

export default useRestaurantMenu = (resId) => {
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
        }
    };
    return resInfo;
};

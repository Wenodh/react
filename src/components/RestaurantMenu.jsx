import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import RestaurantInfo from './RestaurantInfo';
import RestaurantCategories from './RestaurantCategories';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) return <Shimmer />;
    const restaurantInfo =
        resInfo?.find((it) => it?.card?.card?.info).card.card.info || {};
    const categories = resInfo
        ?.find((it) => it.groupedCard)
        .groupedCard.cardGroupMap.REGULAR.cards.filter(
            (card) => card?.card?.card?.["@type"]?.includes("ItemCategory")
    );
    return (
        <div className="px-4">
            <RestaurantInfo data={restaurantInfo} />
            {categories.map((category) => (
                <RestaurantCategories
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;

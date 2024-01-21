import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId)
    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } =
        resInfo?.find((it) => it?.card?.card?.info).card.card
            .info || {};
    const itemCards = resInfo?.find((it) => it.groupedCard)
        .groupedCard.cardGroupMap.REGULAR.cards.find(
            (it) => it.card.card.itemCards
        ).card.card.itemCards;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(',')}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards?.map((it) => (
                    <li key={it?.card?.info?.id}>
                        {it?.card?.info?.name} - Rs.
                        {(it?.card?.info?.price ||
                            it?.card?.info?.defaultPrice) / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;

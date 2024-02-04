import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { COLLECTIONS } from '../utils/constants';
import MOCK_DATA from '../mocks/collectionsMock.json';
import Title from './Title';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Collections = () => {
    const { collectionId } = useParams();
    const { state } = useLocation();
    const [headerDetails, setHeaderDetails] = useState(null);
    const [resDetails, setResDetails] = useState([]);
    useEffect(() => {
        fetchCollectionData();
    }, []);
    const fetchCollectionData = async () => {
        try {
            const response = await fetch(
                COLLECTIONS + state.url.split('collection_id=')[1]
            );
            const json = await response.json();
            const data = json.data.cards;
            setHeaderDetails(data[0]);
            setResDetails(
                data.filter(
                    (it) =>
                        it.card.card['@type'] ===
                        'type.googleapis.com/swiggy.presentation.food.v2.Restaurant'
                )
            );
        } catch (err) {
            const data = MOCK_DATA;
            setHeaderDetails(data[0]);
            setResDetails(
                data.filter(
                    (it) =>
                        it.card.card['@type'] ===
                        'type.googleapis.com/swiggy.presentation.food.v2.Restaurant'
                )
            );
        }
    };
    if (!headerDetails) return <Shimmer />;
    return (
        <div className="pt-6">
            <h1 className="text-5xl font-semibold">
                {headerDetails?.card.card.title}
            </h1>
            <p className="text-lg opacity-90 mt-2 text-gray-500">
                {headerDetails?.card.card.description}
            </p>

            <Title title="Restaurants to explore" />
            <div className="flex flex-wrap gap-[1%] lg:gap-[2%] overflow-wrap-break">
                {resDetails?.map((restaurant) => (
                    <Link
                        className="w-[100%] sm:w-[32%]  lg:w-[23%] xl:w-[18%]"
                        to={`/restaurants/${restaurant.card.card.info.id}`}
                        key={restaurant.card.card.info.id}
                    >
                        <RestaurantCard resData={restaurant.card.card} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Collections;

import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import { CATEGORY_CDN_URL } from '../utils/constants';

const BrowseCard = ({ data }) => {
    if (data?.card?.card?.title && data?.card?.card?.brands) {
        return (
            <div>
                <Title title={data.card.card.title} />
                <div className="border-b-2 border-gray-200 pb-7">
                    <div className="flex flex-wrap justify-between overflow-wrap-break">
                        {data.card?.card?.brands.slice(0, 12).map((brand) => (
                            <div
                                key={brand.id}
                                className={`border text-center border-gray-200 px-4 my-2 py-4 ${
                                    data.card?.card?.brands.length <= 2
                                        ? 'w-[49%] '
                                        : 'w-[49%] xl:w-[24%] sm:w-[32%]'
                                } rounded overflow-hidden overflow-ellipsis text-nowrap whitespace-nowrap hover:opacity-70 hover:scale-105 cursor-pointer`}
                            >
                                {brand.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    if (
        data?.card?.card?.title &&
        data?.card?.card?.id !== 'app_install_links'
    ) {
        return <Title title={data.card.card.title} />;
    }
    if (
        data?.card?.card?.gridElements?.infoWithStyle?.info &&
        data?.card?.card?.header
    ) {
        return (
            <div>
                <Title title={data?.card?.card?.header.title} />
                <div className="border-b-2 border-gray-200 pb-7">
                    <div className="flex overflow-x-scroll  ">
                        <div className="flex gap-2 p-2">
                            {data?.card?.card?.gridElements?.infoWithStyle?.info.map(
                                (it) => (
                                    <img
                                        src={CATEGORY_CDN_URL + it.imageId}
                                        alt=""
                                        key={it.id}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (
        data?.card?.card?.gridElements?.infoWithStyle?.restaurants &&
        data?.card?.card?.header
    ) {
        return (
            <div>
                <Title title={data?.card?.card?.header.title} />
                <div className="border-b-2 border-gray-200 pb-7">
                    <div className="flex overflow-x-scroll  ">
                        <div className="flex gap-2">
                            {data.card.card.gridElements.infoWithStyle.restaurants.map(
                                (restaurant) => (
                                    <Link
                                        className="w-80"
                                        to={`/restaurants/${restaurant.info.id}`}
                                        key={restaurant.info.id}
                                    >
                                        {restaurant?.promoted ? (
                                            <RestaurantCardPromoted
                                                resData={restaurant}
                                            />
                                        ) : (
                                            <RestaurantCard
                                                resData={restaurant}
                                            />
                                        )}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (data?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        return (
            <div className="border-b-2 border-gray-200 pb-7">
                <div className="flex flex-wrap gap-[1%] lg:gap-[2%] overflow-wrap-break">
                    {data.card.card.gridElements.infoWithStyle.restaurants.map(
                        (restaurant) => (
                            <Link
                                className="w-[100%] sm:w-[32%]  lg:w-[23%] xl:w-[18%]"
                                to={`/restaurants/${restaurant.info.id}`}
                                key={restaurant.info.id}
                            >
                                {restaurant?.promoted ? (
                                    <RestaurantCardPromoted
                                        resData={restaurant}
                                    />
                                ) : (
                                    <RestaurantCard resData={restaurant} />
                                )}
                            </Link>
                        )
                    )}
                </div>
            </div>
        );
    }
    return null;
};

export default BrowseCard;

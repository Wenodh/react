import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { resData } from './../utils/mockData';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from './../utils/useOnlineStatus';
import useRestaurantsData from './../utils/useRestaurantsData';

export default Body = () => {
    const onlineStatus = useOnlineStatus();
    const { listOfResData, loading } = useRestaurantsData();
    const [filteredResData, setFilteredResData] = useState(listOfResData);
    const [searchText, setSearchText] = useState('');
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        if ((!loading, filteredResData.length === 0)) {
            setFilteredResData(listOfResData);
        }
    }, [loading]);
    const handleSearch = () => {
        setFilteredResData(
            listOfResData.filter((it) =>
                it.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    };

    if (!onlineStatus) {
        return (
            <div>
                <h1>Looks like you are offline!</h1>
                <p>Please check your internet connection.</p>
            </div>
        );
    }
    return listOfResData?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="p-4 flex gap-2">
                <input
                    className="border-orange-400 border p-3 rounded-xl w-[300px]"
                    type="text"
                    placeholder="Type to search automatically"
                    onChange={(e) => {
                        if (!e.target.value) setFilteredResData(listOfResData);
                        setSearchText(e.target.value);
                    }}
                    value={searchText}
                />
                <button
                    className="cursor-pointer p-3 border  shadow-2xl rounded-xl border-orange-500 hover:scale-105 hover:bg-orange-300 hover:text-white"
                    onClick={handleSearch}
                >
                    Search
                </button>
                <button
                    className="cursor-pointer p-3 border  shadow-2xl rounded-xl border-orange-500 hover:scale-105 hover:bg-orange-300 hover:text-white"
                    onClick={() => {
                        setFilteredResData(
                            resData.filter((it) => it.info.avgRating > 4)
                        );
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 overflow-wrap-break">
                {filteredResData?.map((restaurant) => (
                    <Link
                        to={`/restaurants/${restaurant.info.id}`}
                        key={restaurant.info.id}
                    >
                        {restaurant?.promoted ? (
                            <RestaurantCardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

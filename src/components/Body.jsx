import { useEffect, useState } from 'react';
import { resData } from './../utils/mockData';
import useOnlineStatus from './../utils/useOnlineStatus';
import useRestaurantsData from './../utils/useRestaurantsData';
import BrowseCard from './BrowseCard';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
    const onlineStatus = useOnlineStatus();
    const { listOfResData, loading } = useRestaurantsData();
    const [filteredResData, setFilteredResData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        if (
            !loading &&
            filteredResData?.length === 0 &&
            listOfResData?.length !== 0
        ) {
            let restaurants = listOfResData?.find(
                (it) =>
                    it?.card?.card?.gridElements?.infoWithStyle?.restaurants
                        ?.length >= 0
            ).card?.card?.gridElements?.infoWithStyle?.restaurants;
            setFilteredResData(restaurants);
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
            {/* <div>
                <>
                    <input
                        className="border-orange-400 border p-3 rounded-xl max-w-[300px] mt-4 mr-1"
                        type="text"
                        data-testid="searchInput"
                        placeholder="Type to search"
                        onChange={(e) => {
                            if (!e.target.value)
                                setFilteredResData(listOfResData);
                            setSearchText(e.target.value);
                        }}
                        value={searchText}
                    />
                    <button
                        className="cursor-pointer p-3 border  shadow-2xl rounded-xl border-orange-500 hover:scale-105 hover:bg-orange-300 hover:text-white mr-1"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </>
                <button
                    className="cursor-pointer p-3 border  shadow-2xl rounded-xl border-orange-500 hover:scale-105 hover:bg-orange-300 hover:text-white my-4"
                    onClick={() => {
                        setFilteredResData(
                            resData.filter((it) => it.info.avgRating > 4)
                        );
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div> */}
            {/* <div className="flex flex-wrap gap-[1%] lg:gap-[2%] overflow-wrap-break">
                {filteredResData?.map((restaurant) => (
                    <Link
                        className="w-[100%] sm:w-[32%]  lg:w-[23%] xl:w-[18%]"
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
            </div> */}
            <div>
                {listOfResData.map((card) => (
                    <BrowseCard data={card} key={card.card.card.id} />
                ))}
            </div>
        </div>
    );
};

export default Body;

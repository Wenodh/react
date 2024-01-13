import RestaurantCard from './RestaurantCard';
import { resData } from './../utils/mockData';
import { useState } from 'react';

export default Body = () => {
    const [listOfResData, setListOfResData] = useState(resData);
    return (
        <div className="body">
            <div className="search">
                <input
                    className='search-input'
                    type="text"
                    placeholder='Type to search automatically'
                    onChange={(e) =>
                        setListOfResData(
                            resData.filter((it) =>
                                it.info.name
                                    .toLowerCase()
                                    .includes(e.target.value.toLowerCase())
                            )
                        )
                    }
                />
                <button
                    className="filter-btn"
                    onClick={() => {
                        setListOfResData(
                            resData.filter((it) => it.info.avgRating > 4)
                        );
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfResData.map((data) => (
                    <RestaurantCard resData={data} key={data.info.id} />
                ))}
            </div>
        </div>
    );
};

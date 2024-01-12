import RestaurantCard from "./RestaurantCard";
import {resData} from './../utils/mockData';

export default Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resData.map((data) => (
                    <RestaurantCard resData={data} key={ data.info.id} />
                ))}
            </div>
        </div>
    );
};
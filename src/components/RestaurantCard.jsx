import { RESTAURANT_CDN_URL } from "../utils/constants";

export default RestaurantCard = (props) => {
    const { name, avgRatingString, cloudinaryImageId, costForTwo, cuisines } =
        props.resData?.info;
    return (
        <div className="res-card">
            <div className='res-logo-container'>
            <img
                className="res-logo"
                src={
                    RESTAURANT_CDN_URL+
                    cloudinaryImageId
                }
                alt="res-logo"
                />
                <div className='res-cost'>{costForTwo}</div>
                </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRatingString} starts</h4>
            <h4>38 minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};
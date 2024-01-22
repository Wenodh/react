import { RESTAURANT_CDN_URL } from '../utils/constants';

export default RestaurantCard = (props) => {
    const {
        name,
        avgRatingString,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        areaName,
    } = props.resData?.info;
    return (
        <div className="w-[90vw] md:w-[300px] transform hover:scale-95 origin-center transition-all duration-100 ease-in-out">
            <div className="block relative">
                <img
                    className="w-full h-[185px] object-cover rounded-3xl"
                    src={RESTAURANT_CDN_URL + cloudinaryImageId}
                    alt="res-logo"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 text-uppercase text-white font-bold text-2xl uppercase border-b-16px rounded-b-3xl bg-gradient-to-t from-slate-800">
                    {costForTwo}
                </div>
            </div>
            <div className="p-1">
                <div className="text-lg font-bold overflow-hidden overflow-ellipsis text-nowrap">
                    {name}
                </div>
                <div>
                    <span>{avgRatingString} starts - </span>
                    <span>38 minutes</span>
                </div>
                <div className="text-gray-500 text-lg font-light overflow-hidden overflow-ellipsis text-nowrap">
                    {cuisines.join(',')}
                </div>
                <div className="text-gray-500 text-lg font-light overflow-hidden overflow-ellipsis whitespace-no-wrap">
                    {areaName}
                </div>
            </div>
        </div>
    );
};

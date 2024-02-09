import { RESTAURANT_CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const {
        name,
        avgRatingString,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        areaName,
        sla,
    } = props.resData?.info;
    return (
        <div
            data-testid="resCard"
            className="w-[100%] transform hover:scale-95 origin-center transition-all duration-100 ease-in-out py-2"
        >
            <div className="block relative">
                <img
                    className="w-full h-[185px] object-cover rounded-3xl"
                    src={RESTAURANT_CDN_URL + cloudinaryImageId}
                    alt="res-logo"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 text-uppercase text-white font-bold sm:text-xl mg:text-2xl uppercase border-b-16px rounded-b-3xl bg-gradient-to-t from-slate-800">
                    {costForTwo}
                </div>
            </div>
            <div className="p-1 text-sm md:text-base">
                <div className="font-medium overflow-hidden overflow-ellipsis text-nowrap whitespace-nowrap">
                    {name}
                </div>
                <div>
                    <span>{avgRatingString}🌟 | </span>
                    <span>{sla?.slaString} ⏰</span>
                </div>
                <div className="text-gray-500 font-light overflow-hidden overflow-ellipsis text-nowrap whitespace-nowrap text-xs md:text-sm ">
                    {cuisines.join(',')}
                </div>
                <div className="text-gray-500 text-xs md:text-sm font-light overflow-hidden overflow-ellipsis whitespace-no-wrap">
                    🌍 {areaName}
                </div>
            </div>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white z-10 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;

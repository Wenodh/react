import React from 'react';
import { CATEGORY_CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import toast from 'react-hot-toast';

const ItemCard = ({ data }) => {
    const { name, description, imageId, isBestseller } = data;
    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem(data));
        toast.success('Successfully add to Cart!')
    };
    // console.log(data);
    return (
        <div className="flex border-b-[1px] border-gray-300 pt-4">
            <div className="sm:w-9/12 w-8/12 font-medium">
                {isBestseller && (
                    <div className="text-orange-300 font-bold">
                        🌟Bestseller🌟
                    </div>
                )}
                <div>
                    <span>{data?.isVeg ? '🥦 ' : '🍗 '}</span>
                    {name}
                </div>
                <div>
                    <span
                        className={
                            data?.finalPrice &&
                            'line-through text-xs font-light text-gray-500'
                        }
                    >
                        ₹{(data?.price || data?.defaultPrice) / 100}
                    </span>
                    {data?.finalPrice && (
                        <span className="pl-1">₹{data?.finalPrice / 100}</span>
                    )}
                </div>
                <p className="text-gray-500 text-xs font-light pt-2">
                    {description}
                </p>
            </div>
            <div className="sm:w-3/12 w-4/12 px-2 sm:px-4 flex flex-col items-center">
                {imageId && (
                    <img
                        className="rounded-lg w-[140px] h-28 object-cover"
                        src={CATEGORY_CDN_URL + imageId}
                        alt=""
                    />
                )}
                <button
                    className={`text-green-600 px-6 py-1 rounded-md border-gray-300 border bg-white shadow text-sm  hover:shadow-xl font-bold ${
                        imageId && 'relative bottom-5'
                    }`}
                    onClick={handleAddItem}
                >
                    ADD
                </button>
            </div>
        </div>
    );
};

export default ItemCard;

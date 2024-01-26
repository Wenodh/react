import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ items }) => {
    return (
        <div>
            {items?.map((item) => (
                <ItemCard data={item?.card?.info} />
            ))}
        </div>
    );
};

export default ItemList;

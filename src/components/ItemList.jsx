import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ items }) => {
    return (
        <div>
            {items?.map((item) => (
                <ItemCard key={item?.card?.info?.id} data={item?.card?.info} />
            ))}
        </div>
    );
};

export default ItemList;

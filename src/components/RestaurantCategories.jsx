import React from 'react';
import ItemList from './ItemList';

const RestaurantCategories = ({ data }) => {
    return (
        <details className="my-4">
            {/* Header  */}
            <summary className="bg-gray-50 p-2 shadow-lg flex justify-between font-bold cursor-pointer">
                <span>
                    {data?.title}{' '}
                    {data?.itemCards && `(${data?.itemCards?.length})`}
                </span>
                <span>⬇️</span>
            </summary>
            {/* Accordion Body */}
            {data?.itemCards && <ItemList items={data?.itemCards} />}
            {/* testing restaurant id - 530071 */}
            {data?.categories &&
                data.categories.map((category) => (
                    <div className="pl-2" key={category.title}>
                        <RestaurantCategories data={category} />
                    </div>
                ))}
        </details>
    );
};

export default RestaurantCategories;

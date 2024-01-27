import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from './ItemCard';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            <h1>Cart</h1>
            <button onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1>Cart is empty. Add items to the cart</h1>}
            {cartItems.map(item => <ItemCard data={ item} key ={item.id} />)}
        </div>
    );
};

export default Cart;

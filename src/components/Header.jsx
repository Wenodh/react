import { useContext, useState } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import Cart from './Cart';
import { useSelector } from 'react-redux';
export default Header = () => {
    const onlineStatus = useOnlineStatus();
    const [btnName, setBtnName] = useState('Login');
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between items-center p-2 border-b shadow-xl ">
            <Link to="/">
                <img className="h-20" src={logo} alt="logo" />
            </Link>
            <ul className="flex text-xl list-none items-center">
                <li className="px-5 text-orange-500 font-bold hover:text-red-500 ">
                    Online Status: {onlineStatus ? '🌍' : '🔴'}
                </li>
                <li>
                    <Link
                        className="px-5 text-orange-500 font-bold hover:text-red-500"
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className="px-5 text-orange-500 font-bold hover:text-red-500"
                        to="/about"
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        className="px-5 text-orange-500 font-bold hover:text-red-500"
                        to="/contact"
                    >
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link className="px-5 text-orange-500 font-bold hover:text-red-500 relative" to="/cart">
                        🛍
                        <div className="text-xs absolute bottom-6 right-3 text-white bg-orange-500 rounded-full p-1 text-center">
                            {cartItems.length}
                        </div>
                    </Link>
                </li>
                <button
                    className="cursor-pointer p-3 border  shadow-2xl rounded-xl border-orange-500 hover:scale-105 hover:bg-orange-300 hover:text-white"
                    onClick={() =>
                        btnName === 'Login'
                            ? setBtnName('Logout')
                            : setBtnName('Login')
                    }
                >
                    {btnName}
                </button>
            </ul>
        </div>
    );
};

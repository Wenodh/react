import { useContext, useState } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
const Header = () => {
    const onlineStatus = useOnlineStatus();
    const [btnName, setBtnName] = useState('Login');
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    const [isContentVisible, setIsContentVisible] = useState(true);

    const toggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
    };
    const handleLogin = () => {
        if (btnName === 'Login') {
            setBtnName('Logout')
            toast.success("Logged in successfully")
        } else {
            setBtnName('Login');
            toast.success("Logged out successfully")
        }
    };
    return (
        <div className="p-2 border-b shadow-xl sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center ">
                <img
                    className="h-12 sm:h- cursor-pointer"
                    src={logo}
                    alt="logo"
                    onClick={toggleContentVisibility}
                />
                <ul
                    className={`sm:flex gap-2 hidden text-xl list-none items-center`}
                >
                    <li>
                        <Link
                            className=" text-orange-500 font-bold hover:text-red-500"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    |
                    <li>
                        <Link
                            className=" text-orange-500 font-bold hover:text-red-500"
                            to="/about"
                        >
                            About Us
                        </Link>
                    </li>
                    |
                    <li>
                        <Link
                            className=" text-orange-500 font-bold hover:text-red-500"
                            to="/contact"
                        >
                            Contact Us
                        </Link>
                    </li>
                    |
                    <li className=" text-orange-500 font-bold hover:text-red-500 ">
                        Online Status: {onlineStatus ? '🌍' : '🔴'}
                    </li>
                </ul>
                <div className="flex items-center">
                    <Link
                        className="px-5 text-orange-500 font-bold hover:text-red-500 relative hover:scale-105"
                        to="/cart"
                    >
                        🛍
                        <div className="text-xs absolute bottom-4 right-3 text-white bg-orange-500 rounded-full p-1 text-center">
                            {cartItems.length}
                        </div>
                    </Link>
                    <button
                        className="cursor-pointer p-3 border  shadow-2xl rounded-xl border-orange-500 hover:scale-105 hover:bg-orange-300 hover:text-white"
                        onClick={handleLogin}
                    >
                        {btnName}
                    </button>
                </div>
            </div>
            <ul
                className={`sm:hidden ${
                    isContentVisible ? 'hidden' : 'block'
                } text-xl list-none items-center py-1`}
            >
                <li className="hover:bg-orange-100 hover:translate-x-1 py-3 px-1">
                    <Link
                        className=" text-orange-500 font-bold hover:text-red-500"
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li className="hover:bg-orange-100 hover:translate-x-1 py-3 px-1">
                    <Link
                        className=" text-orange-500 font-bold hover:text-red-500"
                        to="/about"
                    >
                        About Us
                    </Link>
                </li>
                <li className="hover:bg-orange-100 hover:translate-x-1 py-3 px-1">
                    <Link
                        className=" text-orange-500 font-bold hover:text-red-500"
                        to="/contact"
                    >
                        Contact Us
                    </Link>
                </li>
                <li className="py-3 px-1 text-orange-500 font-bold hover:text-red-500 hover:bg-orange-100 hover:translate-x-1">
                    Online Status: {onlineStatus ? '🌍' : '🔴'}
                </li>
            </ul>
        </div>
    );
};

export default Header;

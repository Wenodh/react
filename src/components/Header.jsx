import { useState } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
export default Header = () => {
    const onlineStatus = useOnlineStatus();
    const [btnName, setBtnName] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? '🌍' : '🔴'}</li>
                    <li >
                        <Link className='nav-item' to="/">Home</Link>
                    </li>
                    <li>
                        <Link  className='nav-item' to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link  className='nav-item' to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link  className='nav-item'>Cart</Link>
                    </li>
                    <button
                        className="login"
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
        </div>
    );
};

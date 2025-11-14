import React, { use } from 'react';
import { Link } from 'react-router';
import Thims from '../Thims/Thims';
import { Card } from '../RootLayout/RootLayout';
// import { ShoppingCart } from 'lucide';

const Navber = () => {

    const {cart} = use(Card)
    console.log(cart)

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Contacts'>Contacts</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Contacts'>Contacts</Link></li>
                    <li>
                        <Link to='/addCard'><div className='flex items-center gap-1.5'><p>{cart.length}</p><p>add card</p></div></Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <Thims></Thims>
                {/* <ShoppingCart></ShoppingCart> */}
            </div>
        </div>
    );
};

export default Navber;
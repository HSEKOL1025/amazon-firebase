import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import { auth } from './firebase';


function Header() {
    const [{basket, user}]= useStateValue();
    const login=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className="header"> 
        <Link to="/" >
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=" "/>
            </Link>
            <div className="header__search">

            <input type="text" className="header__searchinput"/>
            <SearchIcon className="header__searchicon" />

            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                <div onClick={login}className="header__options">
                 <span  className="header__optionone">Hello{user?.email}</span>
                <span  className="header__optiontwo">{user? 'Sign Out':'Sign In'}</span>
                </div>
                
                </Link>

                <Link to="/" className="header__link">
                <div className="header__options">
                <span className="header__optionone">Return</span>
                <span className="header__optiontwo">&Order</span>
                </div>
                
                </Link>

                <Link to="/" className="header__link">
                <div className="header__options">
                <span className="header__optionone">Your</span>
                <span  className="header__optiontwo">&Prime</span>
                </div>
                
                </Link>

                <Link to="/checkout"> 
                <div className="header__basket">
                    <ShoppingBasketIcon />
                    <span className="header__optiontwo header__basketcount" >{basket?.length}</span>


                </div>


                </Link>
            </div>

        </nav>


    )
}

export default Header

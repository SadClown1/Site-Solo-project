import React,{useState} from 'react'
import logo from '../../images/imdb.png'
import { Link } from "react-router-dom";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
    const [toggleMenu , setToggleMenu]=useState(false)
    const toggleHandle = () =>{
        setToggleMenu(!toggleMenu)
    }
  return (
    <div className='navbar gradient__bg '>
        <div className='navbar-items'>
        <div className='navbar-logo'>
            <a href='/'><img src={logo}/></a>
        </div>
        <div className='navbar-links'>
        <Link to='/'>خانه</Link>
          <Link to='/'>محصولات</Link>
          <Link to='/about'> درباره ما</Link>
         <Link to="/cart">سبد خرید</Link>
        </div>
        </div>
        <div className='navbar-sign'>
           <a href='/signin'> <button type='button'>ورود</button></a>
           <a href='/signup'> <button type='button'>ثبت نام</button></a>
        </div>
        <div className='navbar-menu-icon'>
            {toggleMenu
           ? <RiCloseLine size={27} color="#fff" onClick={toggleHandle}/>
           : <RiMenu3Line size={27} color="#fff" onClick={toggleHandle}/>}
           {toggleMenu && (
            <div className='navbar-menu-container'>
                         <div className='navbar-menu-links'>
                         <Link to='/'>خانه</Link>
          <Link to='/'>محصولات</Link>
          <Link to='/about'> درباره ما</Link>
         <Link to="/cart">سبد خرید</Link>
                          </div>  
                          <div className='navbar-menu-sign'>
           <a href='/signin'> <button type='button'>ورود</button></a>
           <a href='/signup'> <button type='button'>ثبت نام</button></a>
        </div>

        </div>
           )}
        </div>
    </div>
  );
}

export default Navbar
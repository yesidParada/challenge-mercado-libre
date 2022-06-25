import React from 'react';
import logo from '../assets/Logo_ML@2x.png.png.png';

const Header = () => {
  return (
    <div className='header'>
        <img className='header_logo' src={logo} alt="" />
        <div className='header_search'>
            <input className='header_search--input' type="text" placeholder="Nunca dejes de buscar" name="" id="" />
            <button className='header_search--button'>
                <div className='header_search--icon'>
                </div>
            </button>
        </div>
    </div>
  )
}


export default Header;
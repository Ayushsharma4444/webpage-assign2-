import React from 'react';
import {BsSearch} from 'react-icons/Bs';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookmark} from 'react-icons/bi';
import {BiShoppingBag} from 'react-icons/bi';
export const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='title'>
            <span>TANN TRIM</span>
        </div>
        <div className='nav__links'>
            <ul>
                <li><BsSearch color='white'/></li>
                <li><AiOutlineUser color='white'/></li>
                <li><BiBookmark color='white'/></li>
                <li><BiShoppingBag color='white'/></li>
            </ul>
                
        </div>
    </div>
  )
}

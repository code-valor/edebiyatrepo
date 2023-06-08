import './index.css'
import { Link, useParams, useLocation, NavLink, useLinkClickHandler, Route } from 'react-router-dom';
import { useCallback, useState } from 'react';

function Navbar() {
    return (
        
        <nav className='nav'>
            <div className='nav-list-main'>
            <ul className='nav-list'>
                
                <span className='nav-main'>
                <li className={`nav-item`} id="akimlarRoute">
                    <NavLink className={({ isActive }) => isActive ? "nav-item-current nav-item-link": "nav-item-link"} data-page-redirect='Home' href="akimlar" to="/">Akımlar</NavLink>
                </li>
                <li className="nav-item" id="blogsbutton questRoute">
                    <NavLink className={({ isActive }) => isActive ? "nav-item-current nav-item-link": "nav-item-link"} data-page-redirect='Quest' to="/quest">Kendini Dene</NavLink>
                </li>
                </span>
                </ul>
                
                <NavLink href='#akimlar'><img src="/logo.png" alt=""  className='nav-picture'/></NavLink>
            <ul className='nav-list-second'>
                <span className='nav-member'>
                <li className="nav-item" id="registerbutton registerRoute">
                    <NavLink className={({ isActive }) => isActive ? "nav-item-current nav-item-link": "nav-item-link"} data-page-redirect='Library' to="/kutuphane">Kütüphane</NavLink>
                </li>
                <li className="nav-item" id="loginbutton loginRoute">
                    <NavLink  className={({ isActive }) => isActive ? "nav-item-current nav-item-link": "nav-item-link"} data-page-redirect='About' to="/hakkimizda">Hakkımda</NavLink>
                </li>
                </span>
                
            </ul>
            </div>
            
        </nav>
    );
};

export default Navbar; 
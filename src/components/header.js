import { Hidden } from '@material-ui/core';
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './header.css'
import MobileNav from './mobilenav'
function header() {
    return (         <>
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <Link className="nav__logo" to="/">Mohendra Murmu</Link>
                </div>
                <Hidden smDown>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink className="nav__link" exact to="./">Home</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" exact to="./about">About</NavLink>
                        </li>                        
                        <li className="nav__item"><NavLink  className="nav__link " exact to="./projects">Work</NavLink></li>
                        <li className="nav__item"><NavLink  className="nav__link " exact to="./contact">Contact</NavLink></li>
                    </ul>
                </div>
                </Hidden>                
            </nav>            
        </header>
        <Hidden mdUp>
            <div className="mobile__nav">
                <MobileNav />
            </div>
            </Hidden>
            </>
    )
}

export default header

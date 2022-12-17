import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <h3>Pro Quizzer</h3>
                </li>
                <li>
                    <NavLink to={"/"}>Tropics</NavLink>
                </li>
                <li>
                    <NavLink to={"/statics"}>Statics</NavLink>
                </li>
                <li>
                    <NavLink to={"/blogs"}>Blogs</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
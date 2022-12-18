import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=" bg-lime-50 ">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-8 md:w-11/12 md:mx-auto">
            <h3 className="font-bold text-xl">Pro Quizzer</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    <NavLink to={"/"} className={({isActive})=>isActive?"border-b border-primary":"hover:border-b border-info"}>Tropics</NavLink>
            
                    <NavLink to={"/statics"} className={({isActive})=>isActive?"border-b border-primary":"hover:border-b border-info"}>Statics</NavLink>

                    <NavLink to={"/blogs"} className={({isActive})=>isActive?"border-b border-primary":"hover:border-b border-info"}>Blogs</NavLink>
                    
            </div>
            </div>
        </nav>
    );
};

export default Header;
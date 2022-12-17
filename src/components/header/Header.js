import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=" bg-lime-50 ">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-6 md:w-11/12 md:mx-auto">
            <h3 className="px-3 py-2 font-bold text-xl">Pro Quizzer</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    <NavLink to={"/"} className={({isActive})=>isActive?"px-3 py-2 bg-fuchsia-300 rounded" : "px-3 py-2 hover:bg-base-200 rounded"}>Tropics</NavLink>
            
                    <NavLink to={"/statics"} className={({isActive})=>isActive?"px-3 py-2 bg-fuchsia-300 rounded" : "px-3 py-2 hover:bg-base-200 rounded"}>Statics</NavLink>

                    <NavLink to={"/blogs"} className={({isActive})=>isActive?"px-3 py-2 bg-fuchsia-300 rounded" : "px-3 py-2 hover:bg-base-200 rounded"}>Blogs</NavLink>
                    
            </div>
            </div>
        </nav>
    );
};

export default Header;
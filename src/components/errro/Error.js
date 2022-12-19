import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="bg-[url('https://media.istockphoto.com/id/1308366072/vector/rocket.jpg?s=612x612&w=0&k=20&c=GuEQgM61-_lTSX_witw1WMcwU9dcHIK_IznBYnson-Y=')] h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-2 p-5">
            <h1 className="text-3xl font-bold">Sorry,this page isn't available.</h1>
            <p className="text-xl">The link you followed may be broken,or the page may have been removed.</p>
            <Link to={"/"} className="text-xl underline">Go to home</Link>
        </div>
    );
};

export default Error;
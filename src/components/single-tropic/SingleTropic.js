import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleTropic = ({ tropic }) => {
    const { id, logo, name, total } = tropic;
    const navigate=useNavigate();
    return (
        <div className="card bg-base-100 shadow-xl border-2">
            <figure><img src={logo} alt="" className="h-72 w-full bg-zinc-300" /></figure>
            <div className="card-body">
                <h2 className="card-title">Topic: {name}</h2>
                <p>Total Question : {total}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>navigate(`/quiz/${id}`)} className="btn btn-primary">Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTropic;
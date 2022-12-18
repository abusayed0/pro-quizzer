import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleTropic = ({ tropic }) => {
    const { id, logo, name, total } = tropic;
    const navigate=useNavigate();
    return (
        <div className="card  shadow-xl">
            <figure><img src={logo} alt="" className="h-72 w-full bg-zinc-300" /></figure>
            <div className="card-body rounded-2xl bg-base-100">
                <h2 className="card-title">Topic: {name}</h2>
                <p>Total Question : {total}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>navigate(`/quiz/${id}`)} className="btn btn-primary">Start Now <FontAwesomeIcon icon={faArrowRight} className="text-xl ml-2"/></button>
                </div>
            </div>
        </div>
    );
};

export default SingleTropic;
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faSquareXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleOption = ({ option, handleCheck, right, wrong }) => {
    return (
        <button className={`rounded p-5 text-start ${
            (option !== right && option !== wrong && "bg-base-100")
            ||
            (option === right && "bg-primary")
            ||
            (option === wrong && "bg-red-300")}`} onClick={() => handleCheck(option)}>
            <div className="flex items-center gap-3">
                {
                    (option !== right && option !== wrong && <FontAwesomeIcon className="text-4xl" icon={faSquare} ></FontAwesomeIcon>)
                    ||
                    (option === right && <FontAwesomeIcon icon={faSquareCheck} className="text-4xl"></FontAwesomeIcon>)
                    ||
                    (option === wrong && <FontAwesomeIcon icon={faXmark} className="text-4xl"></FontAwesomeIcon>)
                }
                <p className="text-xl" style={{"wordBreak":"break-word"}}>{option}</p>
            </div>
        </button>

    );
};

export default SingleOption;
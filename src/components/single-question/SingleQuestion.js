import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import SingleOption from '../single-option/SingleOption';

const SingleQuestion = ({ questionData, index }) => {

    const [right,setRight]=useState("");
    const [wrong,setWrong]=useState("");
    const { question, correctAnswer, options } = questionData;
    const handleCheck = selected => {
       
        if(selected !== right && selected !== wrong){
            if(selected===correctAnswer){
                setRight(selected)
                setWrong("");
                Swal.fire(
                    'Good job!',
                    'Your answer is right!',
                    'success'
                  )
            }
            else{
                setWrong(selected)
                setRight("");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Your answer is wrong!',
                  })
            }
        }
    }

    const handleShowAnswer=()=>{
        Swal.fire(correctAnswer)
    }
    
    return (
        <div className=" bg-zinc-300 shadow-xl p-7 rounded-md">
            <div className="flex justify-between flex-col md:flex-row gap-2 md:gap-0">
                <h3 className="text-2xl">{`${index + 1}.${question}`}</h3>
                <FontAwesomeIcon className="text-4xl hover:cursor-pointer" icon={faEye} onClick={handleShowAnswer}/>
            </div>
            <div className="grid grid-cols-1 items-center gap-4 mt-6">
                {
                    options.map((option, index) => <SingleOption
                        key={index}
                        option={option}
                        handleCheck={handleCheck}
                        wrong={wrong}
                        right={right}
                    >
                    </SingleOption>)
                }
            </div>
        </div>
    );
};

export default SingleQuestion;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const quizesData=useLoaderData().data;
    const allQuestion = quizesData.questions;
    console.log(allQuestion)
    return (
        <div>
            <p>This is Quizes Page !</p>
            <p>Total Question: {}</p>
        </div>
    );
};

export default Quizes;
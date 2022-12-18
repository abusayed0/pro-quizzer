import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../single-question/SingleQuestion';

const Quizes = () => {
    const quizesData=useLoaderData().data;
    const {questions,name} = quizesData;
    return (
        <div className="md:w-10/12 mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center ">{name} Related Question.</h2>
            <div className="grid grid-cols-1 gap-16 mt-10">
                {
                    questions.map((question,index)=><SingleQuestion
                    key={question.id}
                    questionData={question}
                    index={index}
                    >
                    </SingleQuestion>)
                }
            </div>
        </div>
    );
};

export default Quizes;
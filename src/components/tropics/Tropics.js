import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTropic from '../single-tropic/SingleTropic';

const Tropics = () => {
    const allTropics=useLoaderData().data;
    return (
        <div className="mt-20 mb-10 md:w-10/12 md:mx-auto">

            {/* top banner start */}
            <div className="relative">
            <div className="h-80vh">
               <img src="https://media.istockphoto.com/id/1398473177/photo/questionnaire-with-checkboxes-filling-survey-form-online-answer-questions.jpg?b=1&s=170667a&w=0&k=20&c=Ld-E8ElmNgDKGxFBVyVFqqBDG6byHF98amsRMYFEedk=" alt="" className="w-full h-full brightness-50" />
            </div>
            <div className="absolute top-0 h-full w-full flex justify-center flex-col p-5 md:p-10 gap-4 md:gap-6">
                <h2 className="text-2xl font-bold text-white">Know Your Present Knowledge Level With Pro Quizzer !</h2>
                <p className="text-white text-xl">Wellcome to Pro Quizzer. Pro Quizzer is one the most popular online based quiz contest organaizer.we have the best team and our team members are very much serious to provide quality question.let test yourself. </p>
            </div>
            </div>

            {/* tropics start */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                {
                    allTropics.map(tropic=><SingleTropic
                    key={tropic.id}
                    tropic={tropic}
                    >
                    </SingleTropic>)
                }
            </div>

        </div>
    );
};

export default Tropics;
import React from 'react';

const Blogs = () => {
    return (
        <div className="mt-20 mb-10 md:w-10/12 md:mx-auto">
            <div className="grid grid-cols-1 gap-10">
                <div className="bg-zinc-300 shadow-xl p-7 rounded-md flex flex-col gap-3">
                    <h2 className="text-2xl">What is The purpose of react router ?</h2>
                    <p className="text-xl">
                    React JS Router is mainly used for developing Single Page Web Applications. it is used to define multiple routes in the application.it allows us to build a single-page web application with navigation without the page resfreshing.
                    </p>
                </div>
                <div className="bg-zinc-300 shadow-xl p-7 rounded-md flex flex-col gap-3">
                    <h2 className="text-2xl">How does context api works?</h2>
                    <p className="text-xl">
                    Context api makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props which know as props drilling.
                    </p>
                    <p className="text-xl">
                        To use use context first we have to declare a context with useContext hooks,then we have to wrap the context area with Context.Provide conponent and pass the context  as value props.after that we can access and use this context from its defined area with useContext hooks.
                        </p>
                </div>
                <div className="bg-zinc-300 shadow-xl p-7 rounded-md flex flex-col gap-3">
                    <h2 className="text-2xl">What is the use of react useRef hooks ?</h2>
                    <p className="text-xl">useRef is one of the many built-in hooks provided by React. It is useful for persisting mutable data between component renders. useRef returns only one value which is the actual data stored. When the reference value is changed, it is updated without the need to refresh or re-render.useRef used to accessing DOM elements,tracking state changes.

                    </p>
                </div>

            </div>
            
        </div>
    );
};

export default Blogs;
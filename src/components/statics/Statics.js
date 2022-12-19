import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = () => {
    const data = useLoaderData().data;
    return (
        <div className="md:w-10/12 md:mx-auto mt-20 mb-10">
            <h3 className="text-2xl text-center px-5">This is a quiz tropic vs total question on this tropic bar char.</h3>
            <div className="h-96 mt-10">
            <ResponsiveContainer width={"100%"} height="100%" margin={"auto"}>

                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 0,
                        bottom: 5
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
};

export default Statics;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskDetails = () => {
    const data = useLoaderData()
    const {_id, projectTitle, task, shortDescription, detailInformation, dueDate} = data;

    return (
        <div className="mt-10 bg-cyan-50 py-8 px-10 rounded-xl shadow-lime-600">
            <h1 className='text-2xl font-bold'>Task: {task}</h1>
            <h2 className='my-2 text-xl font-bold'>Project: <span className='font-medium'>{projectTitle}</span></h2>
            <h1 className='text-xl text-red-700 font-bold'>Due Date: <span className='text-black font-semibold'>{dueDate}</span></h1>
            <p className='text-xl font-bold mt-2'>Details: <span className='text-lg font-medium'>{detailInformation}</span></p>
            <button className='btn btn-accent mt-6 text-white font-bold text-xl'>ADD TO DO LIST</button>
        </div>
    );
};

export default TaskDetails;
import React from 'react';

const Task = () => {
    return (
        <div className='mt-10 bg-gray-200 py-6 px-6 rounded-xl shadow-xl shadow-black'>
            <h1 className='font-bold text-2xl'>Task: TAskify</h1>
            <h2 className='text-xl font-semibold my-1'>Project: Webli</h2>
            <p className='font-bold text-xl mb-1'>Description: <span className='font-medium text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aspernatur?</span></p>
            <h2 className='text-2xl font-bold text-red-700'>Due Date: <span className='text-xl text-black'>12/12/12</span></h2>
        </div>
    );
};

export default Task;
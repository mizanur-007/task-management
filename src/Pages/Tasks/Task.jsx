
const Task = ({taskinfo}) => {
    const {projectTitle, task, shortDescription,  dueDate} = taskinfo;
    return (
        <div className='mt-10 bg-gray-200 py-6 px-6 rounded-xl shadow-xl shadow-black cursor-pointer' >
            <h1 className='font-bold text-2xl'>Task: {task}</h1>
            <h2 className='text-xl font-semibold my-1'>Project: {projectTitle}</h2>
            <p className='font-bold text-xl mb-1'>Description: <span className='font-medium text-lg'>{shortDescription}</span></p>
            <h2 className='text-2xl font-bold text-red-700'>Due Date: <span className='text-xl text-black'>{dueDate}</span></h2>
        </div>
    );
};

export default Task;
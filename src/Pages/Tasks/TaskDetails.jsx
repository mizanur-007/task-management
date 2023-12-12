import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const TaskDetails = () => {
    const [selected, setSelected] = useState(false);
    const data = useLoaderData()
    const {_id, projectTitle, task, detailInformation, dueDate, shortDescription} = data;
    const {user} = useContext(AuthContext);
    const userEmail = user.email;

    const handleAddList = ()=>{
        const addData = {userEmail, task,projectTitle, shortDescription, detailInformation, dueDate };
        axios.post('https://task-management-server-peach.vercel.app/api/v1/todolist',addData,{withCredentials:true})
        .then((res)=>{
            console.log(res.data)
        })
        .catch(()=>{
            console.log("todo error")
        })
        setSelected(true)
    }

    return (
        <div className="mt-10 bg-cyan-50 py-8 px-10 rounded-xl shadow-lime-600 flex justify-between">
            <div>
            <h1 className='text-xl lg:text-2xl font-bold'>Task: {task}</h1>
            <h2 className='my-2 text-lg lg:text-xl font-bold'>Project: <span className='font-medium'>{projectTitle}</span></h2>
            <h1 className='text-lg lg:text-xl text-red-700 font-bold'>Due Date: <span className='text-black font-semibold'>{dueDate}</span></h1>
            <p className='text-lg lg:text-xl font-bold mt-2'>Details: <span className='text-lg font-medium'>{detailInformation}</span></p>
            </div>

            <div className='text-center space-y-9'>
            <Link to={`/update/${_id}`}> <button className='btn btn-accent mt-6 text-white font-bold text-lg lg:text-xl'>UPDATE</button>
            </Link>
            <br />
            <button onClick={handleAddList} className={`btn btn-accent mt-6 text-white font-bold text-base lg:text-xl ${selected?'hidden':'block'}`}>ADD TO DO LIST</button>
            </div>
            
        </div>
    );
};

export default TaskDetails;
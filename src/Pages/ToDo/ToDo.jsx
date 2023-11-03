import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import LoaderPage from '../LoaderPage/LoaderPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import ToDoTask from './ToDoTask';

const ToDo = () => {
    const client = useQueryClient();
    const {data, isLoading, isError} = useQuery({
        queryKey: ['todo'],
        queryFn: async()=>{
            const response = await axios.get("http://localhost:5000/todolist",{withCredentials: true})
            const result = await response.data;
            return result
        }
    })
    if(isLoading){
        return <LoaderPage></LoaderPage>
    }
    if(isError){
        return <ErrorPage></ErrorPage>

    }

    //delete a card
    const handleDelete = (id)=>{
        axios.delete(`http://localhost:5000/todolist/${id}`)
        .then((res)=>{
            console.log(res.data)
            client.invalidateQueries('todo');
        })
        .catch(()=>{
            console.log("delete error")
        })

    }

    return (
            <div>
            {
                data.map(taskinfo => <ToDoTask key={taskinfo._id} taskinfo={taskinfo} handleDelete={handleDelete}></ToDoTask>)
            }
        </div>
    );
};

export default ToDo;
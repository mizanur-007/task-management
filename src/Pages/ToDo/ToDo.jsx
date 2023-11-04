import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import LoaderPage from '../LoaderPage/LoaderPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import ToDoTask from './ToDoTask';
import { toast } from 'react-toastify';

const ToDo = () => {
    const client = useQueryClient();
    const {data, isLoading, isError} = useQuery({
        queryKey: ['todo'],
        queryFn: async()=>{
            const response = await axios.get("http://localhost:5000/api/v1/todolist",{withCredentials: true})
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
        axios.delete(`http://localhost:5000/api/v1/todolist/${id}`)
        .then(()=>{
            toast.error("Deleted Task",{
                autoClose: 2000
              });
            client.invalidateQueries('todo');
        })
        .catch(()=>{
            toast.error("Deletion Denied",{
                autoClose: 2000
              });
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
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Task from './Task';
import LoaderPage from '../LoaderPage/LoaderPage';
import ErrorPage from '../ErrorPage/ErrorPage';

const Tasks = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey:["tasks"],
        queryFn: async()=>{
            const result = await axios.get("http://localhost:5000/tasks");
            const data = await result.data;
            return data;
        }
    })
    if(isLoading){
        return <LoaderPage></LoaderPage>
    }
    if(isError){
        return <ErrorPage></ErrorPage>
    }
    return (
        <div>
            {
                data.map(taskinfo => <Task key={taskinfo._id} taskinfo={taskinfo}></Task>)
            }
        </div>
    );
};

export default Tasks;
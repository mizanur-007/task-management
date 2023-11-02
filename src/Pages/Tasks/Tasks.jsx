import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Task from './Task';
import LoaderPage from '../LoaderPage/LoaderPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useState } from 'react';

const Tasks = () => {
const [currentPage, setCurrentPage] = useState(0);
const perPage = 8;

//data load
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


    const tasks = data.result;

        //pagination calculation
    const totalCount = data.count;
    const numberOfPage = Math.ceil(totalCount/perPage);

    const pages = [...Array(numberOfPage).keys()]
    console.log(currentPage)

    const handlePrevious = ()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1);
        }
    }

    const handleNext = ()=>{
        if(currentPage<numberOfPage-1){
            setCurrentPage(currentPage+1);
        }
    }

    return (
        <div>
            <div>
            {
                tasks.map(taskinfo => <Task key={taskinfo._id} taskinfo={taskinfo}></Task>)
            }
        </div>

        {/* buttons  */}
        <div className='text-center space-x-8 mt-12'>
            <button onClick={handlePrevious} className='btn btn-secondary btn-outline '>Previous</button>
            {
                pages.map((page, index)=> <button className={`btn btn-secondary btn-outline ${currentPage == page ?'bg-black':""}`} key={index} onClick={()=>setCurrentPage(page)}>{page+1}</button>)
            }
            <button onClick={handleNext} className='btn btn-secondary btn-outline '>Next</button>
        </div>
        </div>
    );
};

export default Tasks;
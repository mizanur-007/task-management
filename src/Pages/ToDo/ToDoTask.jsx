import { AiFillDelete } from "react-icons/ai";

const ToDoTask = ({ taskinfo,handleDelete }) => {
  const { projectTitle, task, shortDescription, dueDate, _id } = taskinfo;


  return (
    <div className="mt-10 bg-emerald-100 py-6 px-6 rounded-xl  shadow-xl shadow-black cursor-pointer flex items-center justify-between">
      <div>
        <h1 className="font-bold text-2xl">Task: {task}</h1>
        <h2 className="text-xl font-semibold my-1">Project: {projectTitle}</h2>
        <p className="font-bold text-xl mb-1">
          Description:{" "}
          <span className="font-medium text-lg">{shortDescription}</span>
        </p>
        <h2 className="text-2xl font-bold text-red-700">
          Due Date: <span className="text-xl text-black">{dueDate}</span>
        </h2>
      </div>

      <button
        onClick={()=>handleDelete(_id)}
        className="btn btn-accent text-red-600 font-bold text-3xl"
      >
        <AiFillDelete />
      </button>
    </div>
  );
};

export default ToDoTask;

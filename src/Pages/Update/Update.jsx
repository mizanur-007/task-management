import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const data = useLoaderData();
  const {
    _id,
    projectTitle,
    task,
    shortDescription,
    detailInformation,
    dueDate
  } = data;

  const handleUpdate = (event)=>{
    event.preventDefault();
    const form = event.target;
    const task = form.task.value;
    const projectTitle = form.project.value;
    const shortDescription = form.description.value;
    const detailInformation = form.information.value;
    const dueDate = form.date.value;

    const updatedData = {
        projectTitle,
    task,
    shortDescription,
    detailInformation,
    dueDate

    }
    axios.put(`https://task-management-server-qrslhdxt7-md-mizanur-rahmans-projects.vercel.app/api/v1/update/${_id}`,updatedData,{withCredentials:true})
    .then(()=>{
      toast.success("Updated Successfully",{
        autoClose: 2000
      });
    })
    .catch(()=>{
      toast.error("Update unsuccessful",{
        autoClose: 2000
      });
    })

  }
  return (
    <div>
      <div
        className="hero h-[450px] rounded-xl mt-8"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/RPBQ9Tg/kelly-sikkema-1-RZL8-BGBM-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
        <div className=" text-center w-500px">
            <h1 className="text-3xl text-emerald-400 font-bold mb-8">Update</h1>
          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="flex gap-6">
            <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" defaultValue={task} type="text" name="task" />
            <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" defaultValue={projectTitle} name="project" type="text" />
            </div>
            <div className="flex gap-6">
            <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" defaultValue={shortDescription} name="description" type="text" />
            <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" defaultValue={detailInformation} name="information" type="text" />
            </div>
            <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" defaultValue={dueDate} name="date" type="text" />
            <br />
            <button type="submit" className="btn bg-emerald-600 btn-block text-white text-2xl font-bold">Update</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;

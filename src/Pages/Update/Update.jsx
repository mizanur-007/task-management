import React from "react";
import { useLoaderData } from "react-router-dom";

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
            <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" defaultValue={task} type="text" />
            <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" defaultValue={projectTitle} type="text" />
            </div>
            <div className="flex gap-6">
            <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" defaultValue={shortDescription} type="text" />
            <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" defaultValue={detailInformation} type="text" />
            </div>
            <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" defaultValue={dueDate} type="text" />
            <br />
            <button type="submit" className="btn bg-emerald-600 btn-block">Update</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;

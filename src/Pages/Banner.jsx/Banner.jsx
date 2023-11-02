import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-[400px] rounded-xl mt-8" style={{backgroundImage: 'url(https://thumbs.dreamstime.com/z/worker-tracking-his-tasks-kanban-board-using-task-control-agile-development-methodology-man-attaching-sticky-note-to-155290187.jpg?w=992)'}}>
  <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
  <div className=" text-center w-500px">
    <form>
        <input className='w-80 py-[12px] rounded-l-lg pl-2' type="text" />
        <button className='btn btn-error text-white font-bold rounded-none rounded-r-lg pt-[2px]'>Search</button>
    </form>
  </div>
</div>
        </div>
    );
};

export default Banner;
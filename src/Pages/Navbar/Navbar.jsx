import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
  const {logOut} = useContext(AuthContext);
  const handleLogout = ()=>{
    logOut()
    .then(()=>{
      console.log('signout Success')
    })
    .catch((error)=>{
      console.log("error oss", error.message)
    })

  }
  const {user} = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">TaskSwift</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
<div className='space-x-6'>
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
  Dashboard
</NavLink>
          <NavLink
  to="/tasks"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
  Tasks
</NavLink>
          <NavLink
  to="/projects"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
  Projects
</NavLink>
{
  !user && <Link to={'/login'}><button className='btn btn-outline btn-accent'>LogIn</button></Link>
}
</div>
          </div>
{
  user &&           <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img src={user?.photoURL} />
    </div>
  </label>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <Link><button className='btn btn-outline btn-accent'>{user?.displayName}</button></Link>
    </li>
    <li><button onClick={handleLogout} className='btn btn-secondary text-white text-center font-bold items-center text-xl pt-2'>LogOut</button></li>
  </ul>
</div>
}
        </div>
      </div>
    );
};

export default Navbar;
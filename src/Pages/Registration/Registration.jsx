import { useContext, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { HiCamera } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import registerlogo from '../../../public/registrationAnimation.json'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
  
  const {s} = useContext(AuthContext);
    const [check, setCheck]=useState(false);
    const handleRegistration = (event)=>{
        event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    const name = form.name.value;
    console.log(email,password,name,image)
        
    }
    return (
        <div className="flex flex-row-reverse items-center justify-between gap-52  bg-[#dbf5fb] px-5 rounded-xl pb-11 pt-8">
        <div className="flex-1 ml-16">
          <h1 className="text-3xl text-white text-center bg-gradient-to-r from-[#11bfef] via-[#3cecfc] to-[#a7e4f4] mb-7 py-9 rounded-3xl font-bold w-80">
            Registration
          </h1>
          <form onSubmit={handleRegistration}>
            <div className="form-control mb-6 w-80">
              <label className="input-group">
                <span className="text-3xl bg-[#bee8f6]">
                  <RxAvatar />
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="input input-bordered w-80 bg-[#bee8f6]"
                />
              </label>
            </div>
            <div className="form-control mb-6 w-80">
              <label className="input-group">
                <span className="text-3xl bg-[#bee8f6]">
                  <HiCamera />
                </span>
                <input
                  type="text"
                  name="image"
                  required
                  placeholder="Image URL"
                  className="input input-bordered w-80 bg-[#bee8f6]"
                />
              </label>
            </div>
            <div className="form-control mb-6 w-80">
              <label className="input-group">
                <span className="text-3xl bg-[#bee8f6]">
                  <AiOutlineMail />
                </span>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="Email"
                  className="input input-bordered w-80 bg-[#bee8f6]"
                />
              </label>
            </div>
            <div className="form-control w-80">
              <label className="input-group">
                <span className="text-3xl bg-[#bee8f6]">
                  <BsKey />
                </span>
                <input
                  type={`${check? 'text':'password'}`}
                  name="password"
                  required
                  placeholder="Password"
                  className="input input-bordered w-80 bg-[#bee8f6]"
                />
              </label>
            </div>
            <div className="form-control flex flex-row items-center mt-4 gap-3">
                <input type="checkbox" name="checkbox" className="checkbox" onChange={(e)=>{setCheck(e.target.checked)}} required/>
                <span className="block">Accept our terms & policies</span>
            </div>
            <button type="submit" className="btn btn-block bg-gradient-to-br from-[#11bfef] to-[#8ff7d1] text-xl font-bold text-white w-80 mt-5">
              Register
            </button>
            <p className="mt-3">
              Already Have An Account?{" "}
              <Link className="text-[#11bfef] font-semibold" to={"/login"}>
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
  
        <div className="max-h-[80vh] flex-1">
          <Lottie animationData={registerlogo}></Lottie>
        </div>
      </div>
    );
};

export default Registration;
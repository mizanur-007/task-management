import Lottie from "lottie-react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import loginLogo from "../../../public/loginAnimation.json"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-evenly">
      <div className="flex-1">
        <h1 className="text-3xl text-center bg-gradient-to-r from-purple-500 to-pink-500 mb-7 py-9 rounded-3xl font-bold w-80">Login</h1>
<form >
<div className="form-control mb-6 w-80">
          <label className="input-group">
            <span className="text-2xl"><AiOutlineMail/></span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered w-80"
            />
          </label>
        </div>
        <div className="form-control w-80">
          <label className="input-group">
            <span className="text-2xl"><BsKey/></span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered w-80"
            />
          </label>
        </div>
        <button className="btn btn-block bg-pink-500 text-xl font-bold text-white w-80 mt-6">Login</button>
        <p className="mt-3">Dont Have An Account? <Link className="text-pink-600 font-semibold" to={'/register'}>Register</Link> </p>
</form>
      </div>

      <div className="max-h-[80vh] flex-1">
        <Lottie className="h-[80vh]" animationData={loginLogo}></Lottie>
      </div>
    </div>
  );
};

export default Login;

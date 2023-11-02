import Lottie from "lottie-react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import loginLogo from "../../../public/loginAnimation.json";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [check, setCheck]=useState(false);

  const {signIn, googleLogin} = useContext(AuthContext);

  //email password login
  const handleLogin = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(()=>{
      alert("logged in")
    })
    .catch((error)=>{
      alert(error.message)
    })
  }

  //google login
  const handleGoogleLogin = ()=>{
    googleLogin()
    .then(()=>{
      alert("success")
    })
    .catch(()=>{
      alert('error')
    })
  }
  return (
    <div className="flex items-center justify-evenly  bg-[#F0F6FA] px-5 rounded-xl pb-11 pt-10">
      <div className="flex-1">
        <h1 className="text-3xl text-white text-center bg-gradient-to-r from-purple-500 to-pink-500 mb-7 py-9 rounded-3xl font-bold w-80">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="form-control mb-6 w-80">
            <label className="input-group">
              <span className="text-3xl bg-[#dceaf3]">
                <AiOutlineMail />
              </span>
              <input
                type="text"
                name="email"
                required
                placeholder="Email"
                className="input input-bordered w-80 bg-[#dceaf3]"
              />
            </label>
          </div>
          <div className="form-control w-80">
            <label className="input-group">
              <span className="text-3xl bg-[#dceaf3]">
                <BsKey />
              </span>
              <input
                type={`${check? 'text':'password'}`}
                name="password"
                required
                placeholder="Password"
                className="input input-bordered w-80 bg-[#dceaf3]"
              />
            </label>
          </div>
          <div className="form-control flex flex-row items-center mt-4 gap-3">
              <input type="checkbox" name="checkbox" className="checkbox" onChange={(e)=>{setCheck(e.target.checked)}} />
              <span className="block">Show Password</span>
          </div>
          <button type="submit" className="btn btn-block bg-pink-500 text-xl font-bold text-white w-80 mt-5">
            Login
          </button>
          <p className="mt-3">
            Don&apos;t Have An Account?{" "}
            <Link className="text-pink-600 font-semibold" to={"/register"}>
              Register
            </Link>{" "}
          </p>
        </form>
        <div className="flex flex-col items-center ml-20 lg:flex-row">
  <div className="grid place-items-center text-3xl"><button onClick={handleGoogleLogin}><FcGoogle/></button></div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid place-items-center text-3xl"><BsGithub/></div>
</div>
      </div>

      <div className="max-h-[80vh] flex-1">
        <Lottie className="h-[80vh]" animationData={loginLogo}></Lottie>
      </div>
    </div>
  );
};

export default Login;

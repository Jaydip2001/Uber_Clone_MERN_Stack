import React from "react";
import { Link } from "react-router-dom";


function UserLogin() {
  return (
    <div className="p-7 flex flex-col  justify-between h-screen bg-gray-100">
    <div className="">
        <img  className="w-16 mb-10"src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form action="">
        <h3 className="text-xl mb-2">What is Your Email Number</h3>
        <input
          required
          type="email"
          name=""
          id=""
          placeholder="email@example.com"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <h3 className=" text-xl mb-2 ">Enter password</h3>
        <input
          required
          type="password"
          name=""
          id=""
          placeholder="********"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <button  className="mb-4 p-2 bg-black text-white text-xl  border border-gray-300 rounded w-full"
        type="submit">Login</button>
    <div className="text-center">
      <p className="text-gray-500">Don't have an account? <Link to="/signup" className="text-blue-500" >   Sign Up  </Link> </p>
    </div>
      </form>
    </div>
    <div className="">

     <button  className="mb-4 p-2 bg-[#fab92d] text-black text-lg font-semibold border border-gray-300 rounded w-full"
        type="submit">Sign in As Capttain </button>
    </div>
    </div>
  );
}

export default UserLogin;

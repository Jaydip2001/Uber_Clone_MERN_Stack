import React, { useState } from "react";
import { Link } from "react-router-dom";

// UserLogin component for user login functionality

function UserLogin() {
  const [email, emailfirst] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setusetData] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here

   setusetData({
      email: email,
      password: password,
    });
    console.log(userData);
    setPassword("");
    emailfirst(""); 
  };

  return (
    <div className="p-7 flex flex-col  justify-between h-screen bg-gray-100">
      <div className="">
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          action=""
        >
          <h3 className="text-xl mb-2">What is Your Email Number</h3>
          <input
            required
            value={email}
            onChange={(e) => emailfirst(e.target.value)}
            type="email"
            name=""
            id=""
            placeholder="email@example.com"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <h3 className=" text-xl mb-2 ">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            id=""
            placeholder="********"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <button
            className="mb-4 p-2 bg-black text-white text-xl  border border-gray-300 rounded w-full"
            type="submit"
          >
            Login
          </button>
          <div className="text-center">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                {" "}
                Sign Up{" "}
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
      <div className="">
        <Link
        to={"/captain-login"}
          className="mb-5 p-2 bg-[#fab92d] flex items-center justify-center text-black text-lg font-semibold border border-gray-300 rounded w-full"
          type="submit"
        >
          Sign in As Capttain{" "}
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;

import React, { useState } from "react";
import { Link } from "react-router-dom";

// UserLogin component for user login functionality

function CaptainLogin() {
  const [email, emailfirst] = useState("");
  const [password, setPassword] = useState("");
  const [CaptainData, setuCapatain] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here

    setuCapatain ({
      email: email,
      password: password,
    });
    console.log(CaptainData);
    setPassword("");
    emailfirst(""); 
  };

  return (
    <div className="p-7 flex flex-col  justify-between h-screen bg-gray-100">
      <div className="">
        <img
          className="w-16 mb-10"
          src="https://static.vecteezy.com/system/resources/previews/027/127/594/non_2x/uber-logo-uber-icon-transparent-free-png.png"
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
              <Link to="/captain-signup" className="text-blue-500">
                {" "}
               Captain Sign-Up{" "}
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
      <div className="">
        <Link
        to={"/login"}
          className="mb-5 p-2 bg-[#fab92d] flex items-center justify-center text-black text-lg font-semibold border border-gray-300 rounded w-full"
          type="submit"
        >
          Sign in As User{" "}
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;

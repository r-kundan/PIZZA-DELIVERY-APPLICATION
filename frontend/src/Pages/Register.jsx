import React from "react";
import { Link } from "react-router-dom";


function Register() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat m-6 rounded-3xl p-4 md:p-16" style={{ backgroundImage: "url('/formbg.jpeg')" }}>
      <div className="bg-base backdrop-blur-sm relative z-10 p-4 md:p-10 rounded-3xl">
        <div className="flex-2 flex flex-col items-center justify-center">
          <form className="grid w-full grid-cols-1 md:grid-cols-2 justify-center md:px-5 gap-5 md:py-10 p-2 border-b-2">
            <div className="flex">
              <input
                type="text"
                className=" w-full p-2 text-white font-bold outline-none py-3 px-3 rounded-lg bg-input"
                required
                placeholder="Your Name"
                name="name"
              />
            </div>
            <div className="flex">
              <input
                type="email"
                className=" w-full p-2 text-white font-bold outline-none py-3 px-3 rounded-lg bg-input"
                required
                placeholder="Your Email ID"
                name="email"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                className=" w-full p-2 text-white font-bold outline-none py-3 px-3 rounded-lg bg-input"
                required
                placeholder="Your full address with pin code"
                name="address"
              />
            </div>
            <input
              type="text"
              className=" w-full p-2 text-white font-bold outline-none py-3 px-3 rounded-lg bg-input"
              placeholder="Contact Number"
              name="contact"
            />
             <div className="flex">
            <input
              type="password"
              className=" w-full p-2 text-white font-bold outline-none py-3 px-3 rounded-lg bg-input"
              required
              placeholder="Enter your password"
              name="password"
            />
          </div>
            <div className="flex w-full">
              <button className="bg-primary w-40 hover:bg-orange-500/80 hover:scale-95 duration-300 transition-all rounded-md px-5 py-3 text-white font-bold">
                Register
              </button>
            </div>
          </form>
          <div className="flex flex-col ">
          <h1  className=" w-full p-2 text-white font-bold outline-none py-3 px-3 rounded-lg ">New Here ?</h1>
          <Link to="/login">
          <button className="bg-primary w-40 hover:bg-orange-500/80 hover:scale-95 duration-300 transition-all rounded-md px-5 py-3 text-white font-bold">
                Log In
              </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

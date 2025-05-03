import React from "react";
import { Link } from "react-router";

const Registation = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body space-y-5">
        <h2 className="text-center text-2xl font-bold">Registation page</h2>
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <div>
          <p>
            Already have an account{" "}
            <Link
              className="text-red-700 underline font-bold"
              to={"/auth/login"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registation;

import React from "react";
import { NavLink } from "react-router";
import User from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div></div>
      <div className="nav flex gap-5 text-accent font-bold">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img src={User} alt="" />
        <button className="btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;

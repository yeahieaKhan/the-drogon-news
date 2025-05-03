import React from "react";
import { Outlet } from "react-router";
import Navbar from "../layout/Navbar";
import Login from "./Login";
import Registation from "./Registation";

const AuthLayout = () => {
  return (
    <div className="md:w-10/12 mx-auto bg-base-10 min-h-screen ">
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet>
        <Login></Login>
        <Registation></Registation>
      </Outlet>
    </div>
  );
};

export default AuthLayout;

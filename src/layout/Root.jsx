import React from "react";
import { Outlet } from "react-router";
import Home from "./Home";
import Header from "./Header";
import Leatest from "../components/Leatest/Leatest";
import Navbar from "./Navbar";
import LeftAside from "../pages/LeftAside";
import RightAside from "../pages/RightAside";

const Root = () => {
  return (
    <div className="w-10/12 mx-auto">
      <header>
        <Header></Header>
        <Leatest></Leatest>
        <Navbar></Navbar>
      </header>
      <main className="md:w-11/12 mx-auto mt-20 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet>
            <Home></Home>
          </Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;

import { Link, NavLink } from "react-router";
import UserIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className="flex justify-between items-center mt-10">
      <div></div>
      <div className="nav flex gap-5 text-accent font-bold">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img src={UserIcon} alt="" />
        <button className="btn btn-primary px-10">
          <Link to={"/auth/login"}>Login</Link>
          {user && user.email}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

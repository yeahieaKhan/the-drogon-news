import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // updates the state every second
    }, 1000);

    return () => clearInterval(interval); // clean up interval when component unmounts
  }, []);
  return (
    <div>
      <div className="text-center flex items-center flex-col justify-center mt-7">
        <img src={logo} alt="" />
        <h2 className="mt-2 text-accent">Journalism Without Fear or Favour</h2>
        <p>{format(new Date(), "EEEE, MM MMMM, yyyy")}</p>
        <p className="font-bold text-lg">{format(time, "KK : mm : ss  aa")}</p>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Marquee from "react-fast-marquee";

const Leatest = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="bg-secondary text-white px-3 py-2">Leatest</p>
      <Marquee pauseOnHover>
        {" "}
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          labore quisquam minima assumenda blanditiis, rem ut minus vel animi
          iste repudiandae necessitatibus? Numquam odit dolorum velit nisi est
          voluptate cumque, eligendi, nostrum omnis quam nemo, doloribus ipsum a
          minus ad earum. Magni nisi voluptas quo, molestiae eaque quisquam.
          Consequuntur, suscipit?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          labore quisquam minima assumenda blanditiis, rem ut minus vel animi
          iste repudiandae necessitatibus? Numquam odit dolorum velit nisi est
          voluptate cumque, eligendi, nostrum omnis quam nemo, doloribus ipsum a
          minus ad earum. Magni nisi voluptas quo, molestiae eaque quisquam.
          Consequuntur, suscipit?
        </p>
      </Marquee>
    </div>
  );
};

export default Leatest;

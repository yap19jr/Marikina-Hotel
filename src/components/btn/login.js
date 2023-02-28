import React from "react";
import "./login.css";

const BtnLogin1 = (props) => {
  return (
    <button className="btn-color text-white text-lg font-[Poppins] py-2 px-6 rounded md:ml-8 bg-hover duration-500">
      {props.children}
    </button>
  );
};

export default BtnLogin1;

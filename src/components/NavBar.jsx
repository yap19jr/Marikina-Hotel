import React, { useState } from "react";
import Logo from "./img/marikina-hotel.png";
import "./index.css";
import Button from "./btn/login";
import { Link } from "react-router-dom";

const NavBar = () => {
  let [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="w-full fixed z-40 top-0 left-0">
        <div className="container-fluid flex flex-wrap mx-auto bg-green py-4 md:px-10 px-7 justify-between shadow-md">
          <div className="flex items-center cursor-pointer font-bold ">
            <span className=" mr-1 pt-2  text-xl">
              <img src={Logo} width={100} alt="" />
            </span>
            Marikina Hotel
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-xll absolute right-8 top-8 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 absolute font-[Poppins] bg-green md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
              open ? "top" : "top-[-490px]"
            }`}
          >
            <li className="md:ml-1 text-lg md:my-0 my-7">
              <Link
                to="/"
                className="text-gray-800 hover:text-gray-400 duration-500 text-li no-underline"
              >
                Home
              </Link>
            </li>
            <li className="md:ml-8 text-lg md:my-0 my-7">
              <Link
                to="/rooms"
                className="text-gray-800 hover:text-gray-400 duration-500 text-li no-underline"
              >
                Rooms
              </Link>
            </li>
            <li className="md:ml-8 text-lg md:my-0 my-7">
              <Link to="/meeting&events"
                className="text-gray-800 hover:text-gray-400 duration-500 text-li no-underline"
              >
                Meeting & Events
              </Link>
            </li>
            <li className="md:ml-8 text-lg md:my-0 my-7">
              <Link
                to="/discover"
                className="text-gray-800 hover:text-gray-400 duration-500 text-li no-underline"
              >
                Discover
              </Link>
            </li>
            <li className="md:ml-8 text-lg md:my-0 my-7">
              <Link
                to="./gallery"
                className="text-gray-800 hover:text-gray-400 duration-500 text-li no-underline"
              >
                Gallery
              </Link>
            </li>
            <li className="md:ml-8 text-lg md:my-0 my-7">
              <Link
                to="./services"
                className="text-gray-800 hover:text-gray-400 duration-500 text-li no-underline"
              >
                Services
              </Link>
            </li>
            <li className="md:ml-8 text-lg md:my-0 my-7">
              <Link
                to="./contact"
                className="text-gray-800 hover:text-gray-400 duration-500 text-li no-underline"
              >
                Contact
              </Link>
            </li>
            <li className="md:ml-8 text-lg md:my-0 my-7">
              <Link to="./btn/login">
                <button className="btn-color text-white text-lg  py-2 px-6 rounded md:ml-8 btn-hover duration-500">
                  Book Now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

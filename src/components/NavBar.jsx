import React, { useState } from "react";
import Logo from "./img/marikina-hotel.png";
import "./index.css";
import { Link } from "react-router-dom";
import BookNow from "./Buttons/btnBookNow";

const NavBar = () => {
  let [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="w-full z-40 top-0 left-0 sticky-nav">
        <div className="container-fluid flex flex-wrap bg-green py-7 lg:px-10 px-7 justify-between xl:justify-between shadow-md">
          <div className="flex items-center cursor-pointer font-bold ">
            <span className="mr-1 pt-2 ">
            <Link
                to="/"
                className=" text-gray-800 hover:text-gray-800 duration-500 no-underline"
              >
             
              <img
                src={Logo}
                className="h-10 inline"
              />
              Marikina Hotel
  
              </Link>
            </span>
        
            <span
              onClick={() => setOpen(!open)}
              className="text-xl absolute right-8 cursor-pointer lg:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </span>
          </div>

          <ul
            className={`lg:flex lg:items-center lg:pb-0 max-lg:pt-14  absolute bg-green lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-5 transition-all duration-500 ease-in ${
              open ? "top" : "top-[-490px]"
            }`}
          >
            <li className="lg:ml-1 lg:my-0 my-7 ">
              <Link
                to="/"
                className="text-gray-800 hover:text-white hover:bg-stone-800 duration-500 rounded p-1 no-underline"
              >
                Home
              </Link>
            </li>
            <li className="lg:ml-8 lg:my-0 my-7">
              <Link
                to="/rooms"
                className="text-gray-800 hover:text-white hover:bg-stone-800 duration-500 rounded p-1 no-underline"
              >
                Rooms
              </Link>
            </li>
            <li className="lg:ml-8 lg:my-0 my-7">
              <Link
                to="/meeting&events"
                className="text-gray-800 hover:text-white hover:bg-stone-800 duration-500 rounded p-1  no-underline"
              >
                Meeting & Events
              </Link>
            </li>
            <li className="lg:ml-8 lg:my-0 my-7">
              <Link
                to="/discover"
                className="text-gray-800 hover:text-white hover:bg-stone-800 duration-500 rounded  p-1  no-underline"
              >
                Discover
              </Link>
            </li>
            <li className="lg:ml-8 lg:my-0 my-7">
              <Link
                to="./gallery"
                className="text-gray-800 hover:text-white hover:bg-stone-800 duration-500 rounded p-1  no-underline"
              >
                Gallery
              </Link>
            </li>
            <li className="lg:ml-8 lg:my-0 my-7">
              <Link
                to="./services"
                className="text-gray-800 hover:text-white hover:bg-stone-800 duration-500 rounded p-1  no-underline"
              >
                Services
              </Link>
            </li>
            <li className="lg:ml-8 lg:my-0 my-7">
              <Link
                to="./contactUs"
                className="text-gray-800 hover:text-white hover:bg-stone-800 duration-500 rounded p-1  no-underline"
              >
                Contact
              </Link>
            </li>
            <li className="lg:ml-8 lg:my-0 my-7">
              <button class="rounded-lg px-5 py-2.5 bg-zinc-800 text-white hover:bg-stone-600">
                <BookNow />
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

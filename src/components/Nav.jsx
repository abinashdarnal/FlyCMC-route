import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
function Nav() {
  const [nav, setnav] = useState(false);
  const handleNav = () => {
    setnav(!nav);
  };
  return (
    <>
      <div className="bg-[#428BC7]  border-b-[1px] border-[#5A9ACE]">
        <div className=" p-4 flex items-center justify-between max-w-[1000px] mx-[auto] ">
          <div className="w-[150px] ">
            <img src={logo} alt="" />
          </div>
          <div className="block md:hidden">
            {nav ? (
              <div>
                <div
                  className="bg-[#68A2D2] text-white p-4 cursor-pointer"
                  onClick={handleNav}
                >
                  <FaTimes />
                </div>
                <div className=" absolute z-[99] left-0 bg-white w-full  top-[80px] ">
                  <div>
                    <Link to="/">
                      <div
                        className="px-3 py-4 font-[700] hover:bg-slate-400 hover:text-white cursor-pointer"
                        onClick={handleNav}
                      >
                        Home
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/blog">
                      <div
                        className="px-3 py-4 font-[700] hover:bg-slate-400 hover:text-white cursor-pointer"
                        onClick={handleNav}
                      >
                        Blog
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/page error">
                      <div
                        className="px-3 py-4 font-[700] hover:bg-slate-400 hover:text-white cursor-pointer"
                        onClick={handleNav}
                      >
                        404 page
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div
                  className="bg-[#68A2D2] text-white p-4 cursor-pointer"
                  onClick={handleNav}
                >
                  <FaBars />
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:flex text-white">
            <div className="px-3 py-4 font-[700] cursor-pointer">
              <Link to="/">
                <span>Home</span>
              </Link>
            </div>
            <div className="px-3 py-4 font-[700] cursor-pointer">
              <Link to="/blog">
                <span>Blog</span>
              </Link>
            </div>
            <div className="px-3 py-4 font-[700] cursor-pointer">
              <Link to="/page error">
                <span>404 page</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;

import React from "react";
import Footer_logo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { BsArrowUpShort } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="bg-[#333C45] text-white md:flex w-full">
        <div className="text-6xl flex justify-center py-8 hover:bg-[#3b5998] transition-all ease-in-out duration-300 border-b-[1px] border-slate-500 hover:border-[#3b5998] md:w-1/4">
          <FaFacebookF className="" />
        </div>
        <div className="text-6xl flex justify-center py-8 hover:bg-[#bf3939] transition-all ease-in-out duration-300 border-b-[1px] border-slate-500 hover:border-[#bf3939] md:w-1/4 ">
          <FaGooglePlusG />
        </div>
        <div className="text-6xl flex justify-center py-8 hover:bg-[#c94d06] transition-all ease-in-out duration-300 border-b-[1px] border-slate-500 hover:border-[#c94d06] md:w-1/4">
          <FaInstagram />
        </div>
        <div className="text-6xl flex justify-center py-8 hover:bg-[#d40e0e] transition-all ease-in-out duration-300 border-b-[1px] border-slate-500 hover:border-[#d40e0e] md:w-1/4">
          <FaYoutube />
        </div>
      </div>
      <div className="bg-white ">
        <div className="flex items-center p-3 gap-3">
          <div className="w-[90px]">
            <img src={Footer_logo} alt="" />
          </div>
          <div>
            <h1 className="">
              Fly By&nbsp;
              <span className="font-semibold">
                <Link>Abinash Darnal</Link>
              </span>
            </h1>
            <h2>&copy; Copyright by abinash</h2>
          </div>
        </div>
        <div className=" flex justify-start px-3 py-1">
          <div className="bg-white  border-[6px] p-1 text-3xl rounded-full">
            <Link>
              <img
                src="https://assets.website-files.com/536835ece0e4c61a1e0002d0/536bda0b5ffc74066fd8c472_up_arrow.svg"
                alt=""
                className="w-[30px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;

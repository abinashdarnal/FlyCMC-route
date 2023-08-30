import React from "react";
import { Link } from "react-router-dom";
import hero_1 from "../assets/hero-1.png";
import hero_2 from "../assets/hero-2.png";
import fixed_img from "../assets/fixed-img.jpg";
import { PiPaintBrushHousehold } from "react-icons/pi";
import { BsRocketTakeoff, BsPhone } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import {
  AiFillExperiment,
  AiOutlineEye,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { TbBrandReactNative } from "react-icons/tb";
import { PiPencilLight, PiGearLight } from "react-icons/pi";
import BlogData from "../components/BlogData";
import Footer from "./../components/Footer";
import Carousel from "../components/Carousel";
import AgencyData from "../components/AgencyData";

// import Nav from "../components/Nav";
function Home() {
  return (
    <>
      <div className="fixed w-full h-full top-0 -z-[1]">
        <img src={fixed_img} alt="" className="w-full h-full object-cover" />
      </div>

      <Carousel />

      <div className="p-8 bg-[#F2F2F2] flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 p-8 gap-10 max-w-[950px]">
          <div className="flex flex-col items-center">
            <div className="text-6xl text-[#4592D2] border-[3px] border-[#4592D2] rounded-full p-6">
              <PiPaintBrushHousehold />
            </div>
            <h2 className="text-[#585858] font-bold text-lg p-2">
              Graphic Design
            </h2>
            <p className="text-[#A9A9A9] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              repellendus, voluptates eum cupiditate corrupti iusto amet quaerat
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-6xl text-[#4592D2] border-[3px] border-[#4592D2] rounded-full p-6">
              <BsRocketTakeoff />
            </div>
            <h2 className="text-[#585858] font-bold text-lg p-2">
              User Experience
            </h2>
            <p className="text-[#A9A9A9] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              repellendus, voluptates eum cupiditate corrupti iusto amet quaerat
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-6xl text-[#4592D2] border-[3px] border-[#4592D2] rounded-full p-6">
              <AiFillExperiment />
            </div>
            <h2 className="text-[#585858] font-bold text-lg p-2">Technology</h2>
            <p className="text-[#A9A9A9] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              repellendus, voluptates eum cupiditate corrupti iusto amet quaerat
            </p>
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="uppercase text-[#4592D2] border-[3px] border-[#4592D2] px-5 py-2 font-bold rounded-lg hover:text-white hover:bg-[#4592D2] transition-all ease-in-out duration-300">
            intersted? see more
          </button>
        </div>
      </div>

      <div className=" bg-white ">
        <div className="flex justify-center font-semibold text-xl md:text-2xl tracking-widest text-[Raleway] p-10">
          <h1 className="uppercase">we are fly a winning agency</h1>
        </div>
        <div className="">
          {AgencyData.map((items, id) => (
            <div key={id} className="  w-full h-full relative ">
              <div className="card z-[2] absolute   text-white bg-black/20 flex flex-col justify-center items-center w-full h-full transition-all ease-in-out ">
                <h1 className="text-xl font-semibold">{items.title}</h1>
                <p className="text-sm font-[300]">{items.subtitle}</p>
              </div>
              <img src={items.img} alt="" className=" " />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F2F2F2] md:flex justify-center">
        <div className=" p-5 flex flex-col md:flex-row w-full gap-4 lg:px-[120px] lg:py-[140px] max-w-[1200px]">
          <div className="w-full lg:w-[50%]">
            <div className="my-3 py-2 flex lg:justify-center">
              <h1 className="uppercase text-xl font-semibold tracking-widest md:text-2xl py-2">
                what you are waiting for?
              </h1>
            </div>
            <div className="relative pb-14">
              <p className="text-[#B0B0B0] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <div className="mt-7">
                <button className="uppercase text-[#428BC7] border-[3px] border-[#428BC7] font-semibold text-lg px-6 py-2 rounded-md hover:bg-[#428bc7] hover:text-white transition-all ease-in-out duration-300 ">
                  buy fly now
                </button>
              </div>
              <div className="absolute bottom-0 left-[170px]  hidden sm:block">
                <img src="src/assets/arrow.png" alt="" className="w-[40px] " />
                <h1 className="pl-12 justAnotherHand text-xl text-[#999999]">
                  Click this button :)
                </h1>
              </div>
            </div>
          </div>
          <div className="pt-4 w-full lg:w-[50%]">
            <img src={hero_2} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-[#428BC7] flex justify-center py-9">
        <h1 className="text-[#91BFE6] text-xl lg:text-2xl">
          Stop blending in with the rest of the crowd and start leaving your
          mark on the web.
        </h1>
      </div>

      <div
        className="p-6 md:px-10
      xl:px-[14%] pb-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 bg-white"
      >
        <div className="flex flex-col gap-2">
          <div className="text-6xl  text-[#DDDDDD]">
            <PiPencilLight />
          </div>
          <h2 className="text-[#5F5F5F] font-semibold text-xl">
            Pixel Perfect Design
          </h2>
          <p className="text-[#A7A7A7]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-6xl  text-[#DDDDDD]">
            <AiOutlineEye />
          </div>
          <h2 className="text-[#5F5F5F] font-semibold text-xl">Retina Ready</h2>
          <p className="text-[#A7A7A7]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-6xl  text-[#DDDDDD]">
            <PiGearLight />
          </div>
          <h2 className="text-[#5F5F5F] font-semibold text-xl">
            Clean Modern Code
          </h2>
          <p className="text-[#A7A7A7]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-6xl  text-[#DDDDDD]">
            <BsPhone />
          </div>
          <h2 className="text-[#5F5F5F] font-semibold text-xl">
            Responsive Design
          </h2>
          <p className="text-[#A7A7A7]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-6xl  text-[#DDDDDD]">
            <TbBrandReactNative />
          </div>
          <h2 className="text-[#5F5F5F] font-semibold text-xl">
            Loaded With Power
          </h2>
          <p className="text-[#A7A7A7]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-6xl  text-[#DDDDDD]">
            <BiBell />
          </div>
          <h2 className="text-[#5F5F5F] font-semibold text-xl">
            Completely Customizable
          </h2>
          <p className="text-[#A7A7A7]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius.
          </p>
        </div>
      </div>

      <div className="p-8 bg-black/40">
        <div className="p-5 flex justify-center text-white mb-10">
          <h1 className="text-2xl font-semibold uppercase tracking-widest">
            fly fun facts
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 xl:px-[14%] py-20">
          {/* <div className="flex justify-center ">
            <div className="bg-white  rounded-full  flex flex-col justify-center items-center gap-5 w-[200px] h-[200px]">
              <h1 className=" text-7xl font-bold ">569</h1>
              <p className="uppercase font-semibold">pizzas oredered</p>
            </div>
          </div> */}
          <div className=" flex justify-center">
            <img
              src="https://assets.website-files.com/561f8a90a803c6404b454a01/561f8a90a803c6404b454a71_skills1.svg"
              alt=""
              className="w-[250px]"
            />
          </div>
          <div className=" flex justify-center">
            <img
              src="https://assets.website-files.com/561f8a90a803c6404b454a01/561f8a90a803c6404b454a72_skills2.svg"
              alt=""
              className="w-[250px]"
            />
          </div>
          <div className=" flex justify-center">
            <img
              src="https://assets.website-files.com/561f8a90a803c6404b454a01/561f8a90a803c6404b454a73_skills3.svg"
              alt=""
              className="w-[250px]"
            />
          </div>
          <div className=" flex justify-center">
            <img
              src="https://assets.website-files.com/561f8a90a803c6404b454a01/561f8a90a803c6404b454a74_skills4.svg"
              alt=""
              className="w-[250px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white pt-10">
        <div className="uppercase flex justify-center font-semibold text-2xl">
          <h2>latest from blog</h2>
        </div>

        <div className=" flex justify-center ">
          <div className="px-4 py-10 flex flex-col md:flex-row gap-8 max-w-[800px]">
            {BlogData.map((items, id) => (
              <div key={id}>
                <div>
                  <Link to={`/blog/${items.title}`}>
                    <img src={items.image} alt="" />
                  </Link>
                </div>
                <div className="text-lg font-semibold hover:text-blue-500">
                  <Link to={`/blog/${items.title}`}>
                    <h1>{items.title}</h1>
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-slate-400 font-semibold">
                  <AiOutlineClockCircle />
                  <span>
                    {items.data.day}
                    {items.data.time}
                  </span>
                </div>
                <div>{items.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;

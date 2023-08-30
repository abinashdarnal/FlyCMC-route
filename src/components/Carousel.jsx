import React, { useState } from "react";

import CarouselData from "./CarouselData";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((current) =>
      current === 0 ? CarouselData.length - 1 : current - 1
    );
  const nextSlide = () =>
    setCurrent((current) =>
      current === CarouselData.length - 1 ? 0 : current + 1
    );
  return (
    <>
      <div className="slider bg-[#428BC7] md:flex items-center justify-center  item md:h-[600px] slider-container relative  ">
        <div
          className="left bg-trasnparent border-[2px] border-white hover:bg-gray-400 text-white hover:text-white p-3 text-2xl rounded-full cursor-pointer hidden lg:block  absolute left-4 "
          onClick={prevSlide}
        >
          <IoIosArrowBack />
        </div>
        <div className="flex items-center transition-transform ease-in-out duration-700">
          {CarouselData.map(
            (items, index) =>
              current === index && (
                <div
                  key={items.title}
                  className={`slide text-white md:flex md:justify-center items-center w-full max-w-[1000px] tramsition-all ease-in-out duration-500 `}
                >
                  <div className="flex flex-col md:items-start items-center px-8  md:w-[70%] w-full h-full py-10">
                    <div>
                      <h2 className="uppercase text-2xl py-5 md:text-left">
                        {items.title}
                      </h2>
                    </div>
                    <div className="text-[#8BB8DD] md:text-left">
                      <h4>{items.subtitle}</h4>
                    </div>
                    <p className="text-[#B8D3EA] text-center py-4 md:text-left">
                      {items.details}
                    </p>
                    <div className="mb-3">
                      <button className="border-[3px] px-4 py-2 rounded-lg">
                        {items.button}
                      </button>
                    </div>
                  </div>
                  <div className="md:w-[50%] w-full h-full py-10 ">
                    <img
                      src={items.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
          )}
        </div>
        <div
          className="right-arrow bg-trasnparent border-[2px] border-white hover:bg-gray-400 text-white hover:text-white p-3 text-2xl rounded-full cursor-pointer hidden lg:block absolute right-4 transition-all ease-in-out duration-300"
          onClick={nextSlide}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
}
export default Carousel;

import React from "react";
import BlogData from "../components/BlogData";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Blog() {
  return (
    <>
      <div className="bg-[#428BC7] flex flex-col items-center py-16 text-white">
        <div className="text-xl font-semibold mb-1">
          <h1 className="uppercase">our blog</h1>
        </div>
        <div className="text-sm font-[300]">
          <p>The Latest News</p>
        </div>
      </div>
      <div className=" flex justify-center">
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
      <Footer />
    </>
  );
}
export default Blog;

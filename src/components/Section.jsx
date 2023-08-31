import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Blog from "../page/Blog";
import PageError from "./../page/PageError";
import BlogDetails from "./../page/BlogDetails";

function Section() {
  return (
    <>
      <div className="w-full h-screen">
        <Routes>
          <Route exact path="/FlyCMC-route" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/page error" element={<PageError />}></Route>
          <Route path="/blog/:title" element={<BlogDetails />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default Section;

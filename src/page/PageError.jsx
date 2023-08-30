import React from "react";
import { Link } from "react-router-dom";
import Footer from "./../components/Footer";
function PageError() {
  return (
    <>
      <div className="bg-[#428BC7] flex flex-col items-center py-14 text-white ">
        <div className="text-xl font-semibold">
          <h1>404 Error page</h1>
        </div>
        <div className="font-thin">The page cannot be found.</div>
      </div>
      <div className="flex flex-col items-center gap-6 my-14">
        <div className="border-[8px] border-[#428BC7] w-[340px] h-[340px] flex flex-col justify-center items-center gap-4 rounded-full">
          <h2 className="text-9xl font-semibold text-[#428BC7]">404</h2>
          <p className="text-[#8f8f8f]">The page cannot be found.</p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex flex-col items-center mb-3 max-w-[800px]">
            <h2 className="sm:text-xl text-lg uppercase tracking-widest font-semibold text-center  my-3">
              PAGE YOU ARE LOOKING IS NOT FOUND
            </h2>
            <p className="text-xs text-center text-[#8f8f8f]">
              The page you are looking for does not exist. It may have been
              moved, or removed altogether. Perhaps you can return back to the
              site’s homepage and see if you can find what you are looking for.
            </p>
          </div>
          <div className="flex justify-center ">
            <Link to="/">
              <button className="uppercase text-[#4592D2] border-[3px] border-[#4592D2] px-5 py-2 font-bold rounded-lg hover:text-white hover:bg-[#4592D2] transition-all ease-in-out duration-300">
                go back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default PageError;

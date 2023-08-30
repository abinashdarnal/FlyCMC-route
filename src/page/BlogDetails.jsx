import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "../components/BlogData";
import Footer from "./../components/Footer";

function BlogDetails() {
  const { title } = useParams();
  const data = BlogData.find((p) => p.title == title);

  if (!data) {
    return <div>data not found.</div>;
  }
  return (
    <>
      <div>
        <div className="bg-[#428BC7] flex flex-col items-center py-14 text-white mb-14">
          <div className="text-xl font-semibold">
            <h1>{data.title}</h1>
          </div>
          <div className="font-thin">
            {data.data.weekday} {data.data.day}
          </div>
        </div>
        <div className=" flex flex-col items-center mb-10">
          <div className="max-w-[700px]">
            <img src={data.image} alt="" />
          </div>
          <div className="max-w-[700px]">
            <h1 className="text-lg font-bold tracking-wider py-3">
              {data.subtitle.subtitle_1}
            </h1>
            <p className="text-sm text-[#999999]">
              {data.subdetails.subdetails_1.p1}
            </p>
            <br />
            <p className="text-sm text-[#999999]">
              {data.subdetails.subdetails_1.p2}
            </p>
            <br />
            <p className="text-sm text-[#999999]">
              {data.subdetails.subdetails_1.p3}
            </p>
          </div>
          <div className="max-w-[700px]">
            <h1 className="text-lg font-bold tracking-wider py-3">
              {data.subtitle.subtitle_2}
            </h1>
            <p className="text-sm text-[#999999]">
              {data.subdetails.subdetails_2.p1}
            </p>
            <br />
            <p className="text-sm text-[#999999]">
              {data.subdetails.subdetails_2.p2}
            </p>
            <br />
            <p className="text-sm text-[#999999]">
              {data.subdetails.subdetails_2.p3}
            </p>
            <br />
            <p className="text-sm text-[#999999]">
              {data.subdetails.subdetails_2.p4}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default BlogDetails;

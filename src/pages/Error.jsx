import React from "react";
import { MdError } from "react-icons/md";
const Error = () => {
  return (
    <div className="h-[100vh] outline-white  bg-richblack-900 text-yellow-100 text-3xl flex justify-center items-center">
      <span>
        <MdError className="text-4xl" />
      </span>{"    "}
      <span>Error 404 Not Found</span>
    </div>
  );
};

export default Error;

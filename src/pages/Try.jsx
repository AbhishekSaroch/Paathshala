import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
const Try = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="bg-white h-[100vh]">
      <label className="text-black">Password</label>
      <input
          required
          type={show ? "text" : "password"}
          name="password"
        //   value={password}
        //   onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        />
        <span
          onClick={() => setshow((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {show ? (
            <div className="text-white">UNShow</div>
          ) : (
            <div className="text-white">Show</div>
          )}
        </span>
    </div>
  );
};

export default Try;

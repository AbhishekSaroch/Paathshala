import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { resetPassword } from "../services/operations/authAPI";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const UpdatePassword = () => {
  const dispatch = useDispatch();
  const location =useLocation()
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOnChange = (e) => {
    // update the form data
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleonsubmit = (e) => {
    e.preventDefault();
    const token=location.pathname.split("/").at(-1);
    dispatch(resetPassword(password,confirmPassword,token));
  };

  return (
    <form className="text-white h-[100vh] flex flex-col justify-center items-center gap-y-4 border-white" onSubmit={handleonsubmit}>
      <div className="text-3xl">Choose new password</div>
      <div className="text-[#AFB2BF] text-[18px] ">
        {" "}
        Almost done. Enter your new password and youre all set.
      </div>
      <div className="flex flex-col">
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            New Password
          </p>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          className="form-style w-full p-1 rounded-sm px-4 text-black"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? (
            <AiFillEye fontSize={24} />
          ) : (
            <AiFillEyeInvisible fontSize={24} />
          )}
        </span>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Confirm Password
          </p>
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          className="form-style w-full p-1 rounded-sm px-4 text-black"
        />
        <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
        {showConfirmPassword ? (
            <AiFillEye fontSize={24} />
          ) : (
            <AiFillEyeInvisible fontSize={24} />
          )}
          </span>
      </div>
      <button
        type="submit"
        className="bg-yellow-50 text-black px-6 py-2 rounded-md"
      >
        Reset Password
      </button>
      <div className="mt-0 flex items-center justify-between">
        <Link to="/login">
          <p className="flex items-center gap-x-2 text-richblack-5">
            <BiArrowBack /> Back To Login
          </p>
        </Link>
      </div>
    </form>
  );
};

export default UpdatePassword;

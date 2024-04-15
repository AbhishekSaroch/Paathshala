import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import CourseInformationForm from "./CourseInformation/CourseInformationForm";
const RenderSteps = () => {
  const { step } = useSelector((state) => state.course);
  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Course Publish",
    },
  ];
  return (
    <>
      <div>
        {steps.map((item,index) => (
          <>
            <div key={index}>
              <div
              key={index}
                className={`${
                  step == item.id
                    ? "bg-yellow-900 border-yellow-50 text-yellow-50 "
                    : "border-richblack-700 bg-richblack-800 text-richblack-300 "
                }`}
              >
                {step > item.id ? <FaCheck /> : item.id}
              </div>
            </div>
            {/* DASHES */}
          </>
          
        ))}
        <div>
              {steps.map((item,index) => (
                <>
                  <div className="text-white"
                  key={index}
                  >
                    <p key={index}>{item.title}</p>
                  </div>
                </>
              ))}
            </div>
      </div>
      {
        step==1 && <CourseInformationForm />
      }
      {/* {
        step==2 && <CourseBuilder />
      }
      {
        step==1 && <CoursePublish />
      } */}
    </>
  );
};

export default RenderSteps;

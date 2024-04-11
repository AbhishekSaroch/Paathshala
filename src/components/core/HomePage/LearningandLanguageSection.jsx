import React from "react";
import HighlightText from "./HighLight";
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import { BsPlusSlashMinus } from "react-icons/bs";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
const LearningandLanguageSection = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex flex-col gap-5">
        <div className="text-4xl font-semibold text-center text-richblack-600">
          Your Swissknife For
          <HighlightText text={"Learning Any Languages"} />
        </div>
        <div className="text-center text-richblack-600 mx-auto text-base mt-3 font-medium w-[50%]">
        Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex flex-row items-center justify-center ">
                <img 
                src={know_your_progress}
                alt="know your progress iamge"
                className="object-contain -mr-32"
                />
                <img 
                src={compare_with_others}
                alt="know your progress iamge"
                className="object-contain"
                />
                <img 
                src={plan_your_lessons}
                alt="know your progress iamge"
                className="object-contain -ml-32"
                />
        </div>
        <div className="mx-auto ">
            <Button active={true} linkto={"/signup"}>
                Learn More
                <FaArrowRight />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default LearningandLanguageSection;

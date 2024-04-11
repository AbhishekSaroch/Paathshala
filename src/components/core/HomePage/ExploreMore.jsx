import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighLight";
const tagNames = [
  "Free",
  "New to Coding",
  "Most Popular",
  "Skill Path",
  "Career Paths",
];
const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tagNames[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag == value);
    setCourses(result[0].courses);
    setCurrentTab(result[0].courses[0].heading);
  };
  return (
    <div className="mt-5">
      <div className="text-4xl font-semibold text-center text-white">
        Unlock The
        <HighlightText text={"Power Of Code"} />
      </div>
      <p className="text-center text-richblue-300 text-sm font-bold">
        Learn To Build Anything you can imagine
      </p>
      <div className="flex  justify-center items-center mt-5 bg-richblack-800 mb-5 border-richblack-100 px-1 py-1">
        {tagNames.map((element, index) => (
          <div
            className={`text-[16px] flex flex-row items-center gap-2
                    ${
                      currentTab == element
                        ? "bg-richblack-900 text-richblue-5 font-medium"
                        : "bg-richblack-600 text-richblack-200"
                    } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-5 py-5
                    `}
                    key={index}
                    onClick={()=>setMyCards(element)}
          >
            {element}
          </div>
        ))}

      </div>
      {/* <div>
        {
            courses.map((elememt,index)=>(
                <CourseCard
                key={index}
                cardData={elememt}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}


                />
            ))
        }
      </div> */}
    </div>
  );
};

export default ExploreMore;

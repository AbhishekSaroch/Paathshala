import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighLight";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import Footer from "../components/common/Footer";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import { BsFillForwardFill } from "react-icons/bs";
import LearningandLanguageSection from "../components/core/HomePage/LearningandLanguageSection";
import instructor from "../assets/Images/Instructor.png";
import Button from "../components/core/HomePage/Button";
import ExploreMore from "../components/core/HomePage/ExploreMore";
const Home = () => {
  return (
    <div>
      {/* Section 1 */}

      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between"
      >
        <Link to={"/signup"}>
          <div className="group mt-16 rounded bg-richblack-800 font-bold text-richblue-200 transition-all duration-200 hover:scale-95">
            <div className="flex items-center gap-x-2 rounded-full px-10 py-[5px] group-hover:bg-richblue-900">
              <p>Become An Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future With
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row gap-x-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book A Demo
          </CTAButton>
        </div>
      </div>
      <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-3 my-12 rounded">
        <video muted loop autoPlay>
          <source src={Banner} typeof="video.mp4" />
        </video>
      </div>

      {/* Code section 1 */}
      <div>
        <CodeBlocks
          position={"lg:flex-row sm:flex-col"}
          heading={
            <div className="text-4xl font-semibold">
              Unlock Your <HighlightText text={"Coding Potential"} />
              with our online courses
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabutton1={{
            btnText: "Try it yourself",
            linkto: "/signup",
            active: true,
          }}
          ctabutton2={{
            btnText: "learn more",
            linkto: "/login",
            active: false,
          }}
          codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
          codeColor={"text-yellow-25"}
        />
        <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className="text-4xl font-semibold">
              Start
              <HighlightText text={" Coding In Seconds"} />
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabutton1={{
            btnText: "TryIt yourself",
            linkto: "/signup",
            active: true,
          }}
          ctabutton2={{
            btnText: "learn more",
            linkto: "/login",
            active: false,
          }}
          codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
          codeColor={"text-yellow-25"}
        />
      </div>
      <ExploreMore />
      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-5">
        <div className="homepage_bg h-[333px]">
          <div className="w-11/12 max-w-maxContent flex items-center  gap-5 mx-auto">
            <div className="flex flex-row gap-7 text-white mx-auto mt-10">
              <CTAButton active linkto={"/signup"}>
                <div className="flex items-center gap-5">
                  Explore Full Catalog
                  <BsFillForwardFill />
                </div>
              </CTAButton>
              <CTAButton linkto={"/login"}>Learn More</CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 max-w-maxContent flex items-center  mx-auto mt-16  gap-5">
          <div className="text-black font-inter text-[36px] font-semibold ">
            Get the skills you need for a{" "}
            <HighlightText text={"job that is in demand."} />
          </div>
          <div>
            <div className="flex flex-col gap-y-5 text-black text-[16px] font-semibold font-inter">
              The modern StudyNotion is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
              <span className="flex w-[20%] justify-start">
                <CTAButton active={true} linkto={"/login"}>
                  Learn More
                </CTAButton>
              </span>
            </div>
          </div>
        </div>

        <TimeLineSection />
        <LearningandLanguageSection />
        <div className="w-11/12 max-w-maxContent mx-auto mt-11 bg-richblack-800">
          <div className="flex flex-row p-10">
            <div>
              <img src={instructor} alt="Instrucot Image" />
            </div>
            <div className="flex flex-col gap-5 justify-center items-center border-white">
              <div className="text-4xl font-semibold">
                Become an <br />
                <HighlightText text={"Instructor"} />
              </div>
              <div className="text-richblack-300 text-center w-[50%]">
                Instructors from around the world teach millions of students on
                StudyNotion. We provide the tools and skills to teach what you
                love.
              </div>
              <div className="mx-auto">
                <Button children={"Start Teaching Today"} active={true} linkto={"/signup"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

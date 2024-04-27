import React from "react";
import { BsFillForwardFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CTAButton from "../components/core/HomePage/Button";
import HighlightText from "../components/core/HomePage/HighLight";
import banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningandLanguageSection";
// import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/Footer"
const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between'>
        <Link to={"/signup"}>
        <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
         <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Become An Instructor</p>
              <BsFillForwardFill />
            </div>
          </div>
        </Link>
        <div className='text-center text-4xl font-semibold mt-7'>
          Empower Your Future With
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row mt-8 gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book A Demo
          </CTAButton>
        </div>
        <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-3 my-12 rounded">
          <video muted loop autoPlay>
            <source src={banner} typeof="video.mp4" />
          </video>
        </div>
        {/* code section1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px]">
          <div className="w-[11/12] max-w-maxContent flex items-center gap-5 mx-auto">
            <div className="flex flex-row mx-auto gap-5 mt-10">
              <CTAButton active linkto={"/signup"}>
                <div className="flex items-center gap-5">
                  Explore Full Catalog
                  <BsFillForwardFill />
                </div>
              </CTAButton>
              <CTAButton linkto={"/signup"}>Learn More</CTAButton>
            </div>
          </div>
        </div>

        <div className="w-[11/12] max-w-maxContent mx-auto flex flex-col justify-between gap-7">
          <div className="flex gap-5 mx-auto mt-[95px]">
            <div className="text-4xl font-semibold w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start w-[45%]">
              <div className="text-[16px]">
                The modern Paathshala is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>
          <TimeLineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-[11/12] mx-auto max-w-maxContent flex flex-col items-center gap-8 justify-between text-white first-letter bg-richblack-900">
        {/* <InstructorSection /> */}
        <h2 className="text-center font-semibold mt-10 text-4xl"></h2>
        {/* review slider code */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

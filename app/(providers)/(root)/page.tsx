import ImageSkillTool from "@/app/_components/ImageSkillTool";
import InterviewBox from "@/app/_components/InterviewBox";
import interviews from "@/infomations/interviewInfo";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

function HomePage() {
  return (
    <main>
      <section className="bg-[url('/images/backgroundIMG.jpg')] w-full h-screen fixed top-0 -z-10 flex flex-col items-center">
        <h2 className="text-[10rem] font-black text-white mt-12">Front-End</h2>
        <h2 className="text-5xl text-black font-medium -translate-y-20">
          프론트엔드 개발자{" "}
          <span className="text-5xl text-black font-black">이강희</span>
          입니다.
        </h2>
        <p className="text-xl text-center -translate-y-10">
          사용자를 생각하는 <span className="text-2xl font-bold">역지사지</span>{" "}
          마인드, <br /> 포기하지 않고{" "}
          <span className="text-2xl font-bold">책임감</span>있게 일하는
          개발자입니다.
        </p>
        <img
          className="absolute bottom-0 h-[55vh]"
          src="/images/doraemon.png"
          alt=""
        />
      </section>
      <section className="bg-[#232323] mt-[100vh] p-10">
        <p className="text-white text-7xl font-black mb-10">About me</p>
        <article className="flex flex-col items-center">
          <div className="w-[22rem] aspect-square mb-4">
            <img className="w-full h-full" src="images/dora.png" alt="" />
          </div>
          <div className="flex gap-x-6 mb-10">
            <span className="text-white text-xs">#역지사지</span>
            <span className="text-white text-xs">#메타인지</span>
            <span className="text-white text-xs">#피드백_수용</span>
            <span className="text-white text-xs">#끊임없는_배움</span>
          </div>
          <button className="flex items-center rounded-full bg-gray-100 px-5 py-3 justify-between text-sm font-semibold cursor-pointer text-gray-800 mb-16 gap-x-8 hover:brightness-90 active:brightness-50">
            팀원 리뷰 보기 <FaChevronRight />
          </button>
          <div className="w-[1000px]">
            <div className="mb-20">
              <h3 className="text-4xl text-white font-bold mb-10">Interview</h3>
              {interviews.map((interview, idx) => (
                <InterviewBox
                  key={idx}
                  question={interview.question}
                  answer={interview.answer}
                />
              ))}
            </div>
            <h3 className="text-4xl text-white font-bold mb-8">
              Skill & Tools
            </h3>
            <div className="flex">
              <div className="mr-5">
                <h4 className="text-2xl text-white font-bold mb-6">FrontEnd</h4>
                <div className="flex gap-x-2">
                  <ImageSkillTool
                    imgUrl="/images/icon_html.svg"
                    imgAlt="icon_html"
                  />
                  <ImageSkillTool
                    imgUrl="/images/icon_css.svg"
                    imgAlt="icon_html"
                  />
                  <ImageSkillTool
                    imgUrl="/images/icon_javascript.svg"
                    imgAlt="icon_html"
                  />
                  <ImageSkillTool
                    imgUrl="/images/icon_react.svg"
                    imgAlt="icon_html"
                  />
                </div>
              </div>
              <div className="mr-5">
                <h4 className="text-2xl text-white font-bold mb-6">Tools</h4>
                <div className="flex gap-x-2">
                  <ImageSkillTool
                    imgUrl="/images/icon_figma.svg"
                    imgAlt="icon_html"
                  />
                  <ImageSkillTool
                    imgUrl="/images/icon_github.svg"
                    imgAlt="icon_html"
                  />
                  <ImageSkillTool
                    imgUrl="/images/icon_notion.svg"
                    imgAlt="icon_html"
                  />
                  <ImageSkillTool
                    imgUrl="/images/icon_discord.svg"
                    imgAlt="icon_html"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default HomePage;

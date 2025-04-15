import React from "react";
import { FaChevronRight } from "react-icons/fa";

function HomePage() {
  return (
    <main>
      <div className="bg-[url('/images/backgroundIMG.jpg')] w-full h-screen fixed top-0 -z-10 flex flex-col items-center">
        <h2 className="text-[10rem] font-black text-white tracking-wider mt-12">
          Front-End
        </h2>
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
      </div>
      <div className="bg-[#232323] mt-[100vh] p-10">
        <section>
          <p className="text-white text-6xl font-black mb-10">About me</p>
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
            <button className="flex items-center w-48 rounded-full bg-gray-100 px-5 py-3 justify-between text-sm font-semibold cursor-pointer text-gray-800 hover:brightness-90">
              팀원 리뷰 보기 <FaChevronRight />
            </button>
          </article>
        </section>
      </div>
    </main>
  );
}

export default HomePage;

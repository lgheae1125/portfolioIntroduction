import React from "react";

function HomePage() {
  return (
    <main>
      <div className="bg-[url('/images/backgroundIMG.jpg')] w-full h-screen fixed top-0 -z-10">
        <h2 className="text-[10rem] text-white font-black">Front-End</h2>
        <h2 className="text-5xl text-black font-medium">
          프론트엔드 개발자{" "}
          <span className="text-5xl text-black font-black">이강희</span>
          입니다.
        </h2>
        <p>
          사용자를 생각하는 역지사지 마인드, <br /> 포기하지 않고 책임감있게
          일하는 개발자입니다.
        </p>
      </div>
      <div className="h-[2000px] bg-black mt-[100vh]"></div>
    </main>
  );
}

export default HomePage;

import React from "react";
interface InterviewBoxProps {
  question: string;
  answer: React.ReactNode;
}

function InterviewBox({ question, answer }: InterviewBoxProps) {
  return (
    <div className="p-6 bg-white/10 rounded-xl mb-8">
      <h4 className="text-2xl text-gray-100 font-bold mb-5">{question}</h4>
      <p className="text-gray-100 tracking-tighter leading-7">{answer}</p>
    </div>
  );
}

export default InterviewBox;

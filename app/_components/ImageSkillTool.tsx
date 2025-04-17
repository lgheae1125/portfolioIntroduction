import React from "react";

interface ImageSkillToolProps {
  imgUrl: string;
  imgAlt: string;
}

function ImageSkillTool({ imgUrl, imgAlt }: ImageSkillToolProps) {
  return (
    <div className="w-18 h-12 flex items-center justify-center bg-black rounded-2xl">
      <img className="scale-[0.8]" src={imgUrl} alt={imgAlt} />
    </div>
  );
}

export default ImageSkillTool;

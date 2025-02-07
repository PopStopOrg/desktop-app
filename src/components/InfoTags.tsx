import React from "react";

interface InfoTagsProps {
  number: number;
  description: string;
  color?: string;
}

const InfoTags: React.FC<InfoTagsProps> = ({
  number,
  description,
  color = "#f0f0f0",
}) => {
  return (
    <div className={`p-1 rounded-md shadow-md text-slate-200 ${color}`}>
      <span className="info-tag-number justify-center mx-1">{number}</span>
      <span className="info-tag-description mx-1">{description}</span>
    </div>
  );
};

export default InfoTags;

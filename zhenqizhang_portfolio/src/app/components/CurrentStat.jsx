"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const StatusSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-white sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center gap-3 relative">
        <span className="text-white text-2xl bg-clip-text">
            Current Status: 
        </span>
        <span className="text-white text-2xl bg-clip-text">
            <TypeAnimation
                sequence={[
                    "Job Hunting, Learning C++",
                    1000,
                ]}
                wrapper="span"
                speed={50}
            />
        </span>
      </div>
    </div>
  );
};

export default StatusSection;
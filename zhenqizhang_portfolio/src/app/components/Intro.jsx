"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";

const IntroSection = () => {
    return (
        <section>
            {/* The common grid column counts are 8, 12, 16, and 25. Here I will use the most common one, col-12 */}
            <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* 8 Col for the Intro */}
                <div className="col-span-8 place-self-center text-center sm:text-left"> 
                    <h1 className="text-white mb-10 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7180d7] to-[#daa0fe]"> 
                            Hi, I&apos;m {""}
                        </span>
                        <br></br>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7180d7] to-[#daa0fe]">
                            <TypeAnimation
                                sequence={[
                                    "Zhenqi Zhang",
                                    1000,
                                    "Jacky",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    {/* The most common text colors are: #323232 #646464 #999999, but the color would be too dark if I use any of these */}
                    <p className=" text-white text-base sm:text-lg mb-7 lg:text-xl lg:leading-8.5">
                        I am a graduate who aspires to become a software engineer or computer scientist. 
                        <br></br>
                        I am keen to learn and grow into a mature full-stack engineer, software engineer or data analyst.
                        <br></br>
                        In addition to programming, I am also a photographer, travel enthusiast and graphic designer living in Australia. In the past four years, I taught myself how to shoot, edit and create some of my own short videos. At the same time, I am constantly improving my creativity and problem-solving skills in programming.
                    </p>
                </div>
                {/* 4 Col for the Profile Image */}
                <div className="col-span-4 place-self-center mt-6 lg:mt-0">
                    <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[310px] lg:h-[310px] sm:w-[200px] sm:h-[200px] relative"> {/* Container and also background of the Profile Image */}
                        <Image src="/image/pfp.jpg" alt="pfp" className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={305} height={305}/> {/* Profile Image (Making it rounded and in the center of the background container */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroSection

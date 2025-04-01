"use client"
import React from "react";
import Image from 'next/image';

const InfoSection = () => {

    return (
        <section id="info">
            <div className="grid grid-cols-1 sm:grid-cols-12 py-5 mt-12">
                <div className="col-span-6 text-center sm:text-left mt-0"> 
                    <Image src="/image/Pic04.png" className="w-full h-auto object-cover" width={1000} height={1000} alt="AboutSection image"/>  
                    <h2 className="text-7xl font-extrabold text-white mb-6 mt-10 sm:mt-20 underline decoration-2 underline-offset-6">Coding</h2>
                    <p className="text-base lg:text-lg mb-7 mt-10 sm:mt-15 lg:leading-8.5">
                        During University, I participated in multiple group assignments.
                        <br></br>
                        <br></br>
                        In my Machine Learning course, I found data cleaning and model training very interesting. We can process different data through different algorithms and finally predict an outcome.
                        <br></br>
                        <br></br>
                        Although web development is not a core part of my study, being the lead back-end designer for my capstone project sparked my interest in web development. 
                        I participated in the design of front-end, back-end, database and testing, and found that web development is a place where I can freely express my creativity.
                        Being able to participate in group projects and use my creativity to accomplish something made me feel very happy and wanted to continue to explore more about web development.
                    </p>
                </div>
                {/* Spacer Column */}
                <div className="col-span-1 hidden sm:block" />
                <div className="col-span-5 place-self-center mb-6">
                    <Image src="/image/Pic05.png" className="w-auto h-full object-contain" width={1000} height={1000} alt="AboutSection image"/>  
                    <p className="text-white text-base lg:text-lg mt-7 lg:leading-8.5">
                        Lastly, In the Human Computer Interface course, I was exposed to the preparation work before developing software, including data collection (User persona, competitor analysis, use cases, etc.), data analysis, UI/UX development, usability testing, etc. 
                        I found that I really enjoyed this process and found fun in it, and brought this creativity into my design.
                    </p>
                </div>
            </div>

            <div className="w-full h-px bg-white my-8" />

            <div className="grid grid-cols-1 sm:grid-cols-12 py-5 mt-12">
                <div className="col-span-6 text-center sm:text-left mt-0"> 
                    <Image src="/image/Pic06.jpg" className="w-full h-auto object-cover" width={1000} height={1000} alt="AboutSection image"/>  
                    <h2 className="text-7xl font-extrabold text-white mb-6 mt-10 sm:mt-20 underline decoration-2 underline-offset-6 break-words">Photographer</h2>
                    <p className="text-base lg:text-lg mb-7 mt-10 sm:mt-15 lg:leading-8.5">
                        Whenever I travel, I always bring a camera with me. I think that although the most beautiful scenery is what we see with our eyes, photos make us remember the journey we have taken.
                        <br></br>
                        <br></br>
                        In this era of advanced information technology, I can pass these beautiful scenery to my family so that they can also enjoy the beauty of this world.
                        <br></br>
                        <br></br>
                        Welcome to my social media accounts (RedNote/XiaoHongShu). I post some video blogs when I travel. Sorry, they are all in Chinese (more for my family)
                        <br></br>
                        <br></br>
                        <span>Click below to view my account </span>
                    </p>
                    <a
                        href="https://www.xiaohongshu.com/user/profile/5f54e3fe0000000001007b94"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-15 h-15 bg-white text-black rounded-full hover:bg-purple-300 transition duration-300"
                        style={{
                            backgroundImage: `url("/image/Doge.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    />
                </div>
                {/* Spacer Column */}
                <div className="col-span-1 hidden sm:block" />
                <div className="col-span-5 place-self-center mb-6">
                    <Image src="/image/Pic08.jpg" className="w-auto h-full object-contain" width={1000} height={1000} alt="AboutSection image"/>  
                </div>
            </div>
            <div className="md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0">
                <Image src="/image/Display01.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
                <Image src="/image/Display02.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
                <Image src="/image/Display03.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
            </div>

            <div className="w-full h-px bg-white my-8" />

            <div className="grid grid-cols-1 sm:grid-cols-12 py-5 mt-12">
                <div className="col-span-6 text-center sm:text-left mt-0"> 
                    <Image src="/image/Travel01.jpg" className="w-full h-auto object-cover" width={1000} height={1000} alt="AboutSection image"/>  
                    <h2 className="text-7xl font-extrabold text-white mb-6 mt-10 sm:mt-20 underline decoration-2 underline-offset-6 break-words">Travel Enthusiast</h2>
                    <p className="text-base lg:text-lg mb-7 mt-10 sm:mt-15 lg:leading-8.5">
                        While you are still young, the world is at your feet, and your steps never stop!
                        <br></br>
                        <br></br>
                        Traveling has always been one of my favorite things to do, I like to explore the world through my footsteps. Although I have only explored a small part of the place now, but in the distant future, I believe that my footsteps will definitely pass through more places
                    </p>
                </div>
                {/* Spacer Column */}
                <div className="col-span-1 hidden sm:block" />
                <div className="col-span-5 place-self-center mb-6">
                    <Image src="/image/Travel02.jpg" className="w-auto h-full object-contain" width={1000} height={1000} alt="AboutSection image"/>  
                </div>
            </div>
            <div className="md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0">
                <Image src="/image/Display04.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
                <Image src="/image/Display05.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
                <Image src="/image/Display06.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
            </div>
        </section>
    )
}

export default InfoSection
"use client";
import React, { useState, useRef } from "react";
import ExperienceCard from './ExperienceCard'
import ExperienceTag from "./ExperienceTag";
import { motion, useInView } from "framer-motion";

{/* 
    Code From: https://www.youtube.com/watch?v=Kb1f5bvF6f4&t=4804s&ab_channel=webdecoded  
    Was following the tutorial for developing this Portfolio
*/}

const experienceDate = [
    {
        id:1,
        title: "AICode Australia",
        description: "Programming Robot and Drone Teacher, Teaching Instructor",
        image: "/image/Exp01.png",
        tag: ["All", "Teaching"],
        previewUrl: "https://www.aicodeaustralia.com.au/",
    },
    {
        id:1,
        title: "Junior Engineer",
        description: "Programming Teacher for after school lessons, Teaching Instructor",
        image: "/image/Exp02.png",
        tag: ["All", "Teaching"],
        previewUrl: "https://www.juniorengineers.com.au/",
    },
    {
        id:1,
        title: "Priority Construction",
        description: "IT Consulting",
        image: "/image/Exp03.png",
        tag: ["All", "IT Consulting"],
        previewUrl: "https://www.priorityconst.com.au/",
    }
]

const ExperienceSection = () => {

    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredExperiences = experienceDate.filter((experience) =>
        experience.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="experience">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Experiences</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ExperienceTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ExperienceTag
                    onClick={handleTagChange}
                    name="Teaching"
                    isSelected={tag === "Teaching"}
                />
                <ExperienceTag
                    onClick={handleTagChange}
                    name="IT Consulting"
                    isSelected={tag === "IT Consulting"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-15">
                {filteredExperiences.map((experience, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ExperienceCard
                        key={experience.id}
                        title={experience.title}
                        description={experience.description}
                        imgUrl={experience.image}
                        previewUrl={experience.previewUrl}
                    />
                </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ExperienceSection

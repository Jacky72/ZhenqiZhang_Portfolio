"use client";
import React, { useState, useRef } from "react";
import ExperienceCard from './ExperienceCard'
import ExperienceTag from "./ExperienceTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id:1,
        title: "Availability Enrolment Tracker",
        description: "University Capstone Project",
        image: "/image/AvailabilityEnrolmentTracker.png",
        tag: ["All", "Web"],
        previewUrl: "https://github.com/Jacky72/AvailabilityEnrolmentTracker",
    },
    {
        id:2,
        title: "Personal Portfolio",
        description: "Web Development Project",
        image: "/image/Pro01.png",
        tag: ["All", "Web"],
        previewUrl: "https://github.com/Jacky72/AvailabilityEnrolmentTracker",
    }
]

const ProjectSection = () => {

    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="project">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ExperienceTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ExperienceTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ExperienceTag
                    onClick={handleTagChange}
                    name="Machine Learning"
                    isSelected={tag === "Machine Learning"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-15">
                {filteredProjects.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ExperienceCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection

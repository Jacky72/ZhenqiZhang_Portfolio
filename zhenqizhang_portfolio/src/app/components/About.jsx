"use client"
import React, { useTransition, useState } from "react";
import Image from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      imgurl: "/image/Pic01-34.jpg", 
      content: (
        <ul className="list-disc pl-2">
          <li className="list-none mb-1">Programming Languages: Python, Java, C</li>
          <li className="list-none mb-1">SQL (PostgreSQL, MySQL)</li>
          <li className="list-none mb-1">Web Design (React, Express.js, Node.js)</li>
          <li className="list-none mb-1">Agile development practices</li>
          <li className="list-none mb-1">AWS, CI/CD</li>
          <li className="list-none mb-1">Machine Learning (Model Training, Optimization ...)</li>
          <li className="list-none">Leadership (Team collaboration, Mentoring)</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      imgurl: "/image/Pic02.JPG", 
      content: (
        <ul className="list-disc pl-2">
            <li className="list-none mb-4"> University: Curtin University </li>
            <li className="list-none mb-4"> Degree: Bachelor of Computing </li>
            <li className="list-none"> Major: Computer Science </li>
        </ul>
      ),
    },
    {
        title: "Language",
        id: "language",
        imgurl: "/image/Pic03.JPG", 
        content: (
          <ul className="list-disc pl-2">
            <li className="list-none mb-4">English - Fluent</li>
            <li className="list-none">Chinese Mandarin - Native</li>
          </ul>
        ),
      },
];

const AboutSection = () => {

    {/* Default to Skills */}
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
        setTab(id);
        });
    };

    return (
        <section id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0">
                <Image src={TAB_DATA.find((t) => t.id === tab).imgurl} width={500} height={500} alt="AboutSection image"/>  
                <div>
                    <h2 className="text-4xl font-bold text-white mb-6 mt-5">About Me</h2>
                    <p className="text-white lg:text-lg">
                        I'm a Computer Science graduate specializing in Machine Learning, Full-Stack Development, Data Science and Software Development. With sufficient skill in Python, Java, Node.js, C, SQL, and system design.
                        My work includes using computer vision and reinforcement learning in robotics and drones (AICode Australia). I've done projects ranging from predictive ML models for BLEVE analysis to full-stack Web App like a Availability Enrolment using React, Express.js, and PostgreSQL.
                        I thrive in Agile teams, follow AWS best practices, and value iterative, feedback-driven development. As a mentor to 50+ students, I enjoy creating collaborative, inclusive learning environments. Fluent in English and Mandarin, I bring strong cross-cultural communication and leadership to every project.
                        I&apos;m passionate about building impactful, team-driven solutions while mentoring the next generation of developers.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("language")} active={tab === "language"}>
                            {" "}
                            Language{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8 min-h-[150px] text-white">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
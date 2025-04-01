import IntroSection from "./components/Intro";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About"
import InfoSection from "./components/Info";
import ExperienceSection from "./components/WorkExperience";
import ProjectSection from "./components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-[#7226ff] via-[#160078] via-80% to-[#010030]">
      <Navbar />
      <div className="container mt-24 mx-auto px-10 py-4">
        <IntroSection /> 
        <br></br>
        <AboutSection /> 
        <InfoSection /> 
        <ExperienceSection /> 
        <ProjectSection/>
      </div>
    </main>
  )
}

import IntroSection from "./components/Intro";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About"
import InfoSection from "./components/Info";
import ExperienceSection from "./components/WorkExperience";
import ProjectSection from "./components/Project";
import StatusSection from "./components/CurrentStat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-[#6b30ab] via-[#ac71f0] via-80% to-[#dabefa]" >  {/* via-[#160078] via-80% */}
      <Navbar />
      <div className="container mt-24 mx-auto px-10 py-4">
        <IntroSection /> 
        <StatusSection/>
        <AboutSection /> 
        <InfoSection /> 
        <ExperienceSection /> 
        <ProjectSection/>
      </div>
    </main>
  )
}

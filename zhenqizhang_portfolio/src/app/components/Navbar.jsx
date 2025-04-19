"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useMotionValueEvent, useScroll } from "framer-motion";
import OpenMenu from "./OpenMenu"

const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "More About Me",
      path: "#info",
    },
    {
        title: "Experience",
        path: "#experience",
    },
    {
        title: "Project",
        path: "#project",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showNavbar, setShowNavBar] = useState(true)
    const [prevScrollY, setPrevScrollY] = useState(0)
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > prevScrollY && latest > 35){
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
        setPrevScrollY(latest);
    })

    {/* This useEffect is to make sure that the Navbar is closed when we enlarge the webpage from small width to wide width */}
    useEffect(() => {
        {/* Small screen width = 768 Large screen width = 1080, 1600, 1800 ... Based on different resolution */}
        const handleResize = () => {
            {/* If detected that the screen width is larger than 768, hide the button and display the NavBar */}
            if (window.innerWidth >= 768) {
                setNavbarOpen(false);
            }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={`fixed mx-auto border border-white top-0 left-0 right-0 z-10 bg-gradient-to-r from-[#3a2e67] via-[#638196] via-85% to-[#ceffd1] bg-opacity-100 min-h-60px max-h-65px transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}> {/* Common NavBar Height = 60 to 100px bg-[#96affc]*/}
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-2xl md:text-5xl text-blacks font-semibold"> My Portfolio</Link>
                <div className="mobile-menu block md:hidden">  {/* Hide the NavBar for small screens */}
                {
                    !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className="flex item-center px-3 py-2 border-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><Bars3Icon className="h-5 w-5"/></button>
                    ) : (
                    <button onClick={() => setNavbarOpen(false)} className="flex item-center px-3 py-2 border-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><XMarkIcon className="h-5 w-5"/></button>
                    )
                }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 font-bold">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <OpenMenu links={navLinks}/> : null}
        </nav>
    )
}

export default Navbar
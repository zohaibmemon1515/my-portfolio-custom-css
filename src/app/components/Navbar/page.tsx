"use client";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navContainer">
        <div className="logoDiv">
          <Image
            src="/assests/img/Logo.png"
            width={200}
            height={270}
            alt="Logo"
            className="logo"
          />
        </div>

        <ul className="textDiv">
          <li>
            <Link href="/" className="navLink">
              Home
            </Link>
          </li>
          <li>
            <Link href="/AboutMe" className="navLink">
              About Me
            </Link>
          </li>

          <li>
            <Link href="/Skills" className="navLink">
              Skills
            </Link>
          </li>

          <li>
            <Link href="/Contact" className="navLink">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hireMeDiv">
          <button className="hireMeBtn">
            <Link href="#">Hire Me</Link>
          </button>
        </div>

        <button className="menuToggleBtn" onClick={toggleSidebar}>
          <HiOutlineMenuAlt3 size={28} />
        </button>

        <div className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
          <button className="closeBtn" onClick={toggleSidebar}>
            <IoClose size={18} />
          </button>
          <ul className="sidebarLinks">
            <li onClick={toggleSidebar}>
              <Link href="/" className="liLink">
                Home
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link href="/AboutMe" className="liLink">
                About Me
              </Link>
            </li>

            <li onClick={toggleSidebar}>
              <Link href="/Skills" className="liLink">
                Skills
              </Link>
            </li>

            <li onClick={toggleSidebar}>
              <Link href="/Contact" className="liLink">
                Contact
              </Link>
            </li>
          </ul>

          <div className="buttonContainer">
            <Link href="https://api.whatsapp.com/send?phone=923193852479">
              <button className="hireMeButton">Hire me</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

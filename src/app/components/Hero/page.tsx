"use client";

import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="heroSection">
      <div className="heroContainer">
        <div className="heroGrid">
          <div className="heroLeft">
            <div className="heroText">
              <h2>Hi, It&apos;s me</h2>
              <h1>MD ZOHAIB MEMON</h1>
              <h2 className="heroTitle">
                And I&apos;m a
                <span className="heroTitleSpan">
                  <Typewriter
                    options={{
                      strings: ["Graphic Designer", "Frontend Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h2>
              <p>
                I combine design with clean code to craft visuals and smooth,
                user-friendly websites that are both beautiful and effective.
              </p>

              <div className="socialLinks">
                <a
                  href="https://www.facebook.com/zohaib.memon.961"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialFacebook className="socialLinkIcon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zohaib-memon-625b8928b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiLinkedinFill className="socialLinkIcon" />
                </a>
                <a
                  href="https://github.com/zohaibmemon1515"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="socialLinkIcon" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=923193852479"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="socialLinkIcon" />
                </a>
              </div>

              <button className="downloadButton">
                <a
                  href="/assests/Cv/GraphicCv.pdf"
                  download="MD_Zohaib_Memon_CV"
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>

          <div className="heroRight">
            <Image
              src="/assests/img/profilepicture.jpeg"
              alt="hero"
              width={800}
              height={100}
              className="heroImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

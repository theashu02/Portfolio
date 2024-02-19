import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! My name is Ashutosh Chauhan, I am currently third year student at Madan Mohan Malaviya University Of Technology, Gorakhpur from Electronics and Communication Engineering Department. My interest in web development was
            sparked in first year of college when I created my first project protfolio for gaming organization.
          </p>
          <p className="about-grid-info-text">
            I specialize in designing and developing
            high-quality MERN applications.
          </p>

          <p className="about-grid-info-text">
            I am also working on a new Technologys like how to build Web3 applications.
            Aimed to enhance web development skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Solidity</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Hardhat</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Linux</li>
            <li className="about-grid-info-list-item">C++/C</li>
            <li className="about-grid-info-list-item">Prisma</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">TailwindCSS</li>
            <li className="about-grid-info-list-item">OOPS</li>
            <li className="about-grid-info-list-item">Data structure and algo. </li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/ashu.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

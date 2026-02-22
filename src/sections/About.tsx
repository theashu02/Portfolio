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
      className="max-w-4xl mx-auto py-24 px-10 md:px-0 min-h-screen flex flex-col justify-center"
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
      <div className="flex items-center gap-4 mb-10 w-full after:content-[''] after:h-[1px] after:flex-1 after:bg-muted/80">
        <h2 className="text-3xl font-bold font-fira-code text-foreground">
          <span className="text-primary font-fira-code">01. </span>About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 text-muted-foreground">
        <div className="flex flex-col gap-4">
          <p className="leading-relaxed">
            Hello! My name is Ashutosh Chauhan, I am currently third year student at Madan Mohan Malaviya University Of Technology, Gorakhpur from Electronics and Communication Engineering Department. My interest in web development was sparked in first year of college when I created my first project
            protfolio for gaming organization.
          </p>
          <p className="leading-relaxed">I specialize in designing and developing high-quality MERN applications.</p>
          <p className="leading-relaxed">I am also working on a new Technologys like how to build Web3 applications. Aimed to enhance web development skills.</p>
          <p className="leading-relaxed">Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 mt-4 text-sm font-fira-code list-none p-0">
            <li className="before:content-['▹'] before:text-primary before:mr-2">React</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">Next.js</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">Solidity</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">Typescript</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">JavaScript</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">Hardhat</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">Node.js</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">Linux</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">C++/C</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">Prisma</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">MongoDB</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">AWS</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">TailwindCSS</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">OOPS</li>
            <li className="before:content-['▹'] before:text-primary before:mr-2">Data structure and algo. </li>
          </ul>
        </div>
        <div className="relative w-full max-w-[300px] aspect-square mx-auto md:ml-auto group cursor-pointer mt-10 md:mt-0">
          <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300 rounded"></div>
          <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 z-0"></div>
          <div className="relative z-0 h-full w-full rounded overflow-hidden">
            <Image src="/ashu.jpeg" alt="profile" fill className="object-cover" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

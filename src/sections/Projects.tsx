import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.jpg",
      projectName: "Pokedex",
      projectLink: "https://poke-dex-psi-roan.vercel.app/",
      projectDescription: "This is a web application that uses the PokeAPI to display information about different Pokemon, including their evolution levels and details.",
      projectTech: ["Next.js", "Javascript", "CSS", "SWR", "Typescript", "PokeApi"],
      projectExternalLinks: {
        github: "https://github.com/theashu02/Poke_Dex",
        externalLink: "https://poke-dex-psi-roan.vercel.app/",
      },
    },
    {
      image: "/project2.jpg",
      projectName: "Type Racer Game",
      projectLink: "https://github.com/theashu02/Tally-Type-Racer",
      projectDescription: "This is a type-racer-game that consist multiple players in single room to test the typing speed. This game is build using React, Nodejs, Express, MongoDB, Api ,socket.io, axios etc.",
      projectTech: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "Api", "Styled Components", "CSS"],
      projectExternalLinks: {
        github: "https://github.com/theashu02/Tally-Type-Racer",
        externalLink: "https://github.com/theashu02/Tally-Type-Racer",
      },
    },
    {
      image: "/project3.jpg",
      projectName: "Social Media App",
      projectLink: "https://github.com/theashu02/SimplGram_app",
      projectDescription: "This is a Social Media App that allows you to share photo and videos and also chats with others. This app is build using Next.js, Prisma, MongoDB, typescript, TailwindCSS, Zod, Pusher.js, NextAuth etc",
      projectTech: ["Next.js", "TypeScript", "NextAuth", "MongoDB", "Prisma", "Zod", "TailwindCSS"],
      projectExternalLinks: {
        github: "https://github.com/theashu02/SimplGram_app",
        externalLink: "https://github.com/theashu02/SimplGram_app",
      },
    },
    {
      image: "/project4.jpg",
      projectName: "Web3 Funding App",
      projectLink: "https://github.com/theashu02/Web3CrowdFunding",
      projectDescription: "Web3 crowdfunding leverages blockchain technology to create a transparent, decentralized platform where projects can raise funds directly from a global community. This app is build using Next.js, hardhat, Solidity, javascript, Styled-components etc",
      projectTech: ["Next.js", "Javascript", "Solidity", "hardhat", "Ipfs", "ethers.js", "styled-components"],
      projectExternalLinks: {
        github: "https://github.com/theashu02/Web3CrowdFunding",
        externalLink: "https://github.com/theashu02/Web3CrowdFunding",
      },
    },
  ];
  return (
    <div className="max-w-5xl mx-auto py-24 px-10 md:px-0" id="work">
      <motion.div
        className="flex items-center gap-4 mb-10 w-full after:content-[''] after:h-[1px] after:flex-1 after:bg-muted/80"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2 className="text-3xl font-bold font-fira-code text-foreground">
          <span className="text-primary font-fira-code">03. </span>Some Things I’ve Built
        </h2>
      </motion.div>
      <div className="flex flex-col gap-24 mt-10">
        {projectsData.map(({ image, projectDescription, projectLink, projectExternalLinks, projectName, projectTech }, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              className="relative grid grid-cols-1 md:grid-cols-12 md:items-center gap-8 md:gap-0"
              key={projectName}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              <div className={`relative w-full aspect-video md:aspect-[16/10] md:col-span-7 rounded overflow-hidden z-10 group cursor-pointer ${isEven ? "md:col-start-1 md:row-start-1" : "md:col-start-6 md:row-start-1"}`}>
                {/* <div className="project-image-overlay"></div> */}
                <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300 rounded"></div>
                <div className="relative z-0 h-full w-full rounded overflow-hidden">
                  <Image src={image} fill alt={projectName} quality={100} className="object-cover" />
                </div>
              </div>
              <div className={`relative flex flex-col items-start z-20 md:col-span-6 md:row-start-1 ${isEven ? "md:col-start-7 md:items-end text-left md:text-right" : "md:col-start-1 md:items-start text-left md:text-left"} pointer-events-none`}>
                <p className="text-primary font-fira-code text-sm mb-2 font-semibold">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-6 hover:text-primary transition-colors pointer-events-auto cursor-pointer">{projectName}</h3>
                <div className="bg-muted text-muted-foreground p-6 rounded shadow-lg text-sm md:w-[110%] z-30 leading-relaxed mb-6 pointer-events-auto">
                  <p>{projectDescription}</p>
                </div>
                <ul className={`flex flex-wrap gap-x-5 gap-y-2 list-none p-0 m-0 mb-6 text-muted-foreground font-fira-code text-sm ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                  {projectTech.map((tech) => (
                    <li className="whitespace-nowrap" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className={`flex gap-4 list-none p-0 m-0 text-muted-foreground pointer-events-auto ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                  <li className="flex items-center justify-center">
                    <Link href={projectExternalLinks.github} className="hover:text-primary transition-colors text-xl">
                      <FiGithub />
                    </Link>
                  </li>
                  <li className="flex items-center justify-center">
                    <Link href={projectExternalLinks.externalLink} className="hover:text-primary transition-colors text-xl">
                      <FiExternalLink />
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

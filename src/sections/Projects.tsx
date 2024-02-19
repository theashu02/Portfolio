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
      projectDescription:
        "This is a web application that uses the PokeAPI to display information about different Pokemon, including their evolution levels and details.",
      projectTech: [
        "Next.js",
        "Javascript",
        "CSS",
        "SWR",
        "Typescript",
        "PokeApi",
      ],
      projectExternalLinks: {
        github: "https://github.com/theashu02/Poke_Dex",
        externalLink: "https://poke-dex-psi-roan.vercel.app/",
      },
    },
    {
      image: "/project2.jpg",
      projectName: "Type Racer Game",
      projectLink: "https://github.com/theashu02/Tally-Type-Racer",
      projectDescription:
        "This is a type-racer-game that consist multiple players in single room to test the typing speed. This game is build using React, Nodejs, Express, MongoDB, Api ,socket.io, axios etc.",
      projectTech: [
        "React",
        "Socket.io",
        "Node.js",
        "Express",
        "MongoDB",
        "Api",
        "Styled Components",
        "CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/theashu02/Tally-Type-Racer",
        externalLink: "https://github.com/theashu02/Tally-Type-Racer",
      },
    },
    {
      image: "/project3.jpg",
      projectName: "Social Media App",
      projectLink: "https://github.com/theashu02/SimplGram_app",
      projectDescription:
        "This is a Social Media App that allows you to share photo and videos and also chats with others. This app is build using Next.js, Prisma, MongoDB, typescript, TailwindCSS, Zod, Pusher.js, NextAuth etc",
      projectTech: [
        "Next.js",
        "TypeScript",
        "NextAuth",
        "MongoDB",
        "Prisma",
        "Zod",
        "TailwindCSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/theashu02/SimplGram_app",
        externalLink: "https://github.com/theashu02/SimplGram_app",
      },
    },
    {
      image: "/project4.jpg",
      projectName: "Web3 Funding App",
      projectLink: "https://github.com/theashu02/Web3CrowdFunding",
      projectDescription:
        "Web3 crowdfunding leverages blockchain technology to create a transparent, decentralized platform where projects can raise funds directly from a global community. This app is build using Next.js, hardhat, Solidity, javascript, Styled-components etc",
      projectTech: [
        "Next.js",
        "Javascript",
        "Solidity",
        "hardhat",
        "Ipfs",
        "ethers.js",
        "styled-components",
      ],
      projectExternalLinks: {
        github: "https://github.com/theashu02/Web3CrowdFunding",
        externalLink: "https://github.com/theashu02/Web3CrowdFunding",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
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
                <div className="project-image">
                  {/* <div className="project-image-overlay"></div> */}
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline" style={{color:"blue"}}>Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p style={{color:"pink"}}>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub style={{color:"yellow"}}/>
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink style={{color:"lightgreen"}}/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;

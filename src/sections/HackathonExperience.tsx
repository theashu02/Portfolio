import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

function HackathonExperience() {
  const hackathons = [
    {
      title: "Global Web3 Hackathon",
      date: "Nov 2023",
      projectName: "Decentralized Crowdfunding",
      description: "Built a smart contract for decentralized funding, winning 2nd place overall.",
      prize: "2nd Place",
      links: {
        github: "#",
        live: "#",
      },
      techStack: ["Solidity", "Next.js", "Hardhat", "Ethers.js"],
    },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto py-24 px-10 md:px-0 min-h-screen flex flex-col justify-center"
      id="hackathons"
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
          <span className="text-primary font-fira-code">06. </span>Hackathon Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hackathons.map((hackathon, index) => (
          <div key={index} className="flex flex-col gap-4 bg-muted/20 p-8 rounded border border-muted hover:border-primary hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-primary/10 text-primary rounded text-xl">
                <FaTrophy />
              </div>
              <div className="flex gap-4 text-muted-foreground">
                {hackathon.links.github && (
                  <Link href={hackathon.links.github} className="hover:text-primary transition-colors">
                    <FiGithub size={20} />
                  </Link>
                )}
                {hackathon.links.live && (
                  <Link href={hackathon.links.live} className="hover:text-primary transition-colors">
                    <FiExternalLink size={20} />
                  </Link>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mt-4 mb-2 hover:text-primary transition-colors cursor-pointer">{hackathon.title}</h3>
              <p className="text-primary font-fira-code text-sm mb-4">
                {hackathon.prize} &mdash; {hackathon.date}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed font-semibold mb-2">Project: {hackathon.projectName}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{hackathon.description}</p>
            </div>

            <div className="mt-auto pt-4">
              <ul className="flex flex-wrap gap-3 font-fira-code text-xs text-muted-foreground">
                {hackathon.techStack.map((tech) => (
                  <li key={tech} className="bg-foreground/5 py-1 px-2 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default HackathonExperience;

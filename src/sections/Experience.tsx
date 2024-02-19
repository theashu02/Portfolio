import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "HacktoberFest",
      role: "Open Source Contributor",
      url: "https://hacktoberfest.com/",
      start: "1 October 2022",
      end: "31 October 2022",
      shortDescription: [
        "Hacktoberfest is a month-long open source contribution challenge held in the month of October every year.",
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js among others.",
        "Contributed in few projects and fixes the bugs in application and also added features like light and dark mode in the website etc.",
      ],
    },
    {
      name: "Tally Solutions",
      role: "Hackathon",
      url: "https://tallysolutions.com/",
      start: "20 Jul 23",
      end: "22 Jul 23",
      shortDescription: [
        "Clear the Round 1.1(quiz round) and round 1.2(coding round) selected for round-2 (Semi Final) weekend Hackerthon.",
        "As a challenge We create a Type Racer Game in 48 hours.",
        "Using these Technology: React.js, Socket.io, Express.js, Node.js, mongoDB etc. to create these applications.",
      ],
    },
    {
      name: "Rankings",
      role: "Contest and Challenges",
      url: "",
      start: "2022",
      end: "Present",
      shortDescription: [
        "All Over World 294th Rank in LeetCode Biweekly Contest 121.",
        "All India 14th rank in GFG Job-a-thon Challenge 21st September’23.",
        "Global 386th rank in Starters 121 (14-02-2024) in CodeChef.",
        "Arround 1000+ problem solved accross the all platforms like LeetCode, GFG, CodeChef, CodeForces.",
      ],
    },
    {
      name: "Coding Platforms",
      role: "Coder",
      url: "https://linktr.ee/ashu___chauhan",
      start: "2022",
      end: "Present",
      shortDescription: ["LeetCode", "CodeForces", "CodeChef", "GeeksForGeeks"],
    },
    {
      name: "GoWithCode",
      role: "Problem Settler",
      url: "",
      start: "November 2022",
      end: "November 2023",
      shortDescription: [
        "Organizing Web developments and Compatative Programming bootcamps for newly admitted students in the University.",
        "Problem Settler at GoWithCode Community.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Experience and Achievements</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;

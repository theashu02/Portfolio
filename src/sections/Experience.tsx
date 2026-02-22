import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      if (underline) {
        // Use a media query match approach to adjust translation
        const isMd = window.matchMedia("(min-width: 768px)").matches;
        if (isMd) {
          underline.style.transform = `translateY(${selected * 3.5}rem)`;
        } else {
          underline.style.transform = `translateX(${selected * 10}rem)`;
        }
      }
    };
    transformSelected();

    // Add event listener to handle resize
    window.addEventListener("resize", transformSelected);
    return () => window.removeEventListener("resize", transformSelected);
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
      shortDescription: ["Organizing Web developments and Compatative Programming bootcamps for newly admitted students in the University.", "Problem Settler at GoWithCode Community."],
    },
  ];
  return (
    <motion.div
      className="max-w-4xl mx-auto py-24 px-10 md:px-0 min-h-screen flex flex-col justify-center"
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
      <div className="flex items-center gap-4 mb-10 w-full after:content-[''] after:h-[1px] after:flex-1 after:bg-muted/80">
        <h2 className="text-3xl font-bold font-fira-code text-foreground">
          <span className="text-primary font-fira-code">02. </span>Experience and Achievements
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <ul className="relative flex flex-row md:flex-col overflow-x-auto md:overflow-visible md:w-[200px] pb-4 md:pb-0 list-none m-0 p-0 text-sm font-fira-code border-b-[2px] md:border-b-0 md:border-l-[2px] border-muted">
          <div className="underline absolute left-0 bottom-0 md:top-0 h-[2px] w-40 md:w-[2px] md:h-14 bg-primary transition-transform duration-300 z-10 md:-ml-[2px]"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`flex-none w-40 md:w-full h-14 flex items-center justify-center md:justify-start md:px-6 cursor-pointer hover:bg-muted/30 hover:text-primary transition-colors duration-300 ${index === selected ? "text-primary bg-muted/30" : "text-muted-foreground"}`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-foreground">
              <span>{expereinces[selected].role}</span>
              <span className="text-primary">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="relative inline-block hover:after:w-full after:w-0 after:block after:h-[1px] after:bg-primary after:absolute after:-bottom-1 after:transition-all after:duration-300">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="text-muted-foreground font-fira-code text-sm mb-4">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="flex flex-col gap-4 list-none p-0 text-muted-foreground">
              {expereinces[selected].shortDescription.map((description, index) => (
                <li key={index} className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-primary leading-relaxed">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;

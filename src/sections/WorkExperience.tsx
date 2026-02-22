import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

function WorkExperience() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Tech Solutions",
      url: "#",
      date: "Jan 2024 - Present",
      description: ["Developed and maintained scalable web applications using React, Next.js, and Node.js.", "Collaborated with cross-functional teams to design and implement new features.", "Optimized application performance, resulting in a 20% increase in load speed."],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto py-24 px-10 md:px-0 min-h-screen flex flex-col justify-center"
      id="work-experience"
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
          <span className="text-primary font-fira-code">05. </span>Work Experience
        </h2>
      </div>

      <div className="relative pl-4 md:pl-8 border-l-2 border-primary/30 flex flex-col gap-12">
        {/* Glow effect on the timeline line */}
        <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

        {experiences.map((exp, index) => (
          <motion.div key={index} className="relative" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            {/* Timeline dot */}
            <div className="absolute -left-[25px] md:-left-[41px] top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10"></div>

            {/* Card Container */}
            <div className="flex flex-col gap-6 bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group overflow-hidden relative">
              {/* Subtle background glow on hover */}
              <div className="absolute inset-x-0 -top-px h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 z-10">
                <div className="flex flex-col gap-2 relative">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">{exp.role}</h3>
                  <Link href={exp.url} className="text-primary text-lg hover:underline flex items-center gap-1 w-fit group-hover:text-primary transition-colors" target="_blank">
                    @ {exp.company} <FiExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                </div>
                <div className="shrink-0 bg-primary/10 text-primary px-4 py-2 rounded-full font-fira-code text-sm font-medium border border-primary/20">{exp.date}</div>
              </div>

              <ul className="flex flex-col gap-3 list-none p-0 z-10">
                {exp.description.map((desc, i) => (
                  <li key={i} className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-primary leading-relaxed text-muted-foreground">
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4 z-10 pt-4 border-t border-border/50">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="bg-secondary/50 hover:bg-primary/20 text-secondary-foreground hover:text-primary font-fira-code text-xs px-3 py-1.5 rounded-md transition-colors cursor-default border border-transparent hover:border-primary/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;

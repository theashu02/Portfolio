import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiAward, FiExternalLink } from "react-icons/fi";

function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "Sep 2024",
      link: "#",
      credentialId: "AWS-DEV-12345",
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera",
      date: "Aug 2023",
      link: "#",
      credentialId: "META-FE-67890",
    },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto py-24 px-10 md:px-0 min-h-screen flex flex-col justify-center"
      id="certifications"
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
          <span className="text-primary font-fira-code">08. </span>Certifications
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-muted/20 p-6 border-l-4 border-l-primary rounded-r shadow-sm hover:bg-muted/30 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="text-3xl text-primary mt-1">
                <FiAward />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">{cert.title}</h3>
                <p className="text-muted-foreground font-semibold text-sm mt-1">{cert.issuer}</p>
                <p className="text-muted-foreground font-fira-code text-xs mt-2">
                  Issued: {cert.date} | Credential ID: {cert.credentialId}
                </p>
              </div>
            </div>

            <Link href={cert.link} target="_blank" className="flex items-center gap-2 text-primary border border-primary px-4 py-2 rounded text-sm hover:bg-primary/10 transition-colors font-fira-code mt-4 md:mt-0 whitespace-nowrap">
              View Credential <FiExternalLink />
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Certifications;

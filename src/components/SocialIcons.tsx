import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiCodeforces } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/theashu02",
    },
    {
      name: "Leetcode",
      icon: <TbBrandLeetcode />,
      link: "https://leetcode.com/AshuChauhan/",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/theashuchauhan/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/ashu_____chauhan",
    },
    {
      name: "CodeForces",
      icon: <SiCodeforces />,
      link: "https://codeforces.com/profile/ashu_0512",
    },
  ];
  return (
    <motion.div
      className="fixed left-10 bottom-0 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-muted-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="flex flex-col gap-6 list-none m-0 p-0 mb-4">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="flex justify-center items-center">
            <Link href={link} className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 text-xl flex" target="_blank">
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;

import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin
} from "react-icons/fi";
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
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;

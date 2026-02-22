import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    { name: "Contact", link: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 100 ? setNavbarVisible(true) : setNavbarVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    const handleLinkClick = () => setResponsiveNavVisible(false);
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    const nav = document.querySelector(".nav-items");
    const handleNavClick = (e: Event) => e.stopPropagation();
    nav?.addEventListener("click", handleNavClick);

    const html = document.querySelector("html");
    const handleHtmlClick = () => setResponsiveNavVisible(false);
    html?.addEventListener("click", handleHtmlClick);

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleLinkClick));
      nav?.removeEventListener("click", handleNavClick);
      html?.removeEventListener("click", handleHtmlClick);
    };
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md transition-all duration-300 py-6 px-10">
      <div className={`flex justify-between items-center w-full max-w-7xl mx-auto ${navbarVisible ? "opacity-100" : "opacity-95"}`}>
        <motion.div
          className="z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Link href="https://github.com/theashu02" target="_blank">
            <Logo />
          </Link>
        </motion.div>
        <motion.div
          className="md:hidden z-50 text-2xl text-primary cursor-pointer"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {/* {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )} */}

          {responsiveNavVisible ? (
            <CgClose
              onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </motion.div>
        <div className={`${responsiveNavVisible ? "fixed inset-0 bg-background flex flex-col items-center justify-center z-40 transition-all duration-300" : "hidden"} md:flex md:items-center md:gap-8`}>
          <ul className="flex flex-col md:flex-row items-center gap-6 list-none p-0 m-0">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={link} className="text-muted-foreground hover:text-primary transition-colors duration-300 font-fira-code text-sm">
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="md:mt-0 mt-6 flex gap-4 items-center"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <ThemeToggle />
            <Button text="Resume" link="https://ashuchauhan.vercel.app/resume.pdf" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

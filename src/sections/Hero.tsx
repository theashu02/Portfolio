import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
import TypedHeader from "@/components/TypedHeader";
import FloatingIconsBackground from "@/components/FloatingIconsBackground";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <FloatingIconsBackground />
      <div className="z-10 flex flex-col justify-center items-start w-full max-w-7xl mx-auto px-10 md:px-24">
        <motion.h1
          className="text-primary font-fira-code mt-4 mb-2 md:mb-6 text-sm md:text-base"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          Hello my name is
        </motion.h1>

        <h2 className="text-5xl md:text-8xl font-bold text-foreground mb-2 md:mb-4 tracking-tighter leading-none h-[1.2em] flex items-center">
          <TypedHeader text="Ashutosh Chauhan." delay={0.75} typingSpeed={60} />
        </h2>

        <h3 className="text-4xl md:text-7xl font-bold text-muted-foreground mb-6 md:mb-8 tracking-tighter leading-none h-[1.2em] flex items-center">
          <TypedHeader text="I craft things for the web." delay={2} typingSpeed={40} className="w-full" />
        </h3>

        <motion.p
          className="text-muted-foreground max-w-2xl text-base md:text-lg lg:text-xl mb-10 leading-relaxed tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 3.5,
          }}
        >
          I&apos;m a full stack developer with expertise in creating MERN applications. My current focus is on developing web experiences that are accessible, interactive, and centered around user needs. Passionate about developing responsive, visually appealing, and complex applications.
        </motion.p>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 3.8,
          }}
        >
          <Button text="Here is my LinkTree" link="https://linktr.ee/theashuchauhan" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

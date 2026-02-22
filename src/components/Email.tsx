import React from "react";
import { motion } from "framer-motion";
function Email() {
  return (
    <motion.div
      className="fixed right-10 bottom-0 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-muted-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <a href="mailto:ashutoshchauhan1919@gmail.com" className="[writing-mode:vertical-rl] text-muted-foreground hover:text-primary transition-colors duration-300 font-fira-code text-sm tracking-widest mb-4">
        ashutoshchauhan1919@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;

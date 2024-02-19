import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Robot from '../../public/robot.gif'

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >  
          <Image src={Robot} alt="" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;

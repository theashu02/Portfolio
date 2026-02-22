import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <Image src="/robot.gif" alt="" width={150} height={150} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;

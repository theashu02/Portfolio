import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypedHeaderProps {
  text: string;
  className?: string;
  delay?: number;
  typingSpeed?: number;
}

const TypedHeader: React.FC<TypedHeaderProps> = ({ text, className = "", delay = 0, typingSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, hasStarted, text, typingSpeed]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>
        {displayedText.split("").map((char, index) => (
          <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
            {char}
          </motion.span>
        ))}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`inline-block w-[3px] md:w-[5px] h-[1em] bg-primary ml-1 ${isTyping ? "opacity-100" : ""}`}
        style={{
          marginTop: "0.1em",
        }}
      />
    </span>
  );
};

export default TypedHeader;

import React from "react";
import { motion } from "framer-motion";
import { MdTerminal, MdCode, MdLayers, MdWidgets, MdAutoGraph, MdStorage, MdVerified, MdDataObject, MdSettingsEthernet } from "react-icons/md";

const ICONS = [MdTerminal, MdCode, MdLayers, MdWidgets, MdAutoGraph, MdStorage, MdVerified, MdDataObject, MdSettingsEthernet];

// Generate consistent random-looking initial positions
const generateIconData = (count: number) => {
  return Array.from({ length: count }).map((_, i) => {
    const Icon = ICONS[i % ICONS.length];
    // Spread them across left and right sides mostly to keep center clear for text
    const isLeft = i % 2 === 0;
    const xBase = isLeft ? 10 : 70;
    const xRandom = Math.random() * 20;

    return {
      id: i,
      Icon,
      x: `${xBase + xRandom}%`,
      y: `${Math.random() * 80 + 10}%`,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 4,
      size: Math.random() * 20 + 24, // 24px to 44px
    };
  });
};

const iconData = generateIconData(15);

const FloatingIconsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        {iconData.map((data) => (
          <motion.div
            key={data.id}
            className="absolute text-primary"
            style={{
              left: data.x,
              top: data.y,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              y: {
                duration: data.duration,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: {
                duration: data.duration * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              delay: data.delay,
            }}
          >
            <data.Icon size={data.size} />
          </motion.div>
        ))}
      </div>
      {/* Optional: Add a subtle gradient overlay to blend icons better */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
    </div>
  );
};

export default FloatingIconsBackground;

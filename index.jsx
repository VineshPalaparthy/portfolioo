import { useEffect } from "react";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";
import dynamic from "next/dynamic";

import bgTexture from "@/assets/background.png";
import styles from "./portfolio.module.css";

const assets = {
  profileImage: dynamic(() => import("@/assets/profile.jpg")),
  work1: dynamic(() => import("@/assets/work1.png")),
  work2: dynamic(() => import("@/assets/work2.png")),
  work3: dynamic(() => import("@/assets/work3.png"))
};

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${bgTexture.src})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "#000"
      }}
    >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-10"
      >
        <h1 className={\`\${orbitron.className} text-6xl font-bold text-center neon-glow\`}>
          Vinesh Palaparthy
        </h1>
        <p className="text-center text-lg mt-4">
          Game & Graphic Designer | Video & Photo Editing | Logo Making
        </p>
      </motion.section>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {Object.entries(assets).map(([key, Component], index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl"
          >
            <Component />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
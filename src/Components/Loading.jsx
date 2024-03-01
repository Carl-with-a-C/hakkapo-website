import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Skater from "../Multimedia/Vectors/Illustration3.svg";

const Loading = ({ isLoading }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen--container container"
        key="load-exit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, duration: 0.5 }}
      >
        <motion.h2
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0.78, 0.01, 0.21, 1],
          }}
        >
          Loading
        </motion.h2>
        <motion.div>
          <AnimatePresence>
            <motion.img
              className="skater-img"
              key="skater"
              src={Skater}
              alt="illustration of a rollerskater holding a bao bun out at arms length"
              initial={{ x: "-300px" }}
              animate={{ x: "300px" }}
              transition={{
                duration: 1.8,
                delay: 0.4,
                ease: [0.4, 0.01, 0.21, 1],
              }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;

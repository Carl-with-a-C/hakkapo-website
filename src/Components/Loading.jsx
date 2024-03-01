import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Skater from "../Multimedia/Vectors/Illustration3.svg";

const variants = {
  full: {
    width: "100%",
  },
  empty: {
    width: "0%",
  },
};
const Loading = ({ isLoading }) => {
  const duration = 2000;
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
            duration: 0.5,
            delay: 1.5,
            ease: [0.78, 0.01, 0.21, 1],
          }}
        >
          Loading
        </motion.h2>
        <div className="progress-bar--container">
          <motion.div
            className="progress-bar"
            animate={{ width: "33vw" }}
            variants={variants}
            initial={{ width: "0vw" }}
            transition={{
              ease: [0.4, 0.01, 0.21, 1],
              duration: duration / 1000,
              delay: 0.3,
            }}
          ></motion.div>
        </div>
        <motion.div>
          <AnimatePresence>
            <motion.img
              className="skater-img"
              key="skater"
              src={Skater}
              alt="illustration of a rollerskater holding a bao bun out at arms length"
              initial={{ x: "-16vw" }}
              animate={{ x: "18vw" }}
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

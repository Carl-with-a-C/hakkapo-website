import React from "react";
import { AnimatePresence, m } from "framer-motion";
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
      <m.div
        className="loading-screen--container container"
        key="load-exit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, duration: 0.5 }}
      >
        <m.h2
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
            ease: [0.78, 0.01, 0.21, 1],
          }}
        >
          Loading
        </m.h2>
        <div className="progress-bar--container">
          <m.div
            className="progress-bar"
            animate={{ width: "33vw" }}
            variants={variants}
            initial={{ width: "0vw" }}
            transition={{
              ease: [0.4, 0.01, 0.21, 1],
              duration: duration / 1000,
              delay: 0.3,
            }}
          ></m.div>
        </div>
        <m.div>
          <AnimatePresence>
            <m.img
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
        </m.div>
      </m.div>
    </AnimatePresence>
  );
};

export default Loading;

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

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
        <h2>Loading</h2>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;

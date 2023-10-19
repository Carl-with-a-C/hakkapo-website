import { motion } from "framer-motion";
import HeaderLogo from "../Multimedia/Vectors/HakkapoWordmarkHEADER.svg";

const Nav = () => {
  return (
    <header className="header">
      <div className="nav-container container">
        <motion.div
          className="address-container"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.75 }}
        >
          <p>123 Manchester Building, Manchester, M1 11A</p>
        </motion.div>
        <motion.div
          className="logo-container"
          animate={{
            y: ["40vh", "40vh", "0vh"],
            scale: [0, 1.5, 1],
          }}
          transition={{ duration: 2.3, ease: [0.78, 0.01, 0.21, 1] }}
        >
          <img src={HeaderLogo} alt="Hakkapo Logo" />
          {/* <div className="hakkapo cover"></div>
          <div className="chinese cover"></div> */}
        </motion.div>
        <motion.div
          className="nav-links-container"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.75 }}
        >
          <div className="nav-link contact-link">
            <p>contact us</p>
          </div>
          <div className="nav-link menu-link">
            <p>menu</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Nav;

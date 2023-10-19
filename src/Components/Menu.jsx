import { motion } from "framer-motion";

import Table from "../Multimedia/Images/menu-wood.jpg";
import MenuCard from "../Multimedia/Vectors/menu1.svg";

const Menu = ({ setMenuOpen, menuOpen }) => {
  return (
    <section className="menu">
      <motion.div
        className="table-container"
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.75, ease: [0.78, 0.01, 0.21, 1] }}
      >
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <h4>close</h4>
        </button>
        <img src={Table} alt="wodden table surface" />
      </motion.div>
      <div
        className="menu-container"
        style={{ visibility: menuOpen ? "visible" : "hidden" }}
      >
        <motion.div
          className="menu-card-container"
          initial={{ y: "100%" }}
          animate={{ y: menuOpen ? "0%" : "100%" }}
          transition={{
            duration: 0.75,
            ease: [0.78, 0.01, 0.21, 1],
          }}
        >
          <img src={MenuCard} alt="menu" className="menu-card" />
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { wrap } from "popmotion";

import Table from "../Multimedia/Images/menu-wood.jpg";

import BaoMenu from "../Multimedia/Vectors/MenuSVGs/BaoBox.svg";
import DonburiMenu from "../Multimedia/Vectors/MenuSVGs/DonburiBox.svg";
import RamenMenu from "../Multimedia/Vectors/MenuSVGs/RamenBox.svg";
import SidesMenu from "../Multimedia/Vectors/MenuSVGs/SidesBox.svg";
import SPMenu from "../Multimedia/Vectors/MenuSVGs/SPBox.svg";
import DessertMenu from "../Multimedia/Vectors/MenuSVGs/DessertBox.svg";

const Images = [
  { image: BaoMenu, title: "bao" },
  { image: DonburiMenu, title: "donburi" },
  { image: RamenMenu, title: "ramen" },
  { image: SidesMenu, title: "sides" },
  { image: SPMenu, title: "sp" },
  { image: DessertMenu, title: "dessert" },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Menu = ({ setMenuOpen, menuOpen }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, Images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="menu">
      <motion.div
        className="table-container"
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.75, ease: [0.78, 0.01, 0.21, 1] }}
      >
        <motion.button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ delay: 1, duration: 0.75, ease: [0.78, 0.01, 0.21, 1] }}
        >
          <h4>close x</h4>
        </motion.button>
        <img src={Table} alt="wodden table surface" />
      </motion.div>
      <div
        className="menu-container"
        style={{ visibility: menuOpen ? "visible" : "hidden" }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="menu-card-container"
            initial={{ y: "100%" }}
            animate={{ y: menuOpen ? "0%" : "100%" }}
            transition={{
              duration: 0.75,
              ease: [0.78, 0.01, 0.21, 1],
            }}
          >
            <motion.img
              className={Images[imageIndex].title + ` menu-card`}
              key={page}
              src={Images[imageIndex].image}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="menu-pagination-container container">
          <ul className="menu-pagination">
            {Images.map((image, index) => (
              <li
                className={
                  imageIndex === index ? "active menu-page" : "menu-page"
                }
              >
                <p>{image.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;

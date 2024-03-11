import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import Table from "../Multimedia/Images/drinks-wood.jpg";

import ArrowR from "../Multimedia/Vectors/ArrowR.svg";
import ArrowL from "../Multimedia/Vectors/ArrowL.svg";

import Wine1 from "../Multimedia/Vectors/DrinksSVGs/wine1.svg";
import Wine2 from "../Multimedia/Vectors/DrinksSVGs/wine2.svg";
import Sake from "../Multimedia/Vectors/DrinksSVGs/sake.svg";
import Spirits from "../Multimedia/Vectors/DrinksSVGs/spirits.svg";
import Beer from "../Multimedia/Vectors/DrinksSVGs/beer.svg";
import Group from "../Multimedia/Vectors/menu_illustration.svg";

const Images = [
  { image: Wine1, title: "wine/WHITE" },
  { image: Wine2, title: "wine/RED" },
  { image: Sake, title: "sake" },
  { image: Spirits, title: "highballs & spirits" },
  { image: Beer, title: "beer & softs" },
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

const Drinks = ({ setDrinksOpen, drinksOpen, setMenuOpen, menuOpen }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 5 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, Images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="drinks">
      <m.div
        className="table-container"
        initial={{ x: "100%" }}
        animate={{ x: drinksOpen ? "0%" : "100%" }}
        transition={{ duration: 0.75, ease: [0.78, 0.01, 0.21, 1] }}
      >
        <m.img
          className="drinks-title"
          src={Group}
          alt="illustration of various characters atop a bao"
        ></m.img>
        <div className="buttons-container container">
          <m.button
            className="food-btn btn"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setDrinksOpen(!drinksOpen);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: drinksOpen ? 1 : 0 }}
            transition={{
              delay: 1,
              duration: 0.75,
              ease: [0.78, 0.01, 0.21, 1],
            }}
          >
            <m.h3 whileTap={{ scale: 0.9 }}>{"< "}food</m.h3>
          </m.button>
          <m.button
            className="close-btn btn"
            onClick={() => {
              setDrinksOpen(!drinksOpen);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: drinksOpen ? 1 : 0 }}
            transition={{
              delay: 1,
              duration: 0.75,
              ease: [0.78, 0.01, 0.21, 1],
            }}
          >
            <m.h4 whileTap={{ scale: 0.9 }}>close x</m.h4>
          </m.button>
        </div>
        <img src={Table} alt="wodden table surface" />
      </m.div>
      <div
        className="drinks-container"
        style={{ visibility: drinksOpen ? "visible" : "hidden" }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <m.div
            className="drinks-card-container"
            initial={{ y: "100%" }}
            animate={{ y: drinksOpen ? "0%" : "100%" }}
            transition={{
              duration: 0.75,
              ease: [0.78, 0.01, 0.21, 1],
            }}
          >
            <m.img
              className={Images[imageIndex].title + ` drinks-card`}
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
          </m.div>
        </AnimatePresence>
        <div className="drinks-pagination-container container">
          <ul className="drinks-pagination">
            {Images.map((image, index) => (
              <li
                key={index}
                className={
                  imageIndex === index ? "active drinks-page" : "drinks-page"
                }
              >
                <button onClick={() => setPage([index, direction])}>
                  <p>{image.title}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="navigation-btns--container">
          <div className="prev navigation-btns" onClick={() => paginate(-1)}>
            <m.img
              src={ArrowL}
              alt="arrow pointing left"
              whileTap={{ scale: 0.9 }}
            />
          </div>
          <div className="next navigation-btns" onClick={() => paginate(1)}>
            <m.img
              src={ArrowR}
              alt="arrow pointing right"
              whileTap={{ scale: 0.9 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drinks;

import { motion, useScroll, useTransform } from "framer-motion";

import Drink from "../Multimedia/Images/HakkapoDrink.png";
import Bowl from "../Multimedia/Images/HakkapoBowl.png";
import Love from "../Multimedia/Vectors/LovingDoodle.svg";

const OpeningHours = () => {
  const { scrollYProgress } = useScroll({ offset: [0.75, 1] });

  const scaleY = useTransform(scrollYProgress, [0.2, 1], ["25%", "0%"]);

  return (
    <section className="opening-hours-container container">
      <div className="opening-hours-column-container ">
        <div className="opening-hours-column left">
          <div className="o-h-img-container">
            <motion.img
              src={Drink}
              alt="fancy cocktail"
              whileInView={{ scale: 1.1 }}
              transition={{
                delay: 0.5,
                duration: 1.2,
                ease: [0.78, 0.01, 0.21, 1],
              }}
            />
          </div>
          <div className="o-h-blurb-container">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </h4>
            <h4>
              Bibendum ut tristique et egestas quis ipsum suspendisse ultrices
              gravida. Nunc lobortis mattis aliquam faucibus purus in. Cursus
              metus aliquam
            </h4>
          </div>
        </div>
        <div className="opening-hours-column center">
          <div className="o-h-title">
            <h2>Opening Hours</h2>
          </div>
          <div className="o-h-times-container container">
            <div className="o-h-times">
              <motion.div
                className="o-h-times-after"
                initial={{ width: "100" }}
                whileInView={{ width: "0%" }}
                transition={{ delay: 0.75, duration: 0.5 }}
              />
              <h3>
                <strong>Lunch</strong>
              </h3>
              <h3>11am - 1pm</h3>
            </div>
            <div className="o-h-times">
              <motion.div
                className="o-h-times-after"
                initial={{ width: "100" }}
                whileInView={{ width: "0%" }}
                transition={{ delay: 0.5, duration: 0.75 }}
              />

              <h3>
                <strong>Supper</strong>
              </h3>
              <h3>4pm - 11pm</h3>
            </div>
          </div>
          <div className="o-h-day">
            <h3>EVERYDAY</h3>
          </div>
          <motion.svg
            className="green-circle"
            width="247"
            height="184"
            viewBox="0 0 247 184"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: "easeInOut",
              }}
              d="M182.864 37.1463C133.016 5.45299 71.8489 11.6305 42.3347 27.404C19.6847 39.509 2.01282 66.4578 5.85037 104.613C8.66206 132.569 23.6972 169.033 93.5458 177.231C145.952 183.382 183.928 171.218 214.994 145.376C261.362 106.806 247.174 37.1463 171.171 5.45291"
              stroke="#E4FF77"
              stroke-width="9.2311"
              stroke-linecap="round"
            />
          </motion.svg>
        </div>
        <div className="opening-hours-column right">
          <div className="o-h-img-container">
            <motion.img
              src={Bowl}
              alt="noodle bowl"
              whileInView={{ scale: 1.1 }}
              transition={{
                delay: 0.5,
                duration: 1.2,
                ease: [0.78, 0.01, 0.21, 1],
              }}
            />
          </div>
        </div>
      </div>
      <div className="love-doodle-img-container">
        <motion.img
          src={Love}
          alt="person lovingly holding a bao bun"
          style={{ y: scaleY }}
        />
      </div>
    </section>
  );
};

export default OpeningHours;

import { motion, useScroll, useTransform } from "framer-motion";

import heroSplash from "../Multimedia/Images/HakkapoHeroSplash.png";
import jumpingVectorBody from "../Multimedia/Vectors/body.svg";
import jumpingVectorBao from "../Multimedia/Vectors/bao.svg";
import jumpingVectorBg from "../Multimedia/Vectors/background.svg";
import jumpingVectorFg from "../Multimedia/Vectors/foreground.svg";

const Hero = () => {
  const { scrollYProgress } = useScroll({ offset: [0, 0.45] });

  const scaleY = useTransform(scrollYProgress, [0.2, 1], ["85%", "0%"]);
  const scaleY1 = useTransform(scrollYProgress, [0.15, 1], ["85%", "0%"]);
  const scaleY2 = useTransform(scrollYProgress, [0, 1], ["75%", "0%"]);
  const scaleY3 = useTransform(scrollYProgress, [0.3, 1], ["100%", "0%"]);
  const scaleYImg = useTransform(scrollYProgress, [0, 0.65], ["100%", "95%"]);

  return (
    <section className="hero-container">
      <motion.div
        className="hero-img-container container"
        style={{ scale: scaleYImg }}
      >
        <motion.img
          src={heroSplash}
          alt="a light and airy restaurant"
          animate={{ height: "70vh", filter: "brightness(100%)" }}
          initial={{ height: "0vh", filter: "brightness(0%)" }}
          transition={{
            delay: 1.2,
            duration: 1.2,
            ease: [0.78, 0.01, 0.21, 1],
          }}
        />
      </motion.div>
      <motion.div
        className="lower-hero-container"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 2,
          duration: 1.2,
          ease: [0.78, 0.01, 0.21, 1],
        }}
      >
        <div className="blurb-container container">
          <div className="blurb--title">
            <h2>LOREM IPSUM</h2>
          </div>
          <div className="blurb--subtitle">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum ut tristique et egestas quis ipsum suspendisse ultrices
              gravida. Nunc lobortis mattis aliquam faucibus purus in. Cursus
              metus aliquam{" "}
            </p>
          </div>
        </div>
        <div className="jumping-vector-container">
          <motion.img
            src={jumpingVectorBody}
            alt="line illustration of person dynamically jumping"
            className="jumping-vector jumping-vector--body"
            style={{ y: scaleY }}
          />
          <motion.img
            src={jumpingVectorBao}
            alt="line illustration of a bao bun"
            className="jumping-vector jumping-vector--bao"
            style={{ y: scaleY1 }}
          />
          <motion.img
            src={jumpingVectorBg}
            alt="line illustration of background shapes"
            className="jumping-vector jumping-vector--bg"
            style={{ y: scaleY2 }}
          />
          <motion.img
            src={jumpingVectorFg}
            alt="line illustration of foreground shapes"
            className="jumping-vector jumping-vector--fg"
            style={{ y: scaleY3 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

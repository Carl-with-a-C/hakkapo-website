import { m, useScroll, useTransform } from "framer-motion";

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
      <m.div
        className="hero-img-container container"
        style={{ scale: scaleYImg }}
      >
        <m.img
          loading="lazy"
          role="presentation"
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
      </m.div>
      <m.div
        className="lower-hero-container"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 2,
          duration: 1.2,
          ease: [0.78, 0.01, 0.21, 1],
        }}
      >
        <div className="hero-address-container container">
          <p>13 Jack Rosenthal St, Manchester M15 4FN</p>
        </div>

        <div className="blurb-container container">
          <div className="blurb--title">
            <h2>INTRODUCING</h2>
          </div>
          <div className="blurb--subtitle">
            <h4>
              Izakaya <span className="bold">(‘‘Stay. Drink. Sake.’’)</span>{" "}
              from Japanese is a type of informal, cosy establishment where
              people eat, drink and socialize after a long day at work.{" "}
            </h4>
          </div>
        </div>
        <div className="jumping-vector-container">
          <m.img
            src={jumpingVectorBody}
            alt="line illustration of person dynamically jumping"
            className="jumping-vector jumping-vector--body"
            style={{ y: scaleY }}
          />
          <m.img
            src={jumpingVectorBao}
            alt="line illustration of a bao bun"
            className="jumping-vector jumping-vector--bao"
            style={{ y: scaleY1 }}
          />
          <m.img
            src={jumpingVectorBg}
            alt="line illustration of background shapes"
            className="jumping-vector jumping-vector--bg"
            style={{ y: scaleY2 }}
          />
          <m.img
            src={jumpingVectorFg}
            alt="line illustration of foreground shapes"
            className="jumping-vector jumping-vector--fg"
            style={{ y: scaleY3 }}
          />
        </div>
      </m.div>
      <div
        id="rd-widget-frame"
        style={{
          maxWidth: "600px",
          margin: "auto",
        }}
      ></div>

      <input
        id="rdwidgeturl"
        name="rdwidgeturl"
        value="https://booking.resdiary.com/widget/Standard/HakkaPo/48590?includeJquery=false"
        type="hidden"
      />
      <script
        type="text/javascript"
        src="https://booking.resdiary.com/bundles/WidgetV2Loader.js"
      ></script>
      {console.log(document.getElementById("rdwidgeturl"))}
    </section>
  );
};

export default Hero;

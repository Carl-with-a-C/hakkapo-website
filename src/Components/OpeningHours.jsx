import { m, useScroll, useTransform } from "framer-motion";

import Drink from "../Multimedia/Images/Seating.png";
import Bowl from "../Multimedia/Images/Fries.png";
import Love from "../Multimedia/Vectors/LovingDoodle.svg";

const OpeningHours = () => {
  const { scrollYProgress } = useScroll({ offset: [0.75, 1] });

  const scaleY = useTransform(scrollYProgress, [0.2, 1], ["25%", "0%"]);

  let hours = [
    {
      name: "Monday",
      time: "CLOSED",
    },
    {
      name: "Tuesday",
      time: "12:00 - 22:00",
    },
    {
      name: "Wednesday",
      time: "12:00 - 22:00",
    },
    {
      name: "Thursday",
      time: "12:00 - 22:00",
    },
    {
      name: "Friday",
      time: "12:00 - 23:00",
    },
    {
      name: "Saturday",
      time: "12:00 - 23:00",
    },
    {
      name: "Sunday",
      time: "12:00 - 20:00",
    },
  ];

  return (
    <section className="opening-hours-container container">
      <div className="opening-hours-column-container ">
        <div className="opening-hours-column left">
          <div className="o-h-img-container">
            <m.img
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
              The story behind <span>HAKKAPO</span> is as unique as its name
              suggests. Founded by three individuals, two originated from the{" "}
              <span>HAKKA</span> region and one from <span>PO</span>land.
            </h4>
            <h4 className="sign-off-desktop">
              So come, join us at <span>HAKKAPO</span>, where the essence of
              Japan meets the spirit of Manchester.
            </h4>
          </div>
        </div>
        <div className="opening-hours-column center">
          <div className="o-h-title">
            <h2>Opening Hours</h2>
            <m.svg
              className="green-circle"
              width="247"
              height="184"
              viewBox="0 0 247 184"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <m.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                d="M182.864 37.1463C133.016 5.45299 71.8489 11.6305 42.3347 27.404C19.6847 39.509 2.01282 66.4578 5.85037 104.613C8.66206 132.569 23.6972 169.033 93.5458 177.231C145.952 183.382 183.928 171.218 214.994 145.376C261.362 106.806 247.174 37.1463 171.171 5.45291"
                stroke="#E4FF77"
                strokeWidth="9.2311"
                strokeLinecap="round"
              />
            </m.svg>
          </div>
          <div className="o-h-times-container container">
            {hours.map((index) => {
              return (
                <div className="o-h-times" key={index.name}>
                  <m.div
                    className="o-h-times-after"
                    initial={{ width: "100" }}
                    whileInView={{ width: "0%" }}
                    transition={{ delay: 0.5, duration: 0.75 }}
                  />
                  <h3>
                    <strong>{index.name}</strong>
                  </h3>
                  <h3>{index.time}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="opening-hours-column right">
          <div className="o-h-img-container">
            <div className="o-h-blurb-container">
              <h4>
                Nestled at the heart of First Street, one of Manchester’s most
                vibrant neighbourhoods, <span>HAKKAPO</span> brings a relaxed
                and refined dining space that is more than just a restaurant:
                it's a celebration of Japanese culture and the heritage of its
                founders.
              </h4>
              <h4 className="sign-off-mobile">
                So come, join us at <span>HAKKAPO</span>, where the essence of
                Japan meets the spirit of Manchester.
              </h4>
            </div>
            <m.img
              loading="lazy"
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
        <m.img
          loading="lazy"
          src={Love}
          alt="person lovingly holding a bao bun"
          style={{ y: scaleY }}
        />
      </div>
    </section>
  );
};

export default OpeningHours;

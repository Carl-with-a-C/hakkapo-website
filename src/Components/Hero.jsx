import heroSplash from "../Multimedia/Images/HakkapoHeroSplash.png";
import jumpingVectorBody from "../Multimedia/Vectors/body.svg";
import jumpingVectorBao from "../Multimedia/Vectors/bao.svg";
import jumpingVectorBg from "../Multimedia/Vectors/background.svg";
import jumpingVectorFg from "../Multimedia/Vectors/foreground.svg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-img-container container">
        <img src={heroSplash} alt="a light and airy restaurant" />
      </div>
      <div className="lower-hero-container">
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
          <img
            src={jumpingVectorBody}
            alt="line illustration of person dynamically jumping"
            className="jumping-vector jumping-vector--body"
          />
          <img
            src={jumpingVectorBao}
            alt="line illustration of a bao bun"
            className="jumping-vector jumping-vector--bao"
          />
          <img
            src={jumpingVectorBg}
            alt="line illustration of background shapes"
            className="jumping-vector jumping-vector--bg"
          />
          <img
            src={jumpingVectorFg}
            alt="line illustration of foreground shapes"
            className="jumping-vector jumping-vector--fg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

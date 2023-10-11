import Drink from "../Multimedia/Images/HakkapoDrink.png";
import Bowl from "../Multimedia/Images/HakkapoBowl.png";
import Circle from "../Multimedia/Vectors/Circle.svg";
import Love from "../Multimedia/Vectors/LovingDoodle.svg";

const OpeningHours = () => {
  return (
    <section className="opening-hours-container container">
      <div className="opening-hours-column-container ">
        <div className="opening-hours-column left">
          <div className="o-h-img-container">
            <img src={Drink} alt="fancy cocktail" />
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
              <h3>
                <strong>Lunch</strong>
              </h3>
              <h3>11am - 1pm</h3>
            </div>
            <div className="o-h-times">
              <h3>
                <strong>Supper</strong>
              </h3>
              <h3>4pm - 11pm</h3>
            </div>
          </div>
          <div className="o-h-day">
            <h3>EVERYDAY</h3>
          </div>
          <img src={Circle} alt="green circle" />
        </div>
        <div className="opening-hours-column right">
          <div className="o-h-img-container">
            <img src={Bowl} alt="noodle bowl" />
          </div>
        </div>
      </div>
      <div className="love-doodle-img-container">
        <img src={Love} alt="person lovingly holding a bao bun" />
      </div>
    </section>
  );
};

export default OpeningHours;

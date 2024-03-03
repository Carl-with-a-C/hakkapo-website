import { m } from "framer-motion";
import HeaderLogo from "../Multimedia/Vectors/HakkapoWordmark.svg";

const Nav = ({ setMenuOpen, menuOpen, drinksOpen, isLoading }) => {
  return (
    <header className="header">
      <div className="nav-container container">
        <m.div
          className="mobile-btn-container"
          initial={{ x: "200%" }}
          animate={{ x: "0" }}
          transition={{
            delay: 2.25,
            duration: 0.95,
            ease: [0.78, 0.01, 0.21, 1],
          }}
        >
          <m.button
            className="mobile-menu-btn"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            animate={{ x: menuOpen ? "200%" : "0%" }}
            transition={{ duration: 0.95, ease: [0.78, 0.01, 0.21, 1] }}
          >
            <h4>menu</h4>
          </m.button>
        </m.div>
        <m.div
          className="address-container"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.75 }}
        >
          <p>13 Jack Rosenthal St, Manchester M15 4FN</p>
        </m.div>
        <m.div
          className="logo-container"
          animate={
            isLoading
              ? { opacity: 0 }
              : {
                  opacity: 1,
                  y: ["40vh", "40vh", "0vh"],
                  scale: [0, 1.5, 1],
                }
          }
          transition={{
            duration: 2.3,
            ease: [0.78, 0.01, 0.21, 1],
          }}
        >
          <m.img
            src={HeaderLogo}
            alt="Hakkapo Logo"
            animate={{ y: menuOpen || drinksOpen ? "-150%" : "0" }}
            transition={{ duration: 0.75, ease: [0.78, 0.01, 0.21, 1] }}
          />
        </m.div>
        <m.div
          className="nav-links-container"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.75 }}
        >
          <div className="nav-link contact-link">
            <a href="#footer">
              <p>contact us</p>
            </a>
          </div>
          <div className="nav-link menu-link">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <p>menu</p>
            </button>
          </div>
        </m.div>
      </div>
    </header>
  );
};

export default Nav;

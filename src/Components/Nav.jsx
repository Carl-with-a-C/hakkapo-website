import HeaderLogo from "../Multimedia/Vectors/HakkapoWordmarkHEADER.svg";

const Nav = () => {
  return (
    <header className="header">
      <div className="nav-container container">
        <div className="address-container">
          <p>123 Manchester Building, Manchester, M1 11A</p>
        </div>
        <div className="logo-container">
          <img src={HeaderLogo} alt="Hakkapo Logo" />
        </div>
        <div className="nav-links-container">
          <div className="nav-link contact-link">
            <p>contact us</p>
          </div>
          <div className="nav-link menu-link">
            <p>menu</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;

import { footerLinks } from "../Data/constants";

const Footer = () => {
  return (
    <footer className="footer-container container" id="footer">
      <div className="footer-links--container">
        {footerLinks.map((link, index) => {
          return (
            <div className="footer-links--column" key={index}>
              <p className="footer-links--title">{link.title}</p>
              <ul>
                {link.links.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={link.urls[index]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h4 className="footer-links">{item}</h4>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className="footer-links--buztek">
          <a href="https://buztek.co" target="_blank" rel="noreferrer">
            <p className="buztek">
              <span className="bold">Buztek Ltd</span> 2024 all rights reserved
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { footerLinks } from "../Data/constants";

const Footer = () => {
  return (
    <footer className="footer-container container">
      <div className="footer-links--container">
        {footerLinks.map((link, index) => {
          return (
            <div className="footer-links--column" key={index}>
              <p className="footer-links--title">{link.title}</p>
              <ul>
                {link.links.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={link.urls[index]}>
                        <h4 className="footer-links">{item}</h4>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;

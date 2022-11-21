import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <div className="sdds-footer" id="footer">
        <div className="sdds-footer-main">
          <ul className="sdds-footer-main-links">
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
          <ul className="sdds-footer-social-links">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
          <div className="sdds-footer-main-brand">
            <p>Copyright &copy; 2021 Scania</p>
          </div>
        </div>
      </div>
    </>
  );
};

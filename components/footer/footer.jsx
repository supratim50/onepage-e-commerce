import Link from "next/link";
import {
  FiChevronUp,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import RoundButton from "../buttons/roundBtn";

const Footer = () => {
  const mouseOver = (e) => {
    const target = e.target;
    console.log(target);

    if (target.getAttribute("class") == "footer-icon") {
      // check if it is img
      var li = target;
      console.log(li);
      var prevLi = li.previousElementSibling;
      if (prevLi) {
        prevLi.classList.add("prev");
        console.log(prevLi);
      }
    }
  };
  return (
    <section className="section-mt">
      <div className="text-center">
        <a href="#nav-bar" className="text-decoration-none">
          <div>
            <i className="mb-4 text-paragraph color-black-2">
              <FiChevronUp />
            </i>
            <p className="text-paragraph color-black-2 mb-4 pb-3 font-weight-bold">
              Back to top
            </p>
          </div>
        </a>

        <div className="footer-icon-box mb-4 pb-2" onMouseOver={mouseOver}>
          <ul className="d-flex justify-content-center align-items-center list-unstyled">
            <li className="footer-icon">
              <Link href="#">
                <a>
                  <RoundButton classList="sub-heading button-lg bg-color-primary color-black mx-3">
                    <FiFacebook />
                  </RoundButton>
                </a>
              </Link>
            </li>
            <li className="footer-icon">
              <Link href="#">
                <a>
                  <RoundButton classList="sub-heading button-lg bg-color-primary color-black mx-3">
                    <FiInstagram />
                  </RoundButton>
                </a>
              </Link>
            </li>
            <li className="footer-icon">
              <Link href="#">
                <a>
                  <RoundButton classList="sub-heading button-lg bg-color-primary color-black mx-3">
                    <FiTwitter />
                  </RoundButton>
                </a>
              </Link>
            </li>
            <li className="footer-icon">
              <Link href="#">
                <a>
                  <RoundButton classList="sub-heading button-lg bg-color-primary color-black mx-3">
                    <FiYoutube />
                  </RoundButton>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-center align-items-center mb-5 pb-5">
          <div className="special-text font-weight-bold px-3 px-md-5 footer-details">
            Privacy
          </div>
          <div className="special-text font-weight-bold px-3 px-md-5 footer-details">
            Terms & Conditions
          </div>
          <div className="special-text font-weight-bold px-3 px-md-5 footer-details">
            FavFly
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-details:not(:last-child) {
          border-right: 1px solid #000;
        }
      `}</style>
    </section>
  );
};

export default Footer;

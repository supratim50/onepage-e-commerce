import { FiChevronUp } from "react-icons/fi";
import RoundButton from "../buttons/roundBtn";

const Footer = () => {
  return (
    <section className="section-mt">
      <div className="text-center">
        <a href="#navbar" className="text-decoration-none">
          <div>
            <i className="mb-4 text-paragraph color-black-2">
              <FiChevronUp />
            </i>
            <p className="text-paragraph color-black-2 mb-4 pb-3 font-weight-bold">
              Back to top
            </p>
          </div>
        </a>

        <div className="mb-4 pb-2">
          <ul className="d-flex justify-content-center align-items-center list-unstyled">
            <li>
              <RoundButton classList="sub-heading button-lg bg-color-primary color-black mx-3">
                H
              </RoundButton>
            </li>
            <li>
              <RoundButton classList="sub-heading button-lg bg-color-primary color-black mx-3">
                H
              </RoundButton>
            </li>
            <li>
              <RoundButton classList="sub-heading button-lg bg-color-primary color-black mx-3">
                H
              </RoundButton>
            </li>
            <li>
              <RoundButton classList="sub-heading button-lg bg-color-primary color-black mx-3">
                H
              </RoundButton>
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

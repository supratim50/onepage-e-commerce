import { FiX } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

const TopDiscount = () => {
  const [close, setClose] = useState(false);

  const closeOffer = () => setClose(true);

  return (
    <div
      className={`${
        close ? "close" : ""
      } top-discount py-4 px-3 border d-flex flex-column flex-md-row justify-content-center align-items-start align-items-md-center`}
    >
      <p className="text-offer text-paragraph mb-3 mb-md-0 color-secondary">
        Limited time offer, Hurry up!
      </p>
      {/* discount text */}
      <p className="discount-text color-secondary text-paragraph text-uppercase mb-0 ml-md-4 font-weight-bold">
        Up to <span className="color-primary">30%</span> Off on all shoes{" "}
        <Link href="#">
          <a className="text-decoration-none">
            <span className="ml-3 ml-md-4 color-primary">visit</span>
          </a>
        </Link>
      </p>

      <i className="cross sub-heading color-secondary" onClick={closeOffer}>
        <FiX />
      </i>

      <style jsx>{`
        .top-discount {
          position: relative;
          background-color: #121212 !important;
          transition: 0.5s;
        }
        .text-offer {
          font-size: 16px;
          line-height: 24px;
        }
        .discount-text {
          line-height: 19px;
          letter-spacing: 0.11em;
        }
        .cross {
          position: absolute;
          top: 50%;
          right: 1%;
          transform: translate(-50%, -50%);
        }
        @media screen and (max-width: 767px) {
          .cross {
            top: 20%;
          }
        }

        .close {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default TopDiscount;

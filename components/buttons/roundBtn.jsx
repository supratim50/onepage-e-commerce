import React from "react";

const RoundBtn = ({ children, onClick, classList }) => {
  return (
    <div
      className={`button rounded-circle d-flex justify-content-center align-items-center ${
        classList ? classList : ""
      }`}
      onClick={onClick && onClick}
    >
      {children}
      <style jsx>{`
        .button {
          transition: 0.5s !important;
        }

        .button-md {
          width: 51px !important;
          height: 51px !important;
          box-shadow: 0px 0px 10px rgba(255, 184, 0, 0.52);
        }

        @media screen and (max-width: 767px) {
          .button-md {
            width: 35px !important;
            height: 35px !important;
            cursor: pointer;
          }
        }

        .button-lg {
          width: 61px !important;
          height: 61px !important;
          box-shadow: 0px 0px 10px rgba(255, 184, 0, 0.52);
        }

        @media screen and (max-width: 767px) {
          .button-lg {
            width: 45px !important;
            height: 45px !important;
            cursor: pointer;
          }
        }

        .hover:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default RoundBtn;

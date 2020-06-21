const PrimaryButton = ({ classList, children }) => {
  return (
    <button
      className={`button border-0 bg-color-black color-secondary d-flex justify-content-center text-uppercase ${
        classList ? classList : ""
      }`}
    >
      {children}
      <style jsx>{`
        .button {
          padding: 14px 49px;
          letter-spacing: 0.11em;
          transition: 0.5s;
        }

        .button:hover {
          background-color: #ffb800 !important;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          color: #121212 !important;
        }
        .w-full {
          width: 100% !important;
        }

        @media screen and (max-width: 767px) {
          .w-sm-full {
            width: 100% !important;
          }
        }
      `}</style>
    </button>
  );
};

export default PrimaryButton;

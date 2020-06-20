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

import { FiTarget } from "react-icons/fi";

const CatagoriesLink = ({ text, active }) => {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center font-weight-bold mx-2 mx-md-3 px-2 px-md-4 ${
        active ? "color-primary" : "color-black-2"
      }`}
    >
      <p className="special-text mb-1">{text}</p>
      <p className={`dot mb-0 ${active ? "" : "hide"}`}>
        <FiTarget />
      </p>

      <style jsx>{`
        .hide {
          opacity: 0 !important;
        }

        .dot {
          font-size: 9px !important;
        }
      `}</style>
    </div>
  );
};

export default CatagoriesLink;

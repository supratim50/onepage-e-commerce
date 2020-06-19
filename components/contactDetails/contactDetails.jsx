import RoundButton from "../buttons/roundBtn";

const ContactDetails = ({ text, icon, classList }) => {
  return (
    <div
      className={`d-flex justify-content-start align-items-center ${
        classList ? classList : ""
      }`}
    >
      <RoundButton classList="button-lg bg-color-primary sub-heading mr-4">
        {icon}
      </RoundButton>
      <div className="contact-box px-3 py-2 px-md-4 py-md-3 d-inline-block bg-color-secondary">
        <p className="special-text font-weight-bold mb-0">{text}</p>
      </div>
      <style jsx>{`
        .contact-box {
          border-radius: 25px;
          border: 1px solid #fafafa;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
};

export default ContactDetails;

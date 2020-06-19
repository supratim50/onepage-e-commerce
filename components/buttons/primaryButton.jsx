const PrimaryButton = ({ classList, children }) => {
  return (
    <div
      className={`bg-color-black color-secondary d-flex justify-content-center text-uppercase ${
        classList ? classList : ""
      }`}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;

const Card = ({ image, heading, onClick }) => {
  return (
    <>
      <div className="card mx-auto border-0" onClick={onClick}>
        <img
          className="card-img-top img-fluid rounded-lg"
          src={image}
          alt="Product Image"
        />
        <div className="card-body py-3 py-md-4 px-0 mb-4 mb-md-0">
          <h3 className="special-text color-black-2 font-weight-bold mb-0">
            {heading}
          </h3>
        </div>
      </div>
      <style jsx>{`
        .card {
          max-width: 239px !important;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Card;

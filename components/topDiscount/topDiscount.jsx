const TopDiscount = () => {
  return (
    <div className="top-discount py-4 px-3 border d-flex flex-column flex-md-row justify-content-center align-items-start align-items-md-center">
      <p className="text-offer text-paragraph mb-3 mb-md-0 color-secondary">
        Limited time offer, Hurry up!
      </p>
      {/* discount text */}
      <p className="discount-text color-secondary text-paragraph text-uppercase mb-0 ml-md-4 font-weight-bold">
        Up to <span className="color-primary">30%</span> Off on all shoes{" "}
        <span className="ml-3 ml-md-4 color-primary">visit</span>
      </p>

      <style jsx>{`
        .top-discount {
          background-color: #121212 !important;
        }
        .text-offer {
          font-size: 16px;
          line-height: 24px;
        }
        .discount-text {
          line-height: 19px;
          letter-spacing: 0.11em;
        }
      `}</style>
    </div>
  );
};

export default TopDiscount;

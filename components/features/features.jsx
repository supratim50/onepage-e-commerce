const Features = ({ icon, title }) => {
  return (
    <>
      <i className="feature-icon color-primary">{icon}</i>
      <p className="special-text mt-4 pt-md-3 mb-0 text-center">{title}</p>

      <style jsx>{`
        .feature-icon {
          font-size: 55px;
        }

        @media screen and (max-width: 767px) {
          .feature-icon {
            font-size: 35px;
          }
        }
      `}</style>
    </>
  );
};

export default Features;

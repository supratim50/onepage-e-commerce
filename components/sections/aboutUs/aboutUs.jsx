import PrimaryHeading from "../../heading/primaryHeading";

const AboutUs = () => {
  return (
    <section className="section-mt">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-md-start justify-content-center align-items-center">
            <div className="image-box d-flex justify-content-center align-items-center mb-5 mb-md-0 pb-2 pb-md-0">
              <img
                className="about-image img-fluid"
                src="/assets/images/about-img.png"
                alt="About Image"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="about-text-box">
              <PrimaryHeading
                text="About Us"
                classList="text-center text-md-left font-weight-bold mb-5 pb-2"
              />
              <p className="text-paragraph text-muted mb-0">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat
                nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
                pariatur duis deserunt mollit dolore cillum minim tempor enim.
                Elit aute irure tempor cupidatat incididunt sint deserunt ut
                voluptate aute id deserunt nisi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-box {
          max-height: 376px !important;
          max-width: 442px !important;

          position: relative;
        }

        @media screen and (max-width: 767px) {
          .image-box {
            max-width: none !important;
            max-height: none !important;
          }
        }

        .rectangle-svg {
          position: absolute;
          max-width: 386px !important;
          max-height: 320px !important;
          top: 0;
          left: 0;
          z-index: -1;
        }

        @media screen and (max-width: 767px) {
          .rectangle-svg,
          .about-image {
            max-width: 274px !important;
            max-height: 227px !important;
          }
        }
        .group-svg {
          position: absolute;
          max-width: 98px;
          max-height: 98px;
          bottom: 0;
          right: 0;
          z-index: -1;
        }

        @media screen and (max-width: 767px) {
          .group-svg {
            max-width: 70px;
            max-height: 70px;
          }
        }
        .about-text-box {
          max-width: 436px !important;
        }
        .text-paragraph {
          line-height: 24px;
          letter-spacing: 0.035em;
        }
      `}</style>
    </section>
  );
};
// 376 442
export default AboutUs;

import PrimaryBtn from "../buttons/primaryButton";

const Carousel = () => {
  return (
    <section className="carousel-box">
      <div className="row w-100 mx-0">
        <div className="col-12 col-lg-6">
          <div className="intro-box">
            <h1 className="intro-heading color-black text-center text-lg-left">
              Puddle Perfection
            </h1>
            <p className="sub-heading color-black mt-4 py-3 font-weight-bold text-center text-lg-left">
              Most comfy and nice looking sneakers you can find around!
            </p>
            <PrimaryBtn classList="mt-4 mx-auto mx-lg-0 w-sm-full">
              Shop now
            </PrimaryBtn>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
          <div className="image-box p-2 bg-color-primary">
            <img
              src="/assets/images/intro.png"
              alt="Intro Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .carousel-box {
          background-image: linear-gradient(122deg, #ffb800 60%, #fff 50%);
          padding: 108px 180px;
        }

        .intro-box {
          max-width: 375px;
        }
        @media screen and (max-width: 1100px) {
          .carousel-box {
            padding: 70px 25px;
          }

          .intro-box {
            max-width: 100%;
          }
        }

        .intro-heading {
          font-weight: 600;
          font-size: 72px;
          line-height: 72px;
          letter-spacing: 0.035em;
        }

        @media screen and (max-width: 992px) {
          .carousel-box {
            padding: 50px 15px;
            background-image: linear-gradient(132deg, #ffb800 60%, #fff 50%);
          }

          .intro-box {
            max-width: 100%;
          }
          .intro-heading {
            font-size: 50px;
            line-height: 100%;
            letter-spacing: 0.035em;
          }
        }

         {
          /* images */
        }
        .image-box {
          max-width: 100%;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Carousel;

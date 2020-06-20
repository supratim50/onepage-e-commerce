import Link from "next/link";
// import Scrollspy from "react-scrollspy";

const NavBar = () => {
  return (
    <>
      <div className="py-3 d-block mb-0 d-md-none text-center bg-color-secondary">
        <Link href="#">
          <a className="mb-0 sub-heading color-black font-weight-bold text-decoration-none">
            Brand Name
          </a>
        </Link>
      </div>

      <section className="sticky-top">
        <div className="nav-bar bg-color-secondary p-0">
          <div
            className="py-3 py-md-0 px-3 container d-flex flex-md-row flex-column justify-content-center align-items-center"
            id="navbar"
          >
            <div className="d-md-inline-block d-none">
              <Link href="">
                <a className="mb-0 sub-heading color-black font-weight-bold text-decoration-none">
                  Brand Name
                </a>
              </Link>
            </div>

            {/* links */}
            {/* <Scrollspy
            items={["products", "about-us", "contact-us"]}
            currentClassName="is-current"
          ></Scrollspy> */}
            <div className="py-md-4 py-0 nav-link-box ml-md-auto d-flex justify-content-between align-items-center">
              <a
                href="#products"
                className="nav-link p-0 special-text color-black font-weight-bold text-decoration-none"
              >
                Product
              </a>
              <a
                href="#about-us"
                className="nav-link p-0 special-text color-black font-weight-bold text-decoration-none"
              >
                About us
              </a>
              <a
                href="#contact-us"
                className="nav-link p-0 special-text color-black font-weight-bold text-decoration-none"
              >
                Contact Us
              </a>
            </div>
            {/* <Scrollspy /> */}
          </div>
        </div>
        <style jsx>{`
          .nav-bar {
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          }

          .nav-link:not(:first-child) {
            margin-left: 60px !important;
          }

          @media screen and (max-width: 767px) {
            .nav-link:not(:first-child) {
              margin-left: 40px !important;
            }
          }

           {
            /* .is-current {
          color: red !important;
        } */
          }
        `}</style>
      </section>
    </>
  );
};

export default NavBar;

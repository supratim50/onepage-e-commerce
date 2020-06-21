import Link from "next/link";
import NavLink from "../links/catagoriesLink";
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

      <section className="sticky-top" id="nav-bar">
        <div className="nav-bar bg-color-secondary p-0">
          <div className="py-3 py-md-0 px-3 container d-flex flex-md-row flex-column justify-content-center align-items-center">
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
            <div className="navlink-box py-md-4 py-0 nav-link-box ml-md-auto d-flex justify-content-between align-items-center">
              <NavLink key={1} text="Products" dotNone active />
              <NavLink key={2} text="AboutUs" dotNone />
              <NavLink key={3} text="ContactUs" dotNone />
              <NavLink key={4} text="Option1" dotNone />
            </div>
            {/* <Scrollspy /> */}
          </div>
        </div>
        <style jsx>{`
          .sticky-top {
            top: -1px;
          }
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
          @media screen and (max-width: 992px) {
            .navlink-box {
              width: 100%;
              max-width: 550px;
              overflow: scroll;
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

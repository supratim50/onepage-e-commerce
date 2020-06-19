import Link from "next/link";

import TopDiscount from "../topDiscount/topDiscount";

const NavBar = () => {
  return (
    <section>
      <TopDiscount />
      <div className="bg-color-secondary">
        <div
          className="py-md-4 p-3 container d-flex flex-md-row flex-column justify-content-center align-items-center"
          id="navbar"
        >
          <div className="d-inline-block logo">
            <Link href="">
              <a className="mb-0 sub-heading color-black font-weight-bold text-decoration-none">
                Brand Name
              </a>
            </Link>
          </div>

          {/* links */}
          <div className="nav-link-box ml-md-auto d-flex justify-content-between align-items-center">
            <Link href="#">
              <a className="nav-link p-0 special-text color-black font-weight-bold text-decoration-none">
                Product
              </a>
            </Link>
            <Link href="#">
              <a className="nav-link p-0 special-text color-black font-weight-bold text-decoration-none">
                About us
              </a>
            </Link>
            <Link href="#">
              <a className="nav-link p-0 special-text color-black font-weight-bold text-decoration-none">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 767px) {
          .logo {
            margin-bottom: 39px !important;
          }
        }

        .nav-link:not(:first-child) {
          margin-left: 60px !important;
        }
         {
          /* @media screen and (max-width: 767px) {
          .nav-link:not(:first-child) {
            margin-left: 45px !important;
          }
        } */
        }
      `}</style>
    </section>
  );
};

export default NavBar;

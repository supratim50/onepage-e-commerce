import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import CatagoriesLink from "../../links/catagoriesLink";
import Card from "../../cards/card";
import PrimaryButton from "../../buttons/primaryButton";
import PrimaryHeading from "../../heading/primaryHeading";
import Quantity from "../../quantity/quantity";

const SmallImage = ({ imgUrl }) => {
  return (
    <div className="smallImage overflow-hidden rounded-lg">
      <img className="img-fluid" src={imgUrl} alt="Product Image" />
      <style jsx>{`
        .smallImage {
          max-width: 109px !important;
          max-height: 86px !important;
        }

        @media screen and (max-width: 767px) {
          .smallImage {
            max-width: 73px !important;
            max-height: 57px !important;
          }
        }
      `}</style>
    </div>
  );
};

const Products = () => {
  const [show, setShow] = useState(false);

  const showDetails = () => setShow(!show);

  const productDetails = [
    {
      id: 1,
      image: "/assets/images/product-img.png",
      heading: "Red Sports Sneaker",
    },
    {
      id: 2,
      image: "/assets/images/product-img.png",
      heading: "Red Sports Sneaker",
    },
    {
      id: 3,
      image: "/assets/images/product-img.png",
      heading: "Red Sports Sneaker",
    },
    {
      id: 4,
      image: "/assets/images/product-img.png",
      heading: "Red Sports Sneaker",
    },
  ];

  return (
    <section className="section-mt">
      <div className="container">
        <PrimaryHeading
          text="Products"
          classList="text-center text-lg-left font-weight-bold mb-5 pb-2"
        />
        {/* catagories */}
        <div className="d-flex justify-content-center align-items-center mb-5 pb-4">
          <div className="catagory-box d-flex justify-content-start align-items-center">
            <CatagoriesLink text="Mens" active />
            <CatagoriesLink text="womens" />
            <CatagoriesLink text="Kids" />
            <CatagoriesLink text="Sportswear" />
            <CatagoriesLink text="Sportswear" />
            <CatagoriesLink text="Sportswear" />
          </div>
        </div>
        {/* product card */}
        <div className="row">
          {productDetails.map((product) => (
            <div className="col-6 col-md-3">
              <Card
                image={product.image}
                heading={product.heading}
                onClick={showDetails}
              />
            </div>
          ))}
        </div>
      </div>

      {/* =================================== show details ============================ */}
      <div
        className={`${
          show ? "show" : ""
        } detail-background d-flex justify-content-center align-items-center`}
        onClick={showDetails}
      ></div>
      <div
        className={`${
          show ? "show" : ""
        } detail-main-box px-1 py-5 p-md-5 bg-color-secondary`}
      >
        <div className="details-box">
          <div className="row mt-4 w-100 mx-auto">
            <div className="col-12 col-md-7 p-2">
              {/* product image */}
              <div className="product-img-box rounded-lg overflow-hidden w-100 mb-4">
                <img
                  className="product-img"
                  src="/assets/images/product-img.png"
                  alt="Product Image"
                />
              </div>
              {/* product images */}
              <div className="d-flex justify-content-between align-items-center pt-md-3">
                {productDetails.map((product) => (
                  <SmallImage key={product.id} imgUrl={product.image} />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-5 p-2 pl-3 d-flex flex-column">
              {/* product-details */}
              <div className="product-text-box pt-3 pt-md-0 mt-4 mt-md-0">
                <h2 className="sub-heading font-weight-bold mb-4 pb-md-2 text-truncate">
                  Red Sports Sneaker
                </h2>
                <p className="text-paragraph color-black-2 mb-4 pb-3 mb-md-0 pb-md-0">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.
                </p>
              </div>
              {/* price */}
              <div className="mt-auto">
                {/* quantity */}
                <p className="special-text color-black-2 mb-4">Quantity</p>
                <div className="mb-4 pb-3 pb-md-0 mb-md-5">
                  <Quantity />
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-end mb-3">
                  <div className="sub-heading mb-0 font-weight-bold d-flex align-items-center">
                    <FaRupeeSign />
                    <h2 className="price mb-0 font-weight-bold">16000</h2>
                  </div>
                  <h3 className="sub-heading mb-0">20000</h3>
                  <p className="special-text color-primary mb-0">20% off</p>
                </div>
                {/* button */}
                <PrimaryButton classList="py-3 w-full">Shop Now</PrimaryButton>
              </div>
            </div>
          </div>

          <div className="cross-box p-1 d-inline-block" onClick={showDetails}>
            <i className="cross sub-heading font-weight-bold">
              <FiX />
            </i>
          </div>
        </div>
      </div>
      {/* ======================= show details ============================ */}
      <style jsx>{`
        .catagory-box {
          max-width: 100%;
          overflow: scroll !important;
        }
        /* show details */
        .detail-background {
          width: 100vw !important;
          height: 100vh !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          background: rgba(255, 255, 255, 0.8);

          z-index: 9999;

          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
        }

        .show {
          opacity: 1 !important;
          visibility: visible !important;
        }

        .detail-main-box {
          width: 100%;
          max-width: 984px;
          box-shadow: 4px 4px 50px rgba(21, 45, 105, 0.1);
          border-radius: 10px;
          overflow: scroll;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          z-index: 10000;

          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
        }
        @media screen and (max-width: 767px) {
          .detail-main-box {
            height: 100% !important;
            top: 0 !important;
            left: 0 !important;
            transform: translate(0, 0);
          }
        }

        .product-img {
          width: 100% !important;
          max-height: 400px !important;
          object-fit: cover;
        }

        @media screen and (max-width: 767px) {
          .product-img {
            max-height: 236px !important;
          }
        }

        .product-text-box {
          max-height: 400px !important;
          overflow: scroll;
        }

        .price {
          font-size: 30px !important;
        }

        .cross-box {
          position: absolute;
          top: 15px;
          right: 25px;
          cursor: pointer;
        }

        @media screen and (max-height: 767px) {
          .cross-box {
            top: 20px;
            right: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;

import { useState, useEffect } from "react";

import Loader from "../components/loader/loader";
import TopDiscount from "../components/topDiscount/topDiscount";
import NavBar from "../components/navBar/navBar";
import Intro from "../components/intro/intro";
import AboutUs from "../components/sections/aboutUs/aboutUs";
import Products from "../components/sections/products/products";
import Faq from "../components/sections/faq/faq";
import Contact from "../components/sections/contact/contact";
import Features from "../components/sections/feature/features";
import Footer from "../components/footer/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TopDiscount />
          <NavBar />
          <Intro />
          <AboutUs />
          <Products />
          <Faq />
          <Contact />
          <Features />
          <Footer />
        </>
      )}
    </>
  );
}

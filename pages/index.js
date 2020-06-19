import Head from "next/head";

import NavBar from "../components/navBar/navBar";
import Carousel from "../components/carousel/carousel";
import AboutUs from "../components/sections/aboutUs/aboutUs";
import Products from "../components/sections/products/products";
import Faq from "../components/sections/faq/faq";
import Contact from "../components/sections/contact/contact";
import Features from "../components/sections/feature/features";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
      <AboutUs />
      <Products />
      <Faq />
      <Contact />
      <Features />
      <Footer />
    </>
  );
}

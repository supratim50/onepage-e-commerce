import Head from "next/head";

import NavBar from "../components/navBar/navBar";
import Carousel from "../components/carousel/carousel";

export default function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
    </>
  );
}

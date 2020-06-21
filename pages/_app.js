// /*
//  *** Tutorial: https://reacttricks.com/nested-dynamic-layouts-in-next-apps/
//  */

// // import React from 'react';
// import App from "next/app";
// import Head from "next/head";
// import DefaultLayout from "../components/layouts/default-layout";
// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     const Layout = Component.Layout || DefaultLayout;

//     return (
//       <>
//         <Head>
//           {/* bootstrap css */}
//           <link rel="stylesheet" href="/assets/css/bootstrap-css.css" />
//           {/* custom css */}
//           <link rel="stylesheet" href="/assets/css/global.css" />
//         </Head>
//         {/* <SnackbarProvider> */}
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//         {/* </SnackbarProvider> */}
//       </>
//     );
//   }
// }

// export default MyApp;

import "../public/assets/css/bootstrap-css.css";
import "../public/assets/css/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;

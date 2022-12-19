import App from "next/app";
import React from "react";
import withReactRouter from "../next/with-react-router";
import '../global.css'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default withReactRouter(MyApp);

/* eslint-disable no-unused-vars */
import React from "react";
import LayoutRoutes from "./LayoutRoutes";
import Header from "./Header";
export default function Layout(props) {
  return (
    //<div id="wrapper" className={isActive ? 'toggled' : null} >
    <>
      <header>
        <Header />
      </header>
      <div id="wrapper">
        <LayoutRoutes />
      </div>
    </>
  );
}

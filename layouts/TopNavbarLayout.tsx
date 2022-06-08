import React from "react";
import Header from "../components/Header/Header";

const TopNavbarLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default TopNavbarLayout;

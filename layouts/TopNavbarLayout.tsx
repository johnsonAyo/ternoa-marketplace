import React from "react";
import Header from "../components/Header/Header";

const TopNavbarLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default TopNavbarLayout;

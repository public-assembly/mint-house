import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

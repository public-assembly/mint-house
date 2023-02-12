import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "PA Mint House",
  description: "Welcome to PA Mint House!",
}
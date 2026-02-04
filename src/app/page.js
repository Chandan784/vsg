"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

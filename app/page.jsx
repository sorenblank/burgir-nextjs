"use client";

import Header from "@/app/pages/Header";
import Hero from "@/app/pages/Hero";
import Promo from "@/app/pages/Promo";
import About from "@/app/pages/About";
import Menu from "@/app/pages/Menu";
import CTA from "@/app/pages/CTA";
import Delivery from "@/app/pages/Delivery";
import Reviews from "@/app/pages/Reviews";
import Banner from "@/app/pages/Banner";
import Blog from "@/app/pages/Blog";

export default function Home() {
  return (
    <>
    <div>
      <Header />
      <Hero />
      <Promo />
      <About />
      <Menu />
      <CTA />
      <Delivery />
      <Reviews />
      <Banner />
      <Blog />
    </div>
    </>
  );
}

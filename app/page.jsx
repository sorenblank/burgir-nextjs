"use client";

// Layout
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
import Reservation from "@/app/pages/Reservation";
import Footer from "@/app/pages/Footer";

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
      <Reservation />
      <Footer/>
    </div>
    </>
  );
}

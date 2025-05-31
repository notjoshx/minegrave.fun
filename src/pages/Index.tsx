
import React, { useEffect } from "react";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Add animation classes to elements when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-background">
      <Cursor />
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;


import React, { useEffect, useRef } from "react";
import { ChevronDown, Shield, Server } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const headingElements = document.querySelectorAll(".animate-on-scroll");
    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleScrollDown = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-28 w-80 h-80 bg-badminner/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-28 w-80 h-80 bg-badminner/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block animate-fade-in opacity-0 mb-4">
            <span className="bg-badminner/10 text-badminner px-4 py-2 rounded-full text-sm font-medium border border-badminner/20">
              Premium Hosting Solutions
            </span>
          </div>
          
          <h1 className="hero-heading opacity-0 animate-on-scroll animate-delay-200">
            Elevate Your <span className="text-gradient">Online</span> Experience
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto opacity-0 animate-on-scroll animate-delay-400">
            MineGrave delivers premium Minecraft and VPS hosting solutions with unmatched performance.
            Experience faster speeds, enhanced security, and maximum uptime.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-on-scroll animate-delay-600">
            <a href="#" className="btn-primary w-full sm:w-auto hover-effect">
              Get Started Now
            </a>
            <a href="#features" className="btn-secondary w-full sm:w-auto hover-effect">
              Learn More
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 animate-on-scroll animate-delay-800">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-badminner/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-badminner" />
              </div>
              <h3 className="text-xl font-bold mb-2">Minecraft Servers</h3>
              <p className="text-foreground/70 text-center">
                High-performance Minecraft servers with plugin support
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-badminner/20 rounded-full flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-badminner" />
              </div>
              <h3 className="text-xl font-bold mb-2">VPS Hosting</h3>
              <p className="text-foreground/70 text-center">
                Reliable virtual private servers for all your hosting needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover-effect"
        onClick={handleScrollDown}
      >
        <ChevronDown className="h-10 w-10 text-badminner" />
      </div>
    </div>
  );
};

export default Hero;

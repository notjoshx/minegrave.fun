
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "py-4 bg-background/80 backdrop-blur-lg shadow-md"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold flex items-center hover-effect"
        >
          <span className="text-white">MineGrave </span>
          <span className="text-badminner">Nodes</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/vps" className="nav-link">
            VPS
          </Link>
          <Link to="/minecraft" className="nav-link">
            Minecraft
          </Link>
          <a href="https://discord.gg/hUNA4pz4Fv" className="btn-primary ml-4 hover-effect">
            Discord
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover-effect"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-badminner" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <a
            href="https://discord.gg/invite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Discord Server
          </a>
          <Link
            to="/minecraft"
            className="text-xl nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Minecraft
          </Link>
          <Link
            to="/vps"
            className="text-xl nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            VPS
          </Link>
          <a
            href="#contact"
            className="text-xl nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#"
            className="btn-primary mt-4 hover-effect"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

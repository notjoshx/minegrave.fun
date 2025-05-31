
import React from "react";
import { MessageSquare, Server, Gamepad2, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <a href="#" className="text-2xl font-bold flex items-center mb-6">
              <span className="text-badminner">MineGrave</span>
              <span className="text-white"> Nodes</span>
            </a>
            <p className="text-foreground/70 mb-6">
              Elevating online experiences with premium VPS and Minecraft. 
              hosting solutions and unparalleled performance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://discord.gg/BaJcJzk93U"
                className="text-foreground/60 hover:text-badminner transition-colors duration-300 hover-effect"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="vps"
                className="text-foreground/60 hover:text-badminner transition-colors duration-300 hover-effect"
              >
                <Server className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/minegrave"
                className="text-foreground/60 hover:text-badminner transition-colors duration-300 hover-effect"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="comingsoon"
                  className="text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect"
                >
                  Minecraft Hosting
                </a>
              </li>
              <li>
                <a
                  href="vps"
                  className="text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect"
                >
                  VPS Solutions
                </a>
              </li>
              <li>
                <a
                  href="vps"
                  className="text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/BaJcJzk93U"
                  className="text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tos"
                  className="text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="pp"
                  className="text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-badminner mr-3" />
                <a
                  href="mailto:support@minegrave.fun"
                  className="text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect"
                >
                  support@minegrave.fun
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-background/50 border border-white/10 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-badminner/50 w-full"
                />
                <button className="bg-badminner hover:bg-badminner-dark rounded-r-full px-4 transition-colors duration-300 hover-effect">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-foreground/60">
          <p>© {new Date().getFullYear()} MineGrave Nodes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield, Zap, Cloud, Gamepad2 } from "lucide-react";

const Minecraft = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-badminner/10 text-badminner px-4 py-2 rounded-full text-sm font-medium border border-badminner/20">
                Minecraft Plans
              </span>
            </div>
            <h1 className="hero-heading">
              <span className="text-gradient">COMING SOON</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-foreground/70 mt-6">
              Experience high-performance Minecraft hosting with advanced plugins,
              easy management, and 24/7 support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-secondary/30 rounded-lg p-8 border border-badminner/20">
              <div className="mb-6">
                <Gamepad2 className="h-10 w-10 text-badminner" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Game Server Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Unlimited player slots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Support for all major Minecraft versions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>One-click plugin installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Custom world generation</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 border border-badminner/20">
              <div className="mb-6">
                <Zap className="h-10 w-10 text-badminner" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>High-performance SSD storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Low-latency networking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>DDoS protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>99.9% uptime guarantee</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 border border-badminner/20">
              <div className="mb-6">
                <Shield className="h-10 w-10 text-badminner" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Automatic backups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Enhanced security measures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Advanced permission system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Whitelist and IP protection</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 border border-badminner/20">
              <div className="mb-6">
                <Cloud className="h-10 w-10 text-badminner" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Intuitive control panel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>FTP access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Server console access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Scheduled tasks and restarts</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="" className="btn-primary hover-effect">
              COMING SOON!
            </a>
          </div>
        </div>
      </div>
      <Cursor />
      <Footer />
    </div>
  );
};

export default Minecraft;

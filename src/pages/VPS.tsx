
import React from "react";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Server, Cpu, HardDrive, Shield } from "lucide-react";

const VPS = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-badminner/10 text-badminner px-4 py-2 rounded-full text-sm font-medium border border-badminner/20">
                VPS Plans
              </span>
            </div>
            <h1 className="hero-heading">
              Virtual <span className="text-gradient">Private</span> Servers
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-foreground/70 mt-6">
              Our high-performance VPS solutions are optimized for gaming, 
              community hosting, and other demanding applications.
              NOTE: Current Plans are indian location plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-secondary/30 rounded-lg p-8 border border-badminner/20">
              <div className="mb-6">
                <Server className="h-10 w-10 text-badminner" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Standard Extra Small</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Intel Xeon E5-2690v4 (1 vCores)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>4 GB Ram DDR4</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>20 GB SSD NVMe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>500GB On 1 GBPS (Unmetered Available)</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="#" className="btn-secondary w-full hover-effect">
                  Get Started with 299₹/m
                </a>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 border border-badminner/20 transform scale-105 lg:scale-110 z-10 shadow-lg">
              <div className="absolute top-0 right-0 bg-badminner text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg font-medium">
                Popular
              </div>
              <div className="mb-6">
                <Cpu className="h-10 w-10 text-badminner" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Standard Small</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Intel Xeon E5-2690v4 (2 vCores)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>8 GB Ram DDR4</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>50 GB SSD NVMe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>1TB On 1 Gbps (Unmetered Available)</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="#" className="btn-primary w-full hover-effect">
                  Get Started with 699₹/m
                </a>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 border border-badminner/20">
              <div className="mb-6">
                <HardDrive className="h-10 w-10 text-badminner" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Standard Medium</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>Intel Xeon E5-2690v4 (4 vCores)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>16 GB Ram DDR4</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>60 GB SSD NVMe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-badminner mr-2">•</span>
                  <span>2TB On 1 Gbps (Unmetered Available)</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="#" className="btn-secondary w-full hover-effect">
                  Get Started with 299₹/m
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-secondary/30 rounded-lg p-8 border border-badminner/20">
              <div className="flex items-center mb-6">
                <Shield className="h-10 w-10 text-badminner mr-4" />
                <h3 className="text-2xl font-bold">All VPS Plans Include</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-badminner mr-2">•</span>
                      <span>Full Root Access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-badminner mr-2">•</span>
                      <span>Choice of OS</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-badminner mr-2">•</span>
                      <span>DDoS Protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-badminner mr-2">•</span>
                      <span>99.9% Uptime</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-badminner mr-2">•</span>
                      <span>Free Backups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-badminner mr-2">•</span>
                      <span>Easy Scalability</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-badminner mr-2">•</span>
                      <span>24/7 Support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-badminner mr-2">•</span>
                      <span>Control Panel</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cursor />
      <Footer />
    </div>
  );
};

export default VPS;

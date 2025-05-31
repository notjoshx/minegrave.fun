
import React, { useEffect } from "react";
import { 
  MessageSquare, 
  BarChart, 
  Shield, 
  Zap, 
  Cloud, 
  Gamepad2, 
  Server, 
  Clock 
} from "lucide-react";

const Features = () => {
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

    const featureElements = document.querySelectorAll(".feature-card");
    featureElements.forEach((el, index) => {
      el.classList.add("opacity-0");
      // Set animation delay using CSS variable instead of style property
      el.classList.add(`delay-${index}`);
      observer.observe(el);
    });

    return () => {
      featureElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-badminner" />,
      title: "Discord Server",
      description:
        "Join our Discord server for help, active community and advanced features",
    },
    {
      icon: <BarChart className="h-8 w-8 text-badminner" />,
      title: "Usage Analytics",
      description:
        "Comprehensive analytics for your Minecraft and VPS services",
    },
    {
      icon: <Shield className="h-8 w-8 text-badminner" />,
      title: "Enhanced Security",
      description:
        "Advanced protection for your Minecraft servers and VPS",
    },
    {
      icon: <Zap className="h-8 w-8 text-badminner" />,
      title: "High Performance",
      description:
        "Low-latency, high-uptime solutions for all your gaming and community needs",
    },
    {
      icon: <Cloud className="h-8 w-8 text-badminner" />,
      title: "Cloud Integration",
      description:
        "Seamless cloud connectivity with automated backups and scaling",
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-badminner" />,
      title: "Minecraft Servers",
      description:
        "Custom Minecraft servers with plugin support and easy management",
    },
    {
      icon: <Server className="h-8 w-8 text-badminner" />,
      title: "VPS Solutions",
      description:
        "Virtual private servers optimized for gaming and community hosting",
    },
    {
      icon: <Clock className="h-8 w-8 text-badminner" />,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support for all your hosting needs",
    },
  ];

  return (
    <section id="features" className="section-container">
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <span className="bg-badminner/10 text-badminner px-4 py-2 rounded-full text-sm font-medium border border-badminner/20">
            Premium Services
          </span>
        </div>
        <h2 className="section-heading">
          Advanced Technology, <span className="text-gradient">Superior Experience</span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/70">
          MineGrave provides premium Minecraft hosting and VPS solutions with
          unmatched performance, security, and support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-foreground/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

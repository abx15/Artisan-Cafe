import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogoIcon, CoffeeCupIcon } from "@/components/icons/CafeIcons";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cafe-espresso text-primary-foreground">
      {/* Decorative Wave */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <div className="w-full px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <LogoIcon size={48} className="text-accent" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold">Artisan</span>
                <span className="text-xs text-accent tracking-widest uppercase -mt-1">
                  Cafe
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              A cozy corner where passion meets perfection. Serving artisanal
              delights crafted with love since 2015.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <CoffeeCupIcon size={20} className="text-accent" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", to: "/" },
                { name: "Our Menu", to: "/menu" },
                { name: "About Us", to: "/about" },
                { name: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Our Specialties
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Artisan Cakes", to: "/menu/cakes" },
                { name: "Premium Chocolates", to: "/menu/chocolates" },
                { name: "Savory Chaumin", to: "/menu/chaumin" },
                { name: "Signature Drinks", to: "/menu/drinks" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-primary-foreground/70 text-sm">
                  123 Artisan Street, Foodie District, Mumbai 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  hello@artisancafe.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Mon - Sun: 8:00 AM - 10:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Artisan Cafe. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Crafted with ♥ for coffee lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

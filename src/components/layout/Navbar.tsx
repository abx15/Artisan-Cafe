import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LogoIcon } from "@/components/icons/CafeIcons";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo_fff.png";

const menuCategories = [
  { name: "Cakes", to: "/menu/cakes" },
  { name: "Chocolates", to: "/menu/chocolates" },
  { name: "Chaumin", to: "/menu/chaumin" },
  { name: "Drinks", to: "/menu/drinks" },
];

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Menu", to: "/menu", hasDropdown: true },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsMenuDropdownOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-14 lg:h-16 w-auto flex items-center">
              <img
                src={logo}
                alt="Cafe Logo"
                className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown && setIsMenuDropdownOpen(true)
                }
                onMouseLeave={() =>
                  link.hasDropdown && setIsMenuDropdownOpen(false)
                }
              >
                <Link
                  to={link.to}
                  className={`relative py-2 font-body text-sm tracking-wide transition-colors flex items-center gap-1 ${
                    isActive(link.to)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <motion.div
                      animate={{ rotate: isMenuDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  )}
                  {/* Underline animation */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isActive(link.to) ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isMenuDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden min-w-[180px]">
                          <Link
                            to="/menu"
                            className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors border-b border-border"
                          >
                            View All Menu
                          </Link>
                          {menuCategories.map((cat) => (
                            <Link
                              key={cat.name}
                              to={cat.to}
                              className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded-full hover:bg-primary-dark transition-colors shadow-emerald"
            >
              Book a Table
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-card rounded-xl mb-4 shadow-card"
            >
              <div className="py-4 px-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.to}
                      className={`block py-3 px-4 rounded-lg font-body transition-colors ${
                        isActive(link.to)
                          ? "bg-secondary text-primary"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-4">
                        {menuCategories.map((cat) => (
                          <Link
                            key={cat.name}
                            to={cat.to}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="block w-full mt-4 text-center py-3 bg-primary text-primary-foreground font-medium rounded-lg"
                >
                  Book a Table
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;

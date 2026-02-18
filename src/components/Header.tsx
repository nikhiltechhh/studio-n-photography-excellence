import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const navItems = ["Home", "About", "Services", "Work", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id.toLowerCase() === "contact") {
      navigate("/contact");
      return;
    }
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Left nav - desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.slice(0, 2).map((item) => (
            <li key={item}>
              <button onClick={() => scrollToSection(item)} className="nav-link">
                {item}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => scrollToSection("Services")} className="nav-link">
              Services
            </button>
          </li>
        </ul>

        {/* Logo center */}
        <button onClick={() => scrollToSection("Home")} className="flex-shrink-0">
          <img src={logo} alt="Studio N" className="h-14 md:h-16 w-auto" />
        </button>

        {/* Right nav - desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.slice(3).map((item) => (
            <li key={item}>
              <button onClick={() => scrollToSection(item)} className="nav-link">
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger - mobile */}
        <button
          className="lg:hidden flex flex-col items-end gap-[6px] z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-[1.5px] w-7 bg-foreground origin-center transition-colors"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 16 }}
            className="block h-[1.5px] bg-foreground origin-center"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-[1.5px] w-7 bg-foreground origin-center transition-colors"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item)}
                className="font-serif text-2xl tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

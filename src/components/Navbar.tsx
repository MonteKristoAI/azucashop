import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-sm font-bold tracking-[0.35em] uppercase text-foreground">
          Entourage
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          <button className="relative text-foreground/50 hover:text-foreground transition-colors duration-300" aria-label="Cart">
            <ShoppingBag className="w-4.5 h-4.5" />
          </button>
          <Link
            to="/shop"
            className="px-5 py-2 bg-neon-pink text-primary-foreground text-[10px] tracking-[0.2em] uppercase font-medium hover:shadow-[0_0_20px_hsl(var(--neon-pink)/0.25)] transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button className="text-foreground/50" aria-label="Cart">
            <ShoppingBag className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
              <span className={`block h-px bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border/10 overflow-hidden"
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`font-display text-base tracking-[0.15em] uppercase ${
                    location.pathname === link.to ? "text-foreground" : "text-foreground/40"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 bg-neon-pink text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium text-center"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

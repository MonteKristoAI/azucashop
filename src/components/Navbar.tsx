import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Products", "Technology", "Experience", "About"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold tracking-[0.3em] uppercase text-foreground">
          Entourage
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

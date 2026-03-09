import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Products", "Technology", "Experience", "About"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-6 flex items-center justify-between">
        <a href="#" className="font-display text-sm font-bold tracking-[0.4em] uppercase text-white">
          Entourage
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors duration-500"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-background z-40 flex items-center justify-center mix-blend-normal"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 text-foreground"
              aria-label="Close menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className="block h-px bg-foreground rotate-45 translate-y-[4px]" />
                <span className="block h-px bg-foreground opacity-0" />
                <span className="block h-px bg-foreground -rotate-45 -translate-y-[4px]" />
              </div>
            </button>
            <div className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="font-display text-3xl tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

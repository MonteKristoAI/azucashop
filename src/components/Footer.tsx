const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <p className="font-display text-xs font-bold tracking-[0.5em] uppercase text-foreground">
            Entourage
          </p>
        </div>

        <div className="flex flex-wrap gap-10">
          {["Products", "Technology", "Experience", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors duration-500"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="text-[9px] text-muted-foreground/30 tracking-[0.25em] uppercase">
          © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;

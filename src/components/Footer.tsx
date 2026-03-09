const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.4em] uppercase text-foreground">
            Entourage
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          {["Products", "Technology", "Experience", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground/40 tracking-[0.2em]">
          © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;

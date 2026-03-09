import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/15 py-14 md:py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div>
            <Link to="/" className="font-display text-xs font-bold tracking-[0.4em] uppercase text-foreground">
              Azuca
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed mt-4 max-w-[200px]">
              TiME INFUSION® — the breakthrough molecular encapsulation technology powering next-generation cannabis products.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-foreground font-semibold mb-4">Technology</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
              <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">The Science</Link>
              <Link to="/shop" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Product Formats</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-foreground font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About Azuca</Link>
              <Link to="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-foreground font-semibold mb-4">Partners</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Become a Partner</Link>
              <a href="mailto:partnerships@azucatime.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">partnerships@azucatime.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground/40 tracking-[0.15em] uppercase">
            © 2026 Azuca. All rights reserved. TiME INFUSION® is a registered trademark.
          </p>
          <p className="text-[9px] text-muted-foreground/30 leading-relaxed max-w-md text-center md:text-right">
            These statements have not been evaluated by the FDA. Products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/15 py-14 md:py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-xs font-bold tracking-[0.4em] uppercase text-foreground">
              Entourage
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed mt-4 max-w-[200px]">
              Premium hemp wellness products. Lab tested. Farm Bill compliant.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-foreground font-semibold mb-4">Shop</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/shop?category=gummies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Gummies</Link>
              <Link to="/shop?category=tinctures" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Tinctures</Link>
              <Link to="/shop?category=pet" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Pet CBD</Link>
              <Link to="/shop" className="text-xs text-muted-foreground hover:text-foreground transition-colors">All Products</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-foreground font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              <Link to="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-foreground font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5">
              <span className="text-xs text-muted-foreground">Privacy Policy</span>
              <span className="text-xs text-muted-foreground">Terms of Service</span>
              <span className="text-xs text-muted-foreground">Lab Reports</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground/40 tracking-[0.15em] uppercase">
            © 2026 Entourage. All rights reserved.
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

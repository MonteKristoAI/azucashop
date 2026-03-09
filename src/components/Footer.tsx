const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo */}
          <div>
            <p className="font-display text-lg font-bold tracking-[0.3em] uppercase text-foreground mb-3">
              Entourage
            </p>
            <p className="text-xs tracking-[0.15em] text-muted-foreground">
              The Social Gummy
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Products</p>
            <div className="space-y-2">
              <a href="#products" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Relaxed</a>
              <a href="#products" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Uplifted</a>
              <a href="#products" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Balanced</a>
            </div>
          </div>

          {/* Technology */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Technology</p>
            <div className="space-y-2">
              <a href="#technology" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">TiME Infusion®</a>
              <a href="#technology" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Contact</p>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">hello@entourage.com</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground/50 tracking-widest">
            © 2026 Entourage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

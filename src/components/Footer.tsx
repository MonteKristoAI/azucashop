import { Link } from "react-router-dom";
import { Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="section-container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="font-display font-extrabold text-lg text-foreground">EMBER</Link>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">Premium artisan coffee & tea. Ethically sourced, expertly roasted, delivered fresh.</p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
            <a href="mailto:hello@ember.co" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary transition-colors" aria-label="Email"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm text-foreground mb-4">Navigate</h4>
          <ul className="space-y-2.5">
            {[["Home","/"],["Shop","/shop"],["Blog","/blog"],["Contact","/contact"]].map(([l,h])=>(
              <li key={l}><Link to={h} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm text-foreground mb-4">Categories</h4>
          <ul className="space-y-2.5">
            {["Coffee","Tea","Accessories"].map(c=>(
              <li key={c}><Link to={`/shop?category=${c.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{c}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm text-foreground mb-4">Legal</h4>
          <ul className="space-y-2.5">
            {["Privacy Policy","Terms of Service","Shipping Policy","Return Policy"].map(i=>(
              <li key={i}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{i}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} EMBER. All rights reserved. This is a demo store — no real transactions.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

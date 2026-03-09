import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>{children}</main>
    <Footer />
    <CartDrawer />
  </div>
);

export default Layout;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="min-h-[80vh] flex items-center justify-center">
    <div className="text-center">
      <h1 className="font-display font-extrabold text-7xl text-primary mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-8">Page not found</p>
      <Button asChild><Link to="/">Go Home</Link></Button>
    </div>
  </div>
);

export default NotFound;

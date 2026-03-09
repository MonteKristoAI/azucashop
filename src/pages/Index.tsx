import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TechnologySection from "@/components/TechnologySection";
import SocialSection from "@/components/SocialSection";
import DetailsSection from "@/components/DetailsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <TechnologySection />
      <SocialSection />
      <DetailsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

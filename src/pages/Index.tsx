import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyItMatters from "@/components/WhyItMatters";
import ScienceSection from "@/components/ScienceSection";
import ConsumerBenefits from "@/components/ConsumerBenefits";
import FeaturedProducts from "@/components/FeaturedProducts";
import SocialExperience from "@/components/SocialExperience";
import ProductPlatform from "@/components/ProductPlatform";
import IndustryPartners from "@/components/IndustryPartners";
import FAQSection from "@/components/FAQSection";
import PartnerCTA from "@/components/PartnerCTA";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <HeroSection />
      <WhyItMatters />
      <ScienceSection />
      <ConsumerBenefits />
      <FeaturedProducts />
      <SocialExperience />
      <ProductPlatform />
      <IndustryPartners />
      <FAQSection />
      <PartnerCTA />
      <Footer />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyItMatters from "@/components/WhyItMatters";
import ScienceSection from "@/components/ScienceSection";
import ConsumerBenefits from "@/components/ConsumerBenefits";
import SocialExperience from "@/components/SocialExperience";
import ProductPlatform from "@/components/ProductPlatform";
import IndustryPartners from "@/components/IndustryPartners";
import FAQSection from "@/components/FAQSection";
import PartnerCTA from "@/components/PartnerCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyItMatters />
      <ScienceSection />
      <ConsumerBenefits />
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

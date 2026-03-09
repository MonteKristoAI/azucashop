import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import EdiblesProblem from "@/components/EdiblesProblem";
import ScienceSection from "@/components/ScienceSection";
import ProductBenefits from "@/components/ProductBenefits";
import SocialConsumption from "@/components/SocialConsumption";
import TargetAudience from "@/components/TargetAudience";
import VideoSection from "@/components/VideoSection";
import PartnerSupport from "@/components/PartnerSupport";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechnologySection />
      <EdiblesProblem />
      <ScienceSection />
      <div id="benefits">
        <ProductBenefits />
      </div>
      <SocialConsumption />
      <div id="audience">
        <TargetAudience />
      </div>
      <VideoSection />
      <div id="partners">
        <PartnerSupport />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

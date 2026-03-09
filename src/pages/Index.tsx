import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopByCategory from "@/components/ShopByCategory";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductBenefits from "@/components/ProductBenefits";
import BrandStory from "@/components/BrandStory";
import CustomerReviews from "@/components/CustomerReviews";
import BlogPreview from "@/components/BlogPreview";
import FAQSection from "@/components/FAQSection";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ShopByCategory />
      <FeaturedProducts />
      <ProductBenefits />
      <BrandStory />
      <CustomerReviews />
      <BlogPreview />
      <FAQSection />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;

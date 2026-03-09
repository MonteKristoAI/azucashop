import HeroSection from "@/components/HeroSection";
import CategoryCards from "@/components/CategoryCards";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import CustomerReviews from "@/components/CustomerReviews";
import BlogPreview from "@/components/BlogPreview";
import FAQSection from "@/components/FAQSection";
import NewsletterCTA from "@/components/NewsletterCTA";

const Index = () => (
  <>
    <HeroSection />
    <CategoryCards />
    <FeaturedProducts />
    <TrustSection />
    <AboutSection />
    <CustomerReviews />
    <BlogPreview />
    <FAQSection />
    <NewsletterCTA />
    <div className="bg-secondary border-t border-border">
      <div className="section-container py-4 text-center">
        <p className="text-[11px] text-muted-foreground">This is a demo e-commerce site. No real transactions are processed. Must be 21+ to purchase cannabis products. All product information is for demonstration purposes only.</p>
      </div>
    </div>
  </>
);

export default Index;

import HeroSection from "../../app/components/HeroSection";
import ServicesSection from "../../app/components/ServicesSection";
import CompaniesReview from "../../app/components/CompaniesReview";
import TestimonialsSection from "../../app/components/TestimonialsSection";
import FaqSection from "../../app/components/FaqSection";
import CtaSection from "../../app/components/CtaSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <main>
        <HeroSection />
        <ServicesSection />
        <CompaniesReview />
        <TestimonialsSection />
        {/* <FaqSection /> */}
        <CtaSection />
      </main>
    </div>
  );
};

export default Home;

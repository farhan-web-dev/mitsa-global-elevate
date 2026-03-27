import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import IndustriesSection from "@/components/IndustriesSection";
import CatalogueSection from "@/components/CatalogueSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <LeadershipSection />
    <ProductsSection />
    <WhyChooseSection />
    <IndustriesSection />
    <CatalogueSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;

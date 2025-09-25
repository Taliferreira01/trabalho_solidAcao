import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RegistrationSection from "@/components/RegistrationSection";
import DonationSection from "@/components/DonationSection";
import DashboardSection from "@/components/DashboardSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <RegistrationSection />
      <DonationSection />
      <DashboardSection />
      <Footer />
    </div>
  );
};

export default Index;

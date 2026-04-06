import HeroSection from "@/features/main/home/components/HeroSection";
import ServicesSection from "@/features/main/home/components/ServicesSection";
import DoctorsSection from "@/features/main/home/components/DoctorsSection";
import StatsSection from "@/features/main/home/components/StatsSection";
import TestimonialsSection from "@/features/main/home/components/TestimonialsSection";
import CtaSection from "@/features/main/home/components/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
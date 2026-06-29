import HeroSection from "@/components/landing/HeroSection";
import LogoMarquee from "@/components/landing/LogoMarquee";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FaqSection from "@/components/landing/FaqSection";
import CtaSection from "@/components/landing/CtaSection";

const Home = () => {
    return (
        <main className="overflow-x-hidden">
            <HeroSection />
            <LogoMarquee />
            <FeaturesSection />
            <HowItWorksSection />
            <StatsSection />
            <TestimonialsSection />
            <FaqSection />
            <CtaSection />
        </main>
    );
};

export default Home;

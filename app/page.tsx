import Hero from "@/components/hero";
import ServiceSection from "@/components/service-section";
import WelcomeMessage from "@/components/welcome";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <WelcomeMessage />
      <ServiceSection />
    </div>
  );
}

import Image from "next/image";
import HeroSection from "./hero-section";
import CompaniesMarquee from "./companies";
import HowAdyaDelivers from "./how-adya-delivers";

export default function Home() {
  return (
    <main className="min-h-[400vh]">
      <HeroSection/>
      <CompaniesMarquee/>
      <HowAdyaDelivers/>
    </main>
  );
}

import CompaniesMarquee from "./companies";
import HeroSection from "./hero-section";
import HowAdyaDelivers from "./how-adya-delivers";
import Numbers from "./numbers";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompaniesMarquee />
      <Numbers />
      <HowAdyaDelivers />
    </main>
  );
}

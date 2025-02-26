import CallToAction from "./call-to-action";
import CompaniesMarquee from "./companies";
import HeroSection from "./hero-section";
import HowAdyaDelivers from "./how-adya-delivers";
import Numbers from "./numbers";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompaniesMarquee />
      <Numbers />
      <HowAdyaDelivers />
      <Testimonials/>
      <CallToAction/>
    </main>
  );
}

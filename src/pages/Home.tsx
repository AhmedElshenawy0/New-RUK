import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NoisyBg from "../components/global/NoisyBg";
import MainSection from "../components/Home/Main-section";
import PricingSec from "../components/Home/Pricing-sec";
import AboutSection from "../components/Home/About-section";
import ServicesSec from "../components/Home/Services-sec";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa] font-fira mt-[72px]">
      <NoisyBg />

      <MainSection />
      <AboutSection />
      <PricingSec />
      <ServicesSec />
    </div>
  );
}

export default Home;

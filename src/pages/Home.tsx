import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NoisyBg from "../components/global/NoisyBg";

import React, { Suspense } from "react";

const MainSection = React.lazy(() => import("../components/Home/Main-section"));
const PricingSec = React.lazy(() => import("../components/Home/Pricing-sec"));
const AboutSection = React.lazy(
  () => import("../components/Home/About-section")
);
const ServicesSec = React.lazy(() => import("../components/Home/Services-sec"));

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa] font-fira mt-[72px]">
      <NoisyBg />

      <Suspense fallback={<div>Loading main...</div>}>
        <MainSection />
      </Suspense>

      <Suspense fallback={<div>Loading about...</div>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div>Loading pricing...</div>}>
        <PricingSec />
      </Suspense>

      <Suspense fallback={<div>Loading services...</div>}>
        <ServicesSec />
      </Suspense>
    </div>
  );
}

export default Home;

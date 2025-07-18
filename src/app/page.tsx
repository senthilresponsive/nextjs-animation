import Image from "next/image";

import HeroSection from "./HeroSection";
import CustomerStories from "./CustomerStories";
import WhyPartner from "./WhyPartner";
import PartnerTypes from "./TechnologyPartners";
import NavSection from "./NavSection";
import AnimationVideoSection from "./AnimationVideo";
import './main.css'; 

export default function Home() {
  return (
    <>  
    <main>
      <NavSection />
      <HeroSection />
      <CustomerStories />
      <WhyPartner />
      <AnimationVideoSection />
      <PartnerTypes />
    </main>
     </>
  );
}

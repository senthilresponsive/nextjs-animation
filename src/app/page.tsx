import Image from "next/image";

import HeroSection from "./HeroSection";
import CustomerStories from "./CustomerStories";
import WhyPartner from "./WhyPartner";
import PartnerTypes from "./TechnologyPartners";
import NavSection from "./NavSection";
import AnimationVideoSection from "./AnimationVideo";
import './main.css'; 
import FlowAnimation from "./FlowAnimation";
import ScrollToTop from "./ScrollToTop";
import { Toaster, toast } from 'react-hot-toast';
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
      <ScrollToTop />
      <Toaster />
    </main>
     </>
  );
}

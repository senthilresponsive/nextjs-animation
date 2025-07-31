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
import ROI_Calculator from "./ROICalculator";
export default function Home() {
  return (
    <>  
    <main>
      <NavSection />
      <HeroSection />
      <ROI_Calculator />
      <CustomerStories />
      <WhyPartner />
      <AnimationVideoSection />
      <PartnerTypes />
      <ScrollToTop />
      
    </main>
     </>
  );
}

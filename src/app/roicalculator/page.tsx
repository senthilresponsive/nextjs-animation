import ROI_Calculator from "../ROICalculator";
import NavSection from "../NavSection";
import ROI_Calculator_Tap from "../ROICalculatorTap";


export default function ROICalculatorPage() {
  return (
    <>
      <NavSection />
      <ROI_Calculator />
      <hr className="mb-12 mt-12"></hr>
      <ROI_Calculator_Tap />

    </>
  );
}
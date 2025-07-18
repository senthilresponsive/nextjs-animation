// components/WhyPartnerSection.tsx
export default function WhyPartner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Why partner with Responsive?
      </h2>

   

      <div className="motion-card motion-bg rounded-2xl p-6 pt-12 pb-12 w-[600px] h-[220px] flex flex-col items-center justify-center">
        <div className="card-inner text-center">
          <h2 className="text-2xl font-bold mb-2">Aceternity Style

            
          </h2>
          <p className="text-gray-200">
            Hover to feel the 3D depth, smooth scale, and background motion.
          </p>
        </div>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 perspective">
      
      <div className="bg-white p-6 rotate-3d animate-flip-in-x rounded shadow hover:shadow-lg transition duration-300 border-t-2 border-gradient-to-r from-green-500 to-blue-500" data-aos="fade-up" data-aos-delay="0">
        <img src="https://responsiveio.cdn.prismic.io/responsiveio/aG-hlEMqNJQqHwEu_Group1000003541-1-.svg" alt="Accelerate" className="mb-4 w-10 h-10 transition duration-300 hover:scale-110" />
        <h3 className="text-lg font-semibold mb-2">Accelerate growth</h3>
        <p className="text-sm text-gray-600">
          Deliver value fast with an enterprise-ready, AI-powered Strategic Response Management platform.
        </p>
      </div>

      <div className="g-white p-6 rounded shadow rotate-3d animate-flip-in-x hover:shadow-lg transition duration-300 border-t-2 border-gradient-to-r from-green-500 to-blue-500" data-aos="fade-up" data-aos-delay="100">
        <img src="https://responsiveio.cdn.prismic.io/responsiveio/aG-hlEMqNJQqHwEu_Group1000003541-1-.svg" alt="Co-market" className="mb-4  w-10 h-10 transition duration-300 hover:scale-110" />
        <h3 className="text-lg font-semibold mb-2">Co-market with us</h3>
        <p className="text-sm text-gray-600">
          Tap into joint marketing opportunities to reach new audiences.
        </p>
      </div>

      <div className="g-white p-6 rounded shadow rotate-3d animate-flip-in-x hover:shadow-lg transition duration-300 border-t-2 border-gradient-to-r from-green-500 to-blue-500" data-aos="fade-up" data-aos-delay="200">
        <img src="https://responsiveio.cdn.prismic.io/responsiveio/aG-hlEMqNJQqHwEu_Group1000003541-1-.svg" alt="Expand reach" className="mb-4 w-10 h-10 transition duration-300 hover:scale-110" />
        <h3 className="text-lg font-semibold mb-2">Expand reach</h3>
        <p className="text-sm text-gray-600">
          Leverage our global customer base and brand equity.
        </p>
      </div>

      <div className="g-white p-6 rounded shadow rotate-3d animate-flip-in-x hover:shadow-lg transition duration-300 border-t-2 border-gradient-to-r from-green-500 to-blue-500" data-aos="fade-up" data-aos-delay="300">
        <img src="https://responsiveio.cdn.prismic.io/responsiveio/aG-hlEMqNJQqHwEu_Group1000003541-1-.svg" alt="Enablement" className="mb-4 w-10 h-10 transition duration-300 hover:scale-110" />
        <h3 className="text-lg font-semibold mb-2">Enablement & training</h3>
        <p className="text-sm text-gray-600">
          Access exclusive partner training and certification.
        </p>
      </div>

    </div>
      
    </section>
  );
}

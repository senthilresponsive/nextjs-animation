import React from "react";


const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 max-w-7xl w-full gap-10">
        <div className="max-w-xl">
          <p className="uppercase text-sm tracking-wide mb-2">Partner Program</p>
          <div className="typewriter">
            <h1 className="text-5xl sm:text-5xl mb-0 pb-3 font-bold">
              Grow with the Strategic Response Management
            </h1>
          </div>
          <p className="mb-6 text-lg">Partnerships that deliver value — for your customers and ours.</p>
          <a href="#" className="inline-block bg-white text-black font-semibold px-6 py-3 rounded transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,0,0,0.3)] hover:scale-105">
            Become a partner
          </a>
        </div>

        <div className="relative w-full max-w-md h-[300px] flex items-center justify-center">
          <div className="overflow-hidden animate-zoom-once z-10">
            <img
              src="https://images.prismic.io/responsiveio/aG_dbEMqNJQqHwyH_hero_illustration_parther_page.png?auto=format,compress"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-16 h-16 overflow-hidden animate-bounce ">
            <img
              src="https://images.prismic.io/responsiveio/Z6SswZbqstJ9-S7C_cropped-Responsive_Favicon.png?auto=format,compress"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-16 h-16 overflow-hidden animate-bounce delay-200">
            <img
              src="https://images.prismic.io/responsiveio/Z6SswZbqstJ9-S7C_cropped-Responsive_Favicon.png?auto=format,compress"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

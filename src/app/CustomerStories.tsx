// components/CustomerStoriesSection.tsx
export default function CustomerStoriesSection() {
  return (
    <section className="relative h-[100vh] mt-12 overflow-hidden flex items-center justify-center text-center px-6 bg-gradient-to-r from-green-500 to-blue-500 text-white">
      <div className="relative z-10 max-w-4xl ">
        <span className="inline-block bg-white text-black px-4 py-1 rounded-full text-sm font-medium mb-4">
          Customer stories
        </span>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 ">
            Success stories <br /> from companies like yours
          </h1>
          <div className="text-2xl font-bold flex items-center mt-2 mb-6 p-3">
            <div className="overflow-hidden h-10  relative bg-white text-blue-600 px-2 rounded">
              <div className="flex flex-col flip-animation text-center">
                <span className="h-10 text-3xl  leading-8">Work</span>
                <span className="h-10 text-3xl  leading-8">Lifestyle</span>
                <span className="h-10 text-3xl  leading-8">Enviornments</span>

                <span className="h-10 text-3xl  leading-8">Culture</span>
                <span className="h-10 text-3xl  leading-8">Everything</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-white/80 mb-6">
          Filter to find the most relevant examples from over 100 companies
          around the world.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,0,0,0.3)] hover:scale-105">
            View demo
          </button>
          <button className="px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,0,0,0.3)] hover:scale-105">
            Start free trial
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <div className="grid grid-cols-6 gap-4 p-4 absolute bottom-0 w-full h-[120%]">
          <div className="scroll-item delay-0">
            <img
              src="https://responsiveio.cdn.prismic.io/responsiveio/aHD_d0MqNJQqHyyh_logoframe.svg"
              className="w-full object-contain"
            />
          </div>
          <div className="scroll-item delay-1">
            <img
              src="https://responsiveio.cdn.prismic.io/responsiveio/aHD_dkMqNJQqHyyg_logoframe-1-.svg"
              className="w-full object-contain"
            />
          </div>
          <div className="scroll-item delay-2">
            <img
              src="https://responsiveio.cdn.prismic.io/responsiveio/aHD_dUMqNJQqHyyf_logoframe-2-.svg"
              className="w-full object-contain"
            />
          </div>
          <div className="scroll-item delay-3">
            <img
              src="https://responsiveio.cdn.prismic.io/responsiveio/aHD_dEMqNJQqHyye_logoframe-3-.svg"
              className="w-full object-contain"
            />
          </div>
          <div className="scroll-item delay-4">
            <img
              src="https://responsiveio.cdn.prismic.io/responsiveio/aHD_c0MqNJQqHyyd_logoframe-4-.svg"
              className="w-full object-contain"
            />
          </div>
          <div className="scroll-item delay-5">
            <img
              src="https://responsiveio.cdn.prismic.io/responsiveio/aHD_ckMqNJQqHyyc_logoframe-5-.svg"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

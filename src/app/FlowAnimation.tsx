export default function FlowAnimation() {
  return (
<section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
  <div className="absolute inset-0 bg-multi-scroll z-0"></div>

  <div className="relative z-10 text-center text-white space-y-6 max-w-2xl">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Connect. Explore. Grow.
    </h1>
    <p className="text-lg">
      Background with multiple vertically scrolling images.
    </p>
    <button className="mt-4 bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">
      Explore Now
    </button>
  </div>
</section>


  );
}


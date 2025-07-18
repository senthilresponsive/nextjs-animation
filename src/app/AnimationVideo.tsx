// components/animation Video Section.tsx
export default function AnimationVideoSection() {
  return (
     <section className="relative w-full min-h-screen flex items-center justify-center bg-animated px-6 md:px-10 py-10">
    <div className="grid md:grid-cols-2 gap-10 items-center z-10 w-full max-w-7xl">
      
      <div className="space-y-6">
        <div className="inline-block bg-white/10 px-4 py-1 text-xs text-white font-medium tracking-widest rounded">
          CONNECT. EXPLORE. GROW.
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="typing-loop"></span>
        </h1>
        <p className="text-lg text-white">
          The industry-defining event for Strategic Response Management leaders is now in-person.
        </p>
        <button className="mt-4 bg-white text-black px-5 py-3 rounded hover:bg-gray-200 transition">
          See cities
        </button>
      </div>

{/* <div className="w-full max-w-xl mx-auto border-4  p-3 border-dotted border-white rounded-xl overflow-hidden animate-border-animation shadow-lg">
  <div className="relative pt-[56.25%]"> 
    <iframe
      src="https://player.vimeo.com/video/1089125782?h=4bd6b65241&autoplay=1&loop=1&background=1"
      className="absolute top-0 left-0 w-full h-full rounded-lg"
      allow="autoplay; fullscreen; picture-in-picture"
      
    ></iframe>
  </div>
</div> */}

<div className="w-full max-w-xl mx-auto  p-1  rounded-xl overflow-hidden shadow-lg animate-glow-border">
  <div className="relative pt-[56.25%]">
    <iframe
      src="https://player.vimeo.com/video/1089125782?h=4bd6b65241&autoplay=1&loop=1&background=1"
      className="absolute top-0 left-0 w-full h-full rounded-lg"
      allow="autoplay; fullscreen; picture-in-picture"
    ></iframe>
  </div>
</div>


    </div>
  </section>

  );
}

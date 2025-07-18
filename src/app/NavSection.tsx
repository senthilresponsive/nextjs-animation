import React from "react";

const NavSection = () => {
  return (
        <section className="w-full max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between bg-white shadow-sm">
  <div className="flex items-center gap-2">
    <img src="https://images.prismic.io/responsiveio/Z8V0thsAHJWomC0R_Responsive_Logo.png?auto=format,compress" alt="Responsive Logo" className="h-6 p-0 glow " />
    
  </div>

  <nav className="flex items-center gap-6 text-sm font-medium text-black">
    <div className="relative group">
      <button className="hover:text-gray-700 flex items-center gap-1">
        Platform 
      </button>
    </div>
    <div className="relative group">
      <button className="hover:text-gray-700 flex items-center gap-1">
        Solutions 
      </button>
    </div>
    <a href="#" className="hover:text-gray-700">Pricing</a>
    <div className="relative group">
      <button className="hover:text-gray-700 flex items-center gap-1">
        Resources 
      </button>
    </div>
  </nav>

  <div className="flex items-center gap-4">
    
    <a href="#" className="text-sm hover:text-gray-700">Log in</a>
    <a href="#" className="border border-gray-300 text-sm px-3 py-1.5 rounded hover:bg-gray-100">Contact sales</a>
    <a href="#" className="bg-black text-white text-sm px-3 py-1.5 rounded hover:bg-gray-800">Request demo</a>
  </div>


 
</section>

  );
};

export default NavSection;

import React from "react";

const WhoWeAreSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden text-center px-4 sm:px-6 md:px-8 py-16">
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]" />
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]" />

      {/* Header Section */}
      <div className="relative max-w-5xl mx-auto animate-fade-in">
        {/* Image with Overlay Text */}
        <div className="relative w-full mb-8 shadow-2xl  overflow-hidden"></div>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto text-white text-lg sm:text-xl md:text-2xl">
        <h1 className=" text-saas-orange text-2xl md:text-4xl font-semibold px-6 py-3 rounded-md">
          Who We Are
        </h1>
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto">
            At DSR Secure Tech, we are more than a technology company — we are
            your trusted partner in digital security, data intelligence, and
            strategic innovation.
          </p>

          <p className="text-lg md:text-xl text-white max-w-5xl mx-auto">
            Founded with a mission to protect, empower, and transform
            organizations in the digital age, we combine deep technical
            expertise with forward-thinking strategies to solve today’s
            challenges and anticipate tomorrow’s threats.
          </p>

          <p className="text-lg md:text-xl text-white max-w-5xl mx-auto">
            We specialize in cybersecurity, blockchain solutions, data
            analytics, AI innovations, and political consultancy, offering
            tailored services that enable governments, enterprises, and
            institutions to operate with confidence in an increasingly complex
            digital world.
          </p>

          <p className="text-lg md:text-xl text-white max-w-5xl mx-auto">
            Our team consists of seasoned cybersecurity professionals, data
            scientists, blockchain architects, and strategic consultants who
            work collaboratively to deliver measurable results. We don’t just
            provide technology — we deliver trust, resilience, and competitive
            advantage.
          </p>
        </div>
      </div>
      {/* Decorative Shapes */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full" />
      <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full" />
      <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full" />
    </div>
  );
};

export default WhoWeAreSection;

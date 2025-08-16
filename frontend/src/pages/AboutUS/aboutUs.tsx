const AboutUs = () => {
  return (
    <>
      <div
        className=" relative bg-gradient-to-b from-saas-black to-[#1c160c] bg-black/30 overflow-hidden min-h-[96vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/')",
          backgroundPosition: "calc(50% + 8rem) center",
        }}
      >
        {/* Orange glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
        <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 max-w-7xl  w-full px-4 sm:px-6 md:px-8">
          <div className="">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-saas-orange text-center">
              About Us
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white text-center max-w-3xl mx-auto">
              We are a team of passionate individuals dedicated to providing the
              best services in the industry. Our mission is to deliver quality
              solutions that meet the needs of our clients.
            </p>
          </div>
          <div className="">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full"></div>
      </div>
    </>
  );
};

export default AboutUs;

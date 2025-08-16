import { aboutUs } from '@/data/aboutUsTestimonials';

const AboutUs = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-saas-black to-[#1c160c] bg-black/30 overflow-hidden min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      // style={{
      //   backgroundImage: "url('/')",
      //   backgroundPosition: 'calc(50% + 6rem) center'
      // }}
    >
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
      <div className="absolute top-20 right-1/4 w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-saas-orange">About Us</h1>
          {aboutUs?.aboutUsDescription?.map((description, index) => (
            <p
              key={index}
              className="mt-4  sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {aboutUs?.aboutUsTestimonials?.map((testimonial, index) => (
            <div
              key={index}
              className=" border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:border-saas-orange transition-all duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4 border-2 border-saas-orange"
              />
              <p className="text-gray-300 text-sm sm:text-base italic mb-4 leading-relaxed">
                "{testimonial.testimonial}"
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-white">{testimonial.name}</h3>
              <p className="text-saas-orange text-xs sm:text-sm">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative abstract shapes */}
      <div className="absolute bottom-10 left-10 w-12 h-12 sm:w-20 sm:h-20 border border-saas-orange/20 rounded-full"></div>
      <div className="absolute top-20 right-10 w-8 h-8 sm:w-10 sm:h-10 border border-saas-orange/20 rounded-full"></div>
      <div className="absolute top-40 left-20 w-3 h-3 sm:w-5 sm:h-5 bg-saas-orange/20 rounded-full"></div>
    </section>
  );
};

export default AboutUs;


import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";

const CompaniesReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden flex items-center px-4 sm:px-6 md:px-8">
      <div className="section-container w-full">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Trusted by Innovative{" "}
            <span className="gradient-text">Companies & Client</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Don't just take our word for it. Here's what our customers have to
            say about service and Product.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-2 sm:px-4">
                  <div className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-xl p-4 sm:p-6 md:p-8 card-shadow">
                    {/* Stars */}
                    <div className="flex mb-4 sm:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 sm:h-5 sm:w-5 text-saas-orange fill-orange-500"
                        />
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    {/* Author */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-crypto-purple"
                      />
                      <div className="ml-3 sm:ml-4">
                        <p className="font-medium text-white text-sm sm:text-base">
                          {testimonial.author}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 sm:w-8 bg-crypto-purple"
                    : "w-1.5 sm:w-2 bg-saas-orange"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesReview;

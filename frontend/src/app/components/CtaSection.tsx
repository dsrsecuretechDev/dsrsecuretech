import { Button } from "../components/ui/button";

const CtaSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden flex items-center px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
      <div className="section-container w-full">
        <div className="bg-gradient-to-r border rounded-2xl relative overflow-hidden px-4 sm:px-6 md:px-12 py-8 sm:py-12">
          {/* Glow effects */}
          <div className="absolute top-0 right-0 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-saas-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>

          <div className="flex flex-col items-center text-center space-y-6 relative z-10">
            {/* Image */}
            <div className="w-full max-w-4xl mx-auto">
              <img
                src="/embed-automation.webp"
                alt="Automation Preview"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-saas-orange">
              Ready to transform your business?
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Let’s get started today! Our advanced solutions are designed to
              boost your efficiency, enhance security, and drive your success.
              Reach out now to take the first step!
            </p>

            {/* Button */}
            <div className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;

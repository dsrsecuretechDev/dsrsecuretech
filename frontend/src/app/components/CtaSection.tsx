import { Button } from "../components/ui/button";

const CtaSection = () => {
  return (
    // <div className="bg-saas-darkGray py-16 md:py-20">
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden flex items-center">
      <div className="section-container">
        <div className="bg-gradient-to-r border rounded-2xl md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-saas-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>

          <div className=" flex flex-col items-center text-center space-y-6">
            <div className="w-full max-w-7xl mx-auto">
              <img
                src="/embed-automation.webp"
                alt="Automation Preview"
                className="h-auto rounded-lg"
              />
            </div>

            <h2 className="text-3xl text-saas-orange md:text-4xl font-bold">
              Ready to transform your business?
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Let’s get started today! Our advanced solutions are designed to
              boost your efficiency, enhance security, and drive your success.
              Reach out now to take the first step!
            </p>

            <div>
              <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold">
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

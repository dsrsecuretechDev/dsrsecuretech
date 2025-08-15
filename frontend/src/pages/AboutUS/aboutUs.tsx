import { ArrowRight } from "lucide-react";
import {
  GET_STARTED_FREE,
  SCHEDULE_MEETING,
} from "../../constant/global-key.const";
import { Button } from "../../app/components/ui/button";
import { services } from "../../data/services";

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
          <div className="flex flex-col items-center text-center md:items-start md:text-left animate-fade-in">
            <span className="inline-block bg-saas-orange/10 text-saas-orange px-4 py-2 rounded-full text-sm font-medium mb-6 border border-saas-orange/20">
              Securing Your Digital World, Every Byte & Every Block.
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
              Transform Your Enterprise with{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Secure and Scalable Business Solutions.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
              Enterprise-grade software solutions designed to streamline
              operations while keeping your data protected.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start w-full sm:w-auto">
              <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                {GET_STARTED_FREE}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-saas-orange text-saas-orange hover:bg-saas-orange hover:text-white"
              >
                {SCHEDULE_MEETING}
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full"></div>
      </div>
      <div className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work Smarter with js{" "}
              <span className="gradient-text">Services</span>
            </h2>
            <p>
              Our comprehensive suite of tools will help you streamline
              operations and achieve your business goals more efficiently.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center px-6 py-6 bg-saas-dark rounded-xl border border-gray-800 transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-saas-darkGray "
                >
                  <div className="bg-indigo-100/10 p-3 rounded-full inline-flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-saas-orange" />
                  </div>
                  <h3 className="text-lg text-saas-orange font-semibold mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-md mb-2">{feature.description}</p>
                  <a
                    href="#"
                    className="text-indigo-400 text-sm font-medium hover:underline"
                  >
                    Learn more.
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

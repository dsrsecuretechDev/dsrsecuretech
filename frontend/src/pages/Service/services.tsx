import { ArrowRight } from "lucide-react";
import {
  GET_STARTED_FREE,
  SCHEDULE_MEETING,
} from "../../constant/global-key.const";
import { Button } from "../../app/components/ui/button";
import { services } from "../../data/services";
import CtaSection from "../../app/components/CtaSection";
import { ROUTE_URL } from "../../constant/routes.const";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden  flex items-center">
        {/* Orange glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
        <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

        <div className="section-container relative z-10 text-center">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <span className="inline-block bg-saas-orange/10 text-saas-orange px-4 py-2 rounded-full text-sm font-medium mb-6 border border-saas-orange/20">
                Securing Your Digital World, Every Byte & Every Block.
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Transform Your Enterprise with{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Secure and Scalable Business Solutions.
                </span>
              </h1>

              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                {/* Streamline your operations, boost productivity, and enhance
                customer satisfaction with our cutting-edge SaaS platform.
                Experience seamless integration and unparalleled support. */}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                  Get Started Free
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
        </div>

        {/* Abstract shapes */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full"></div>
      </div>
      {/* <div className="py-16 md:py-24"> */}
      <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden flex items-center">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work Smarter with <span className="gradient-text">Services</span>
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  to={ROUTE_URL.LEARN_MORE.replace(
                    ":category",
                    encodeURIComponent(feature.category)
                  )}
                >
                  <div
                    key={index}
                    className="text-center px-6 py-6 bg-saas-dark rounded-xl border border-gray-800 transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-saas-darkGray  hover:border-saas-orange "
                  >
                    <div className="bg-indigo-100/10 p-3 rounded-full inline-flex items-center justify-center mx-auto mb-4">
                      <Icon size={28} className="text-saas-orange" />
                    </div>
                    <h3 className="text-lg text-saas-orange font-semibold mb-2">
                      {feature.category}
                    </h3>
                    <p className="text-md mb-2">{feature.description}</p>
                    <span className="text-indigo-400 text-sm font-medium hover:underline">
                      Learn more.
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
};

export default Services;

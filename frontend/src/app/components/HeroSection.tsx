import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";

import {
  GET_STARTED_FREE,
  SCHEDULE_MEETING,
} from "../../constant/global-key.const";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../constant/routes.const";

const HeroSection = () => {
  return (
    <div
      className=" relative bg-gradient-to-b from-saas-black to-[#1c160c] bg-black/30 overflow-hidden min-h-[96vh] flex items-center bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/hero-bg.webp')",
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

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start w-full sm:w-auto">
            {/* Primary button */}
            <Link to={ROUTE_URL.SCHEDULE_MEETING} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center">
                {GET_STARTED_FREE}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            {/* Secondary button */}
            <Link to={ROUTE_URL.SCHEDULE_MEETING} className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-saas-orange text-saas-orange hover:bg-saas-orange hover:text-white py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                {SCHEDULE_MEETING}
              </Button>
            </Link>
          </div>

          {/* Metrics Section */}
          <div
            className="mt-10 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-6 sm:space-y-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-2xl font-bold text-white">
                <CountUp end={2.5} duration={2} decimals={1} suffix="K+" />
              </p>
              <p className="text-sm text-gray-400">Satisfied Users</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-700"></div>
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-2xl font-bold text-white">
                <CountUp end={120} duration={2} suffix="+" />
              </p>
              <p className="text-sm text-gray-400">Satisfied Clients</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-700"></div>
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-2xl font-bold text-white">
                <CountUp end={50} duration={2} suffix="+" />
              </p>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full"></div>
      <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full"></div>
      <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full"></div>
    </div>
  );
};

export default HeroSection;

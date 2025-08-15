import React from "react";
import { Link } from "react-router-dom";
import { PAGE_NOT_FOUND } from "../../../constant/global-key.const";
import { Button } from "../../components/ui/button";
import { ROUTE_URL } from "../../../constant/routes.const";

const PageNotFound: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden min-h-[96vh] flex items-center">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-6">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {PAGE_NOT_FOUND}
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Sorry, the page you are looking for doesn't exist or has been
              moved.
            </p>
            <Button>
              <Link to={ROUTE_URL.HOME}>Go to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

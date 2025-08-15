import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { ROUTE_URL } from "../../constant/routes.const";

const ServicesSection = () => {
  return (
    // <div className="py-16 md:py-24">
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden flex items-center">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Smarter with <span className="gradient-text">Services</span>
          </h2>
          <p>
            Our comprehensive suite of tools will help you streamline operations
            and achieve your business goals more efficiently.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link to={ROUTE_URL.SERVICE}>
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
                  {/* <a
                    href="#"
                    className="text-indigo-400 text-sm font-medium hover:underline"
                  >
                    Learn more.
                  </a> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

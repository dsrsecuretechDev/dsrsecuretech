import { ArrowLeft, ArrowRight } from "lucide-react";
import CtaSection from "../../app/components/CtaSection";
import PageNotFound from "../../app/notFound/PageNotFound/PageNotFound";
import { services } from "../../data/services";
import { Link, useParams } from "react-router-dom";
import { ROUTE_URL } from "../../constant/routes.const";

export default function LearnMoreServicesPage() {
  const { category } = useParams();

  if (!category) {
    return <PageNotFound />;
  }

  const decodedCategory = decodeURIComponent(category);
  const categoryData = services.find(
    (service) =>
      service.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  if (!categoryData) {
    return <PageNotFound />;
  }

  const Icon = categoryData.icon;

  return (
    <>
      <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] bg-black/30 overflow-hidden flex flex-col items-center  justify-center h-screen text-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8 ">
        {/* Orange glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
        <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>
        {/* All content in one centered container */}
        <div className="relative max-w-7xl w-full flex flex-col items-center animate-fade-in gap-10">
          <div className="flex items-center justify-center w-full mb-6">
            <Link
              to={ROUTE_URL.SERVICE}
              className="text-saas-orange hover:underline flex items-center"
            >
              <ArrowLeft className="w-14 h-14 text-saas-orange hover:text-white  hover:bg-saas-orange rounded-full " />
            </Link>

            <div className="flex items-center justify-center gap-10  w-full">
              <Icon className="text-white h-28 w-28 bg-saas-orange rounded-full  " />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
                {categoryData?.category}
              </h1>
            </div>

            {/* <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {categoryData.category}
            </h1> */}
          </div>
        </div>
        <hr className=" " />
        <div className="">
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto text-center">
            {categoryData.description}
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {categoryData.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-saas-black/50 border border-saas-orange/20 p-6 rounded-xl text-left hover:border-saas-orange transition"
                >
                  <Icon className="w-8 h-8 text-saas-orange mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Abstract shapes */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full"></div>
      </div>

      <CtaSection />
    </>
  );
}

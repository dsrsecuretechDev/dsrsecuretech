import { ArrowLeft } from "lucide-react";
import CtaSection from "../../app/components/CtaSection";
import PageNotFound from "../../app/notFound/PageNotFound/PageNotFound";
import { services } from "../../data/services";
import { Link, useParams } from "react-router-dom";
import { ROUTE_URL } from "../../constant/routes.const";

export default function LearnMoreServicesPage() {
  const { category } = useParams();

  if (!category) return <PageNotFound />;

  const decodedCategory = decodeURIComponent(category);
  const categoryData = services.find(
    (service) =>
      service.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  if (!categoryData) return <PageNotFound />;

  const Icon = categoryData.icon;

  return (
    <>
      <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden text-center px-4 sm:px-6 md:px-8 py-16">
        {/* Glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]" />
        <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]" />

        {/* Header */}
        <div className="relative max-w-6xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center mb-12 relative">
            <Link
              to={ROUTE_URL.SERVICE}
              className="absolute left-0 flex items-center text-saas-orange"
            >
              <ArrowLeft className="w-12 h-12 text-saas-orange hover:text-white hover:bg-saas-orange rounded-full p-2 transition-colors" />
            </Link>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Icon className="text-white w-20 h-20 bg-saas-orange rounded-full p-4" />
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                {categoryData?.category}
              </h1>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 max-w-6xl mx-auto">
            {categoryData?.description?.map((desc, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                {desc}
              </p>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {categoryData.services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-saas-black/50 border border-saas-orange/20 p-6 rounded-2xl text-left hover:border-saas-orange hover:shadow-lg hover:shadow-saas-orange/10 transition-all duration-300"
                >
                  <ServiceIcon className="w-10 h-10 text-saas-orange mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.name}
                  </h3>
                  <p className="text-gray-400">{service?.description?.[0]}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full" />
        <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full" />
        <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full" />
      </div>

      <CtaSection />
    </>
  );
}

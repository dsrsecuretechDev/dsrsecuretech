import { ArrowLeft, ArrowRight } from "lucide-react";
import CtaSection from "../../app/components/CtaSection";
import PageNotFound from "../../app/notFound/PageNotFound/PageNotFound";
import { services } from "../../data/services";
import { Link, useParams } from "react-router-dom"; // Make sure you have this
import { ROUTE_URL } from "../../constant/routes.const";

export default function LearnMoreServicesPage() {
  const { category } = useParams();

  if (!category) {
    return <PageNotFound />;
  }

  // Decode URL category and find match
  const decodedCategory = decodeURIComponent(category);
  const categoryData = services.find(
    (service) =>
      service.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  if (!categoryData) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden flex items-center">
        <div className="section-container z-10 text-center">
          <div className="items-center gap-10 justify-center">
            <Link
              to={ROUTE_URL.SERVICE}
              className="text-saas-orange hover:underline"
            >
              <ArrowLeft className="w-6 h-6 text-saas-orange mr-2" />
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {categoryData.category}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              {categoryData.description}
            </p>
          </div>

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
      </div>

      <CtaSection />
    </>
  );
}

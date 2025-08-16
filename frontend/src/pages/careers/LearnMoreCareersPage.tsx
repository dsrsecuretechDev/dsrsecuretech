import { ArrowLeft, StickyNote } from 'lucide-react';
import PageNotFound from '../../app/notFound/PageNotFound/PageNotFound';
import { Link, useParams } from 'react-router-dom';
import { ROUTE_URL } from '../../constant/routes.const';
import { jobss } from '../../data/careersData';

export default function LearnMoreCareersPage() {
  const { category } = useParams();

  if (!category) return <PageNotFound />;

  const decodedCategory = decodeURIComponent(category);
  const filterJobs = jobss.find((job) => job.name.toLowerCase() === decodedCategory.toLowerCase());

  if (!filterJobs) return <PageNotFound />;

  const Icon = filterJobs.icon;

  return (
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden text-center px-4 sm:px-6 md:px-8 py-16">
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]" />
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]" />

      {/* Header Section */}
      <div className="relative max-w-5xl mx-auto animate-fade-in">
        <div className="flex items-center justify-center mb-10 relative">
          <Link
            to={ROUTE_URL.CAREERS}
            className="absolute left-0 flex items-center justify-center text-saas-orange">
            <ArrowLeft className="w-12 h-12 text-saas-orange hover:text-white hover:bg-saas-orange rounded-full p-2 transition-colors" />
          </Link>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Icon className="bg-saas-orange w-20 h-20 rounded-full text-white p-4" />
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{filterJobs?.name}</h1>
          </div>
        </div>

        {/* Description */}
        {filterJobs.description?.map((desc, index) => (
          <p
            key={index}
            className="text-lg md:text-xl mb-6 text-gray-300 max-w-4xl mx-auto">
            {desc}
          </p>
        ))}

        {/* Responsibilities & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Key Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {filterJobs.responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Required Skills</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {filterJobs.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack & Experience */}
        <div className="mt-12 text-left">
          {filterJobs.techStack && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-white">Tech Stack:</h2>
              <div className="flex flex-wrap gap-3 text-gray-300">
                {filterJobs.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-saas-black/50 border border-saas-orange/20 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <h2 className="text-2xl font-semibold text-white">
            Experience Level: <span className="text-gray-300">{filterJobs.experience}</span>
          </h2>
        </div>

        <div className="mt-12 px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl flex sm:text-3xl font-semibold mb-4 text-white text-center sm:text-left">
            <StickyNote className="size-4 bg-saas-orange rounded-full " /> <span>How to Apply</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg text-center sm:text-left">
            If you have relevant experience, you can drop your CV at :{' '}
            <a
              href="mailto:hr@dsrsecuretech.com"
              className="text-saas-orange font-medium underline hover:text-orange-400 transition-colors">
              hr@dsrsecuretech.com
            </a>
          </p>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full" />
      <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full" />
      <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full" />
    </div>
  );
}


import { useState } from "react";
import { jobss } from "../../data/careersData";
import { Search, X } from "lucide-react"; // lucide-react icons

const categories = [
  "AI",
  "Sales",
  "IT Ops",
  "Marketing",
  "Document Ops",
  "Development",
  "Support",
];

const Careers = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const removeTag = () => setSelectedTag(null);

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null); // deselect if clicked again
    } else {
      setSelectedTag(tag);
    }
  };

  const filteredServices = jobss?.filter((service) =>
    selectedTag ? service.category === selectedTag : true
  );

  const clearAll = () => {
    setSelectedTag(null);
    setSearchValue("");
  };

  return (
    <>
      <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] bg-black/30 overflow-hidden min-h-[96vh] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8 ">
        {/* Orange glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
        <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

        {/* All content in one centered container */}
        <div className="relative max-w-7xl w-full flex flex-col items-center animate-fade-in gap-10">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Let’s Do Great Things{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Together.
            </span>
          </h1>

          {/* Search & Categories */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center w-full max-w-2xl px-3 py-2 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md text-white">
              {selectedTag && (
                <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mr-2">
                  {selectedTag}
                  <X
                    className="w-4 h-4 cursor-pointer hover:text-red-300"
                    onClick={removeTag}
                  />
                </span>
              )}

              <input
                type="text"
                placeholder="search for a job title or keyword"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 bg-transparent outline-none placeholder-white/50 text-sm"
              />

              {(selectedTag || searchValue) && (
                <X
                  className="w-5 h-5 text-white/50 cursor-pointer hover:text-red-300 mr-2"
                  onClick={clearAll}
                />
              )}

              <Search className="w-5 h-5 text-white/50 cursor-pointer" />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleTagClick(category)}
                  className={`px-4 py-1 border rounded-full text-sm transition ${
                    selectedTag === category
                      ? "bg-orange-500 text-white border-orange-500"
                      : "text-white/80 border-white/30 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <hr className=" " />

          {/* Cards */}
          <div className="max-w-7xl  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 ">
            {filteredServices.length > 0 ? (
              filteredServices.map((job, index) => {
                const Icon = job.icon;
                return (
                  <div
                    key={index}
                    className="text-center px-6 py-6 bg-saas-dark rounded-xl border border-gray-800 transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-saas-darkGray"
                  >
                    <div className="bg-indigo-100/10 p-3 rounded-full inline-flex items-center justify-center mx-auto mb-4">
                      <Icon size={28} className="text-saas-orange" />
                    </div>
                    <h3 className="text-lg text-saas-orange font-semibold mb-2">
                      {job.name}
                    </h3>
                    <p className="text-md mb-2">{job.description}</p>
                    <a
                      href="#"
                      className="text-indigo-400 text-sm font-medium hover:underline"
                    >
                      Learn more.
                    </a>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-400 text-lg text-center mt-10">
                Opportunity not found.
              </p>
            )}
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full"></div>
      </div>
    </>
  );
};

export default Careers;

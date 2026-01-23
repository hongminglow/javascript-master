import { useState, useEffect } from "react";
import { apiData } from "./data/apiData";
import ApiCard from "./components/ApiCard";
import Sidebar from "./components/Sidebar";
import { Search, Menu, Moon, Sun, X } from "lucide-react";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme State
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Apply Theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const categories = Array.from(
    new Set(apiData.map((api) => api.category)),
  ).sort();

  const filteredData = apiData.filter((api) => {
    const matchesCategory = activeCategory
      ? api.category === activeCategory
      : true;

    // Improved Fuzzy-ish Search
    const searchLower = searchTerm.toLowerCase();
    const searchTerms = searchLower.split(" ").filter(Boolean);

    const matchesSearch =
      searchTerms.length === 0 ||
      searchTerms.every(
        (term) =>
          api.name.toLowerCase().includes(term) ||
          api.description.toLowerCase().includes(term) ||
          api.usage.toLowerCase().includes(term),
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex font-sans text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchTerm("");
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsMobileMenuOpen(false);
        }}
      />

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 bg-white dark:bg-slate-900 shadow-xl z-50 h-full flex flex-col w-72 transform transition-transform duration-300">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
            <Sidebar
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={(cat) => {
                setActiveCategory(cat);
                setIsMobileMenuOpen(false);
              }}
            />
          </div>
        </div>
      )}

      <main className="flex-1 min-w-0 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 px-4 sm:px-6 py-4 transition-all duration-200">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <button
              className="md:hidden p-2 -ml-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>

            <div className="relative flex-1 max-w-2xl group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                  size={18}
                  className="text-gray-400 group-focus-within:text-yellow-500 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Search APIs (e.g., 'array map', 'promise race', 'find')..."
                className="block w-full pl-10 pr-3 py-2.5 sm:py-2 border border-gray-200 dark:border-slate-700 rounded-xl leading-5 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 outline-none"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-slate-600" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto w-full">
          {/* Hero / Intro for All APIs view */}
          {!activeCategory && !searchTerm && (
            <div className="mb-10 p-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
                  Master JavaScript
                </h2>
                <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed mb-6">
                  The ultimate interactive reference for JavaScript APIs.
                  Explore comprehensive examples for Array, String, Object
                  methods and more.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium">
                    <span className="bg-green-400 w-2 h-2 rounded-full"></span>
                    {apiData.length} APIs Indexed
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              {activeCategory ? `${activeCategory} APIs` : "All APIs"}
              {searchTerm && (
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-2">
                  matching "{searchTerm}"
                </span>
              )}
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
              {filteredData.length} results
            </span>
          </div>

          {filteredData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="p-6 bg-gray-100 dark:bg-slate-800 rounded-full mb-4">
                <Search
                  size={48}
                  className="text-gray-400 dark:text-gray-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No matching APIs found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                We couldn't find any API matching "{searchTerm}". Try broadening
                your search.
              </p>
              {activeCategory && (
                <button
                  onClick={() => setActiveCategory(null)}
                  className="mt-6 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  View all categories
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredData.map((api) => (
                <ApiCard key={api.id} api={api} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

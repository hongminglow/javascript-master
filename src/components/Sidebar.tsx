import React from "react";
import { Layers, Box, Type, Hash, Binary, Sigma } from "lucide-react";

interface SidebarProps {
  categories: string[];
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  const getIcon = (category: string) => {
    switch (category) {
      case "Array":
        return <Layers size={18} />;
      case "Object":
        return <Box size={18} />;
      case "String":
        return <Type size={18} />;
      case "Number":
        return <Hash size={18} />;
      case "JSON":
        return <Binary size={18} />;
      case "Promise":
        return <Binary size={18} />;
      case "Map":
        return <Box size={18} />;
      case "Set":
        return <Layers size={18} />;
      case "Function":
        return <Sigma size={18} />;
      case "Math":
        return <Sigma size={18} />;
      default:
        return <Layers size={18} />;
    }
  };

  return (
    <aside className="w-full h-full md:w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 md:h-screen sticky top-0 flex flex-col overflow-y-auto transition-colors duration-200">
      <div className="p-6 border-b border-gray-100 dark:border-slate-800">
        <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter flex items-center gap-1">
          <span className="text-yellow-500">JS</span>{" "}
          <span className="text-slate-800 dark:text-slate-200">MASTER</span>
        </h1>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-widest font-semibold">
          Reference Guide
        </p>
      </div>

      <nav className="p-4 space-y-1">
        <button
          onClick={() => onSelectCategory(null)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeCategory === null
              ? "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-500 shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <Layers size={18} />
          All APIs
        </button>

        <div className="pt-6 pb-2 px-4 text-xs font-bold text-gray-400 dark:text-slate-600 uppercase tracking-wider">
          Categories
        </div>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {getIcon(category)}
            {category}
          </button>
        ))}
      </nav>

      <div className="mt-auto p-6 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50">
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            "The most complete JS reference."
          </p>
          <p className="text-[10px] text-gray-400 dark:text-gray-600 mt-2">
            v1.0.0 • Tailwind 4.0
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

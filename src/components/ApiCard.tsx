import React from "react";
import { ExternalLink, Play, Code2 } from "lucide-react";
import { type ApiExample } from "../data/apiData";

interface ApiCardProps {
  api: ApiExample;
}

const ApiCard: React.FC<ApiCardProps> = ({ api }) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Array":
        return "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300";
      case "Object":
        return "bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-300";
      case "String":
        return "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-300";
      case "Math":
        return "bg-pink-100 text-pink-800 dark:bg-pink-500/20 dark:text-pink-300";
      case "Promise":
        return "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-slate-800 hover:shadow-lg hover:border-indigo-300 dark:hover:border-slate-600 transition-all duration-300 group">
      <div className="p-5 sm:p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span
              className={`self-start px-2 py-1 text-xs font-bold rounded uppercase tracking-wide ${getCategoryColor(api.category)}`}
            >
              {api.category}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-mono tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {api.name}
            </h3>
          </div>
          <a
            href={api.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors flex-shrink-0"
            title="View on MDN"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">
          {api.description}
        </p>

        <div className="space-y-6">
          {/* Code Usage Section */}
          <div className="bg-slate-900 dark:bg-black rounded-lg p-4 overflow-hidden relative group/code shadow-inner ring-1 ring-white/10">
            <div className="absolute top-2 right-2 flex items-center gap-2 opacity-0 group-hover/code:opacity-100 transition-opacity">
              <span className="text-[10px] text-slate-500 font-mono uppercase">
                JavaScript
              </span>
            </div>
            <pre className="text-sm font-mono text-blue-100 overflow-x-auto p-1 custom-scrollbar">
              <code>{api.usage}</code>
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input Section */}
            <div className="border border-gray-200 dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-800/50 flex flex-col">
              <div className="px-4 py-2 border-b border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Code2 size={14} />
                Input
              </div>
              <div className="p-4 overflow-x-auto flex-grow">
                <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
                  {typeof api.input === "object"
                    ? JSON.stringify(api.input, null, 2)
                    : String(api.input)}
                </pre>
              </div>
            </div>

            {/* Output Section */}
            <div className="border border-green-200 dark:border-green-800/30 rounded-lg bg-green-50/50 dark:bg-green-900/10 flex flex-col">
              <div className="px-4 py-2 border-b border-green-200 dark:border-green-800/30 bg-green-100/50 dark:bg-green-900/20 text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider flex items-center gap-2">
                <Play size={14} />
                Output
              </div>
              <div className="p-4 overflow-x-auto flex-grow">
                <pre className="text-sm font-mono text-gray-800 dark:text-green-100">
                  {typeof api.output === "object"
                    ? JSON.stringify(api.output, null, 2)
                    : String(api.output)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiCard;

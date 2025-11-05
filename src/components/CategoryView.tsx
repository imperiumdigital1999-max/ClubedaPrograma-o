import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { aiTools } from '../data/tools';
import { categories } from '../data/categories';
import ToolCard from './ToolCard';

interface CategoryViewProps {
  categoryId: string;
  onBack: () => void;
  onToolSelect: (tool: AITool) => void;
}

export default function CategoryView({ categoryId, onBack, onToolSelect }: CategoryViewProps) {
  const category = categories.find(c => c.id === categoryId);
  const tools = aiTools.filter(tool => tool.category === categoryId);

  if (!category) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={onBack}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <div>
          <h1 className="text-3xl font-bold text-white">{category.name}</h1>
          <p className="text-slate-400 mt-1">{category.description}</p>
        </div>
      </div>

      {/* Tools Grid */}
      {tools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onToolClick={onToolSelect} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-slate-500 text-lg mb-4">
            Nenhuma ferramenta encontrada nesta categoria
          </div>
          <button
            onClick={onBack}
            className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-cyan-600 transition-all duration-300"
          >
            Voltar ao Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
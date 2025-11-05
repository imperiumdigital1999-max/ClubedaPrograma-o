import React from 'react';
import { Award } from 'lucide-react';
import { aiTools } from '../data/tools';
import ToolCard from './ToolCard';
import { AITool } from '../types';

interface FavoritesViewProps {
  onToolSelect: (tool: AITool) => void;
}

export default function FavoritesView({ onToolSelect }: FavoritesViewProps) {
  // Filtrar ferramentas em destaque
  const featuredTools = aiTools.filter(tool => tool.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Award className="w-8 h-8 text-orange-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">Ferramentas em Destaque</h1>
          <p className="text-slate-400 mt-1">As melhores ferramentas de IA selecionadas pela nossa equipe</p>
        </div>
      </div>

      {featuredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onToolClick={onToolSelect} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Award className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <div className="text-slate-500 text-lg mb-4">
            Nenhuma ferramenta em destaque encontrada
          </div>
          <p className="text-slate-600">
            Ferramentas em destaque são selecionadas pela nossa equipe
          </p>
        </div>
      )}
    </div>
  );
}
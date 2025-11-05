import React from 'react';
import { Clock } from 'lucide-react';
import { aiTools } from '../data/tools';
import ToolCard from './ToolCard';
import { AITool } from '../types';

interface RecentViewProps {
  onToolSelect: (tool: AITool) => void;
}

export default function RecentView({ onToolSelect }: RecentViewProps) {
  // Para demonstração, vamos mostrar ferramentas novas como recentes
  const recentTools = aiTools.filter(tool => tool.new);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Clock className="w-8 h-8 text-cyan-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">Últimas Adicionadas</h1>
          <p className="text-slate-400 mt-1">As ferramentas mais recentes da nossa coleção</p>
        </div>
      </div>

      {recentTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onToolClick={onToolSelect} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Clock className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <div className="text-slate-500 text-lg mb-4">
            Nenhuma ferramenta recente encontrada
          </div>
          <p className="text-slate-600">
            Novas ferramentas são adicionadas regularmente
          </p>
        </div>
      )}
    </div>
  );
}
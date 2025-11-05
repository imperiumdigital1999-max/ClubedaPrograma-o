import React, { useState } from 'react';
import { Folder, FileText, Image, Mic, Video, Zap, Code, ArrowLeft, ArrowRight, Trophy, Star, ShieldCheck, Crown, Gem } from 'lucide-react';
import { aiTools } from '../data/tools';
import ToolCard from './ToolCard';
import { AITool } from '../types';

interface CategoriesViewProps {
  onToolSelect: (tool: AITool) => void;
}

interface CategoryInfo {
  id: string;
  name: string;
  emoji: string;
  icon: React.ComponentType<any>;
  gradient: string;
}

const categories: CategoryInfo[] = [
  {
    id: 'texto',
    name: 'Texto',
    emoji: '📝',
    icon: FileText,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'imagem',
    name: 'Imagem',
    emoji: '🎨',
    icon: Image,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'voz',
    name: 'Voz',
    emoji: '🎤',
    icon: Mic,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'video',
    name: 'Vídeo',
    emoji: '📹',
    icon: Video,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'automacao',
    name: 'Automação',
    emoji: '⚙️',
    icon: Zap,
    gradient: 'from-yellow-500 to-white-500'
  },
  {
    id: 'codigo',
    name: 'Código',
    emoji: '👨‍💻',
    icon: Code,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'banco',
    name: 'Banco de dados de imagem',
    emoji: '🏦',
    icon: Image,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    id: 'stream',
    name: 'Streamings (Em breve)',
    emoji: '🎬',
    icon: Video,
    gradient: 'from-red-500 to-black-500'
  },
  {
    id: 'edicao',
    name: 'Edições de vídeo',
    emoji: '🎞️',
    icon: Video,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'bonus',
    name: 'BONUS DE CURSOS (Em breve)',
    emoji: '🌟',
    icon: Gem,
    gradient: 'from-yellow-500 to-blue-500'
  },
  {
    id: 'pro',
    name: 'IAs PRO',
    emoji: '💎',
    icon: Crown,
    gradient: 'from-yellow-500 to-orange-500'
  },
];

export default function CategoriesView({ onToolSelect }: CategoriesViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const getToolsForCategory = (categoryId: string) => {
    return aiTools.filter(tool => tool.category === categoryId);
  };

  const selectedCategoryInfo = categories.find(cat => cat.id === selectedCategory);
  const categoryTools = selectedCategory ? getToolsForCategory(selectedCategory) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {!selectedCategory ? (
        // Exibir cards das categorias
        <>
          <div className="flex items-center space-x-3 mb-8">
            <Folder className="w-8 h-8 text-purple-500" />
            <div>
              <h1 className="text-3xl font-bold text-white">Categorias</h1>
              <p className="text-slate-400 mt-1">Escolha uma categoria para explorar as ferramentas</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const toolCount = getToolsForCategory(category.id).length;
              const Icon = category.icon;
              
              return (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="group cursor-pointer relative bg-slate-800 rounded-xl p-6 border border-transparent hover:border-orange-500/70 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {/* Ícone da categoria no canto superior esquerdo */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4">
                    Ferramentas especializadas em {category.name.toLowerCase()}
                  </p>
                  
                  <p className="text-slate-500 text-sm mt-2">
                    {toolCount} {toolCount === 1 ? 'ferramenta' : 'ferramentas'}
                  </p>

                  {/* Botão com seta no canto inferior direito - só aparece no hover */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-cyan-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        // Exibir ferramentas da categoria selecionada
        <>
          <div className="flex items-center space-x-4 mb-8">
            <button
              onClick={handleBackToCategories}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedCategoryInfo?.gradient} flex items-center justify-center`}>
                {selectedCategoryInfo && (
                  <selectedCategoryInfo.icon className="w-5 h-5 text-white" />
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{selectedCategoryInfo?.name}</h1>
                <p className="text-slate-400 mt-1">
                  {categoryTools.length} {categoryTools.length === 1 ? 'ferramenta encontrada' : 'ferramentas encontradas'}
                </p>
              </div>
            </div>
          </div>

          {categoryTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} onToolClick={onToolSelect} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-slate-500 text-lg mb-4">
                Nenhuma ferramenta encontrada nesta categoria
              </div>
              <button
                onClick={handleBackToCategories}
                className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-cyan-600 transition-all duration-300"
              >
                Voltar às Categorias
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
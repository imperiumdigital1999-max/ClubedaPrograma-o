import React, { useState } from 'react';
import { ArrowLeft, Brain, Rocket, Play, Copy, ExternalLink, GraduationCap, Check } from 'lucide-react';
import { AITool } from '../types';

interface ToolDetailViewProps {
  tool: AITool;
  onBack: () => void;
}

export default function ToolDetailView({ tool, onBack }: ToolDetailViewProps) {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const handleCopyPrompt = async (promptId: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedPrompt(promptId);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar prompt:', err);
    }
  };

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleAccessTool = () => {
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  const handleFreeAccessVideo = () => {
    if (tool.freeAccessVideo) {
      window.open(tool.freeAccessVideo, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header com botão voltar */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button
              onClick={onBack}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold text-white">{tool.name}</h1>
          </div>
        </div>
      </div>

      {/* Banner de Capa */}
      <div 
        className="relative h-64 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${tool.coverImage || tool.image})`
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {tool.name}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* 1. Função */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-white">Função</h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            {tool.function || tool.description}
          </p>
        </section>

        {/* 2. Principais Aplicações */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Rocket className="w-6 h-6 text-cyan-500" />
            <h2 className="text-2xl font-bold text-white">Principais Aplicações</h2>
          </div>
          <div className="grid gap-4">
            {tool.applications?.map((application, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-300">{application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Exemplos Práticos em Vídeo */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Play className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Exemplos Práticos em Vídeo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tool.videos?.map((video) => (
              <div 
                key={video.id}
                onClick={() => handleVideoClick(video.url)}
                className="group cursor-pointer bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium text-sm line-clamp-2 group-hover:text-purple-400 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Biblioteca de Prompts */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Copy className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold text-white">Biblioteca de Prompts</h2>
          </div>
          <div className="space-y-4">
            {tool.prompts?.map((prompt) => (
              <div key={prompt.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{prompt.title}</h3>
                  <button
                    onClick={() => handleCopyPrompt(prompt.id, prompt.content)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      copiedPrompt === prompt.id
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {copiedPrompt === prompt.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span className="text-sm">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-sm">Copiar</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                  <code className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {prompt.content}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Acesso à Ferramenta */}
        <section>
          <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 rounded-2xl p-8 border border-orange-500/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Pronto para começar?</h2>
            <p className="text-slate-300 mb-6">
              Acesse {tool.name} agora e coloque em prática tudo que você aprendeu
            </p>
            <button
              onClick={handleAccessTool}
              className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto hover:from-orange-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Testar {tool.name} agora</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* 6. Como Usar de Graça */}
        <section>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <GraduationCap className="w-8 h-8 text-purple-500" />
              <h2 className="text-2xl font-bold text-white">Como Usar de Graça</h2>
            </div>
            <p className="text-slate-300 mb-6">
              Aprenda como acessar {tool.name} de forma gratuita e maximize seus resultados sem gastar nada
            </p>
            <button
              onClick={handleFreeAccessVideo}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 mx-auto hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-5 h-5" />
              <span>Ver vídeo explicativo</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
import React from 'react';
import { ExternalLink, ArrowRight, Users } from 'lucide-react';
import AnnouncementBanner from './AnnouncementBanner';

interface DashboardProps {
  onToolSelect?: (tool: any) => void;
  onViewChange?: (view: string) => void;
}

export default function Dashboard({ onToolSelect, onViewChange }: DashboardProps) {

  const handleCommunityClick = () => {
    window.open('https://whatsapp.com/channel/0029Vb4Byv61noz5kQi01Y1Z', '_blank', 'noopener,noreferrer');
  };

  const handleViewCategories = () => {
    if (onViewChange) {
      onViewChange('categories');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero Banner */}
      <div 
        className="relative mb-12 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: 'url(https://cibrius.com.br/wp-content/uploads/2024/07/Banner-pro-site-22.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '300px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80" />
        <div className="relative z-10 flex items-center justify-center min-h-[300px] px-6 py-12 text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Bem-vindo ao{' '}
              <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
                Clube das IAs
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Descubra as melhores ferramentas de inteligência artificial organizadas por categoria. 
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
          <div className="text-2xl font-bold text-white mb-1">150+</div>
          <div className="text-slate-400 text-sm">Ferramentas</div>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
          <div className="text-2xl font-bold text-white mb-1">20</div>
          <div className="text-slate-400 text-sm">Categorias</div>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
          <div className="text-2xl font-bold text-white mb-1">100%</div>
          <div className="text-slate-400 text-sm">Gratuito</div>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
          <div className="text-2xl font-bold text-white mb-1">24hrs</div>
          <div className="text-slate-400 text-sm">Disponível</div>
        </div>
      </div>

      {/* Announcement Banner */}
      <AnnouncementBanner onViewCategories={handleViewCategories} />

      {/* Comunidade Banner */}
      <section>
        <div 
          className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
          }}
        >
          <div className="relative z-10 text-center py-12 px-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="w-10 h-10 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Entre na Comunidade dos Gestores de IA</h2>
            </div>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
              Conecte-se com outros profissionais, compartilhe experiências e aprenda as melhores práticas em IA
            </p>
            <button
              onClick={handleCommunityClick}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-6 h-6" />
              <span>Entrar na Comunidade</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

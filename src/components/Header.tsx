import React from 'react';
import { Menu, Star, Clock, Folder } from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onMenuToggle: () => void;
}

export default function Header({ currentView, onViewChange, onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Clube das IAs</h1>
                <p className="text-xs text-slate-400 hidden sm:block">Hub Premium de Ferramentas</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => onViewChange('dashboard')}
                className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                  currentView === 'dashboard'
                    ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => onViewChange('categories')}
                className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                  currentView === 'categories'
                    ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Categorias
              </button>
              <button
                onClick={() => onViewChange('favorites')}
                className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                  currentView === 'favorites'
                    ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Em Destaque
              </button>
              <button
                onClick={() => onViewChange('recent')}
                className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                  currentView === 'recent'
                    ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Recentes
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
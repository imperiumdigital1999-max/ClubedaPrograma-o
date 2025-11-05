import React from 'react';
import { Home, Award, Clock, Folder } from 'lucide-react';
import { ViewMode } from '../types';

interface BottomNavigationProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function BottomNavigation({ currentView, onViewChange }: BottomNavigationProps) {
  const navItems = [
    { id: 'dashboard' as ViewMode, label: 'Dashboard', icon: Home },
    { id: 'categories' as ViewMode, label: 'Categorias', icon: Folder },
    { id: 'favorites' as ViewMode, label: 'Destaque', icon: Award },
    { id: 'recent' as ViewMode, label: 'Recentes', icon: Clock },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 md:hidden z-50">
      <div className="flex items-center justify-around py-3 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-300 min-w-0 flex-1 ${
                isActive
                  ? 'text-orange-500 transform scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 transition-colors ${isActive ? 'text-orange-500' : ''}`} />
              <span className={`text-xs font-medium transition-colors truncate ${isActive ? 'text-orange-500' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
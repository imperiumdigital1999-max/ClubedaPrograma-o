import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BottomNavigation from './components/BottomNavigation';
import Dashboard from './components/Dashboard';
import CategoriesView from './components/CategoriesView';
import CategoryView from './components/CategoryView';
import FavoritesView from './components/FavoritesView';
import RecentView from './components/RecentView';
import ToolDetailView from './components/ToolDetailView';
import { ViewMode, AITool } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);

  const handleViewChange = (view: ViewMode) => {
    setCurrentView(view);
    if (view === 'dashboard' || view === 'ias' || view === 'cursos' || view === 'programming') {
      setSelectedCategory('');
      setSelectedTool(null);
    }
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedCategory('');
    setSelectedTool(null);
  };

  const handleToolSelect = (tool: AITool) => {
    setSelectedTool(tool);
    setCurrentView('tool-detail');
  };

  const handleBackFromTool = () => {
    setSelectedTool(null);
    // Volta para a view anterior (categoria, favoritas, etc.)
    if (selectedCategory) {
      setCurrentView('ia-detail');
    } else {
      setCurrentView('dashboard');
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'tool-detail':
        return selectedTool ? (
          <ToolDetailView
            tool={selectedTool}
            onBack={handleBackFromTool}
          />
        ) : null;
      case 'ias':
        return <CategoriesView onToolSelect={handleToolSelect} />;
      case 'ia-detail':
        return (
          <CategoryView
            categoryId={selectedCategory}
            onBack={handleBackToDashboard}
            onToolSelect={handleToolSelect}
          />
        );
      case 'cursos':
        return <FavoritesView onToolSelect={handleToolSelect} />;
      case 'programming':
        return <RecentView onToolSelect={handleToolSelect} />;
      default:
        return <Dashboard onToolSelect={handleToolSelect} onViewChange={handleViewChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {currentView !== 'tool-detail' && (
        <Header
          currentView={currentView}
          onViewChange={handleViewChange}
          onMenuToggle={() => {}}
        />
      )}
      
      <main className={`min-h-screen ${currentView !== 'tool-detail' ? 'pb-20 md:pb-0' : ''}`}>
        {renderCurrentView()}
      </main>
      
      {currentView !== 'tool-detail' && (
        <BottomNavigation
          currentView={currentView}
          onViewChange={handleViewChange}
        />
      )}
    </div>
  );
}

export default App;
import React from 'react';
import { Button } from '@/components/ui/button';
import { CategoryDropdown } from '@/components/CategoryDropdown';
import { AppCard } from '@/components/AppCard';
import { AppSidePanel } from '@/components/AppSidePanel';
import { App, TabType } from '@/types';

interface AppsPageProps {
  apps: App[];
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  selectedApp: App | null;
  onAppSelect: (app: App | null) => void;
  onInstall: (app: App, version?: string) => void;
  onRequest: (app: App, reason: string) => void;
  onNavigateToRequests?: (appId: string) => void;
  searchQuery: string;
}

export function AppsPage({
  apps,
  categories,
  selectedCategories,
  onCategoryChange,
  activeTab,
  onTabChange,
  selectedApp,
  onAppSelect,
  onInstall,
  onRequest,
  onNavigateToRequests,
  searchQuery
}: AppsPageProps) {
  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
                           selectedCategories.includes(app.category);
    
    const matchesTab = activeTab === 'all' || app.type === activeTab;
    
    return matchesSearch && matchesCategory && matchesTab;
  });

  // No pagination needed - show all filtered apps

  const handleAppInstall = (app: App, version?: string) => {
    onInstall(app, version);
  };

  const handleAppRequest = (app: App, reason: string) => {
    onRequest(app, reason);
  };

  return (
    <div className="flex-1 bg-transparent dark:bg-gray-900 min-h-0 h-full">
      <div className="h-full flex relative">
        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${selectedApp ? 'sm:mr-[320px] md:mr-[380px] lg:mr-[461px]' : ''} min-h-0`}>
          <div className="apps-main-content p-2 sm:p-3 md:p-4 h-full flex flex-col min-h-0">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl border border-white/20 dark:border-gray-700/30 shadow-xl shadow-blue-500/5 dark:shadow-blue-400/10 p-3 xs:p-4 md:p-6 h-full flex flex-col min-h-0">
            {/* Inline Navigation Controls */}
            <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 flex-wrap">
              {/* Left side: Tab Menu Only */}
              <div className="flex items-center">
                <div className="tab-buttons flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                  <Button
                    variant={activeTab === 'all' ? 'default' : 'ghost'}
                    onClick={() => onTabChange('all')}
                    className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md transition-all duration-200 ${
                      activeTab === 'all' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    size="sm"
                  >
                    All
                  </Button>
                  <Button
                    variant={activeTab === 'free' ? 'default' : 'ghost'}
                    onClick={() => onTabChange('free')}
                    className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md transition-all duration-200 ${
                      activeTab === 'free' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    size="sm"
                  >
                    Free
                  </Button>
                  <Button
                    variant={activeTab === 'paid' ? 'default' : 'ghost'}
                    onClick={() => onTabChange('paid')}
                    className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md transition-all duration-200 ${
                      activeTab === 'paid' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    size="sm"
                  >
                    Paid
                  </Button>
                </div>
              </div>

              {/* Right side: App Count and Category dropdown */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                {/* App Count - Back next to categories */}
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                  <span className="block sm:hidden">
                    {filteredApps.length} app{filteredApps.length !== 1 ? 's' : ''}
                  </span>
                  <span className="hidden sm:block">
                    {filteredApps.length} app{filteredApps.length !== 1 ? 's' : ''} found
                  </span>
                </div>
                
                <div className="flex-shrink-0">
                  <CategoryDropdown
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onCategoryChange={onCategoryChange}
                  />
                </div>
              </div>
            </div>

            {/* Apps Grid */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-h-0 flex flex-col">
              <div className="flex-1 overflow-y-auto p-2 xs:p-3 md:p-4">
                {filteredApps.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
                    <div className="text-6xl mb-4">📱</div>
                    <h3 className="text-lg font-medium mb-2">No apps found</h3>
                    <p className="text-center">
                      {searchQuery ? 'Try adjusting your search or filters' : 'No apps match the current filters'}
                    </p>
                  </div>
                ) : (
                  <div className={`app-card-grid grid gap-3 sm:gap-4 ${
                    selectedApp 
                      ? 'with-side-panel grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4'
                      : 'grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'
                  }`}>
                    {filteredApps.map((app) => (
                      <AppCard
                        key={app.id}
                        app={app}
                        onInstall={handleAppInstall}
                        onRequest={handleAppRequest}
                        onClick={onAppSelect}
                        isSelected={selectedApp?.id === app.id}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <AppSidePanel
          app={selectedApp}
          isOpen={!!selectedApp}
          onClose={() => onAppSelect(null)}
          onInstall={handleAppInstall}
          onRequest={handleAppRequest}
          onNavigateToRequests={onNavigateToRequests}
        />
      </div>
    </div>
  );
}
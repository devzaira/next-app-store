import React, { useState } from 'react';
import { Search, Moon, Sun, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ViewMode } from '@/types';
import { AboutDialog } from '@/components/AboutDialog';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({
  currentView,
  onViewChange,
  isDarkMode,
  onToggleDarkMode,
  searchQuery,
  onSearchChange
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30 shadow-sm shadow-blue-500/5 dark:shadow-blue-400/10 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-semibold text-gray-900 dark:text-white">Enterprise Store</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Albertsons Companies</p>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6">
                <Button
                  variant={currentView === 'apps' ? 'default' : 'ghost'}
                  onClick={() => onViewChange('apps')}
                  className={currentView === 'apps' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }
                >
                  Apps
                </Button>
                <Button
                  variant={currentView === 'requests' ? 'default' : 'ghost'}
                  onClick={() => onViewChange('requests')}
                  className={currentView === 'requests' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }
                >
                  Requests
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>

            {/* Desktop Search and Controls */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder={currentView === 'apps' ? "Search apps..." : "Search requests..."}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-80 pl-10 bg-gray-50/50 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleDarkMode}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              
              {/* About Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAboutOpen(true)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                About
              </Button>
              
              {/* LDAP Info */}
              <div className="text-right hidden lg:block">
                <div className="text-xs text-gray-500 dark:text-gray-400">LDAP</div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">RMAS-FRONT</div>
              </div>
              
              {/* User Avatar */}
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <User size={16} className="text-gray-600 dark:text-gray-300" />
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex sm:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleDarkMode}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <User size={16} className="text-gray-600 dark:text-gray-300" />
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200/30 dark:border-gray-700/30">
              <div className="space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder={currentView === 'apps' ? "Search apps..." : "Search requests..."}
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-10 bg-gray-50/50 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
                
                {/* Mobile Navigation */}
                <div className="flex space-x-2">
                  <Button
                    variant={currentView === 'apps' ? 'default' : 'outline'}
                    onClick={() => {
                      onViewChange('apps');
                      setIsMenuOpen(false);
                    }}
                    className={`flex-1 ${currentView === 'apps' 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    Apps
                  </Button>
                  <Button
                    variant={currentView === 'requests' ? 'default' : 'outline'}
                    onClick={() => {
                      onViewChange('requests');
                      setIsMenuOpen(false);
                    }}
                    className={`flex-1 ${currentView === 'requests' 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    Requests
                  </Button>
                </div>

                {/* Mobile About Button */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsAboutOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-gray-600 dark:text-gray-300"
                >
                  About
                </Button>
                
                {/* Mobile LDAP Info */}
                <div className="text-center py-2 border-t border-gray-200/30 dark:border-gray-700/30">
                  <div className="text-xs text-gray-500 dark:text-gray-400">LDAP: RMAS-FRONT</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <AboutDialog isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
}
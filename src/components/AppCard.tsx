import React from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { App } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AppCardProps {
  app: App;
  onInstall: (app: App) => void;
  onRequest: (app: App) => void;
  onClick: (app: App) => void;
  isSelected?: boolean;
}

export function AppCard({ app, onInstall, onRequest, onClick, isSelected }: AppCardProps) {
  const getStatusButton = () => {
    switch (app.status) {
      case 'installing':
        return (
          <Button disabled className="w-full bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200 text-xs sm:text-sm py-1.5 sm:py-2 h-8 sm:h-auto">
            <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin text-blue-600" />
            <span className="hidden sm:inline">Installing...</span>
            <span className="sm:hidden">Installing</span>
          </Button>
        );
      case 'installed':
        return (
          <Button disabled className="w-full bg-green-100 text-green-700 hover:bg-green-100 border-green-200 shadow-sm text-xs sm:text-sm py-1.5 sm:py-2 h-8 sm:h-auto">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-700" />
            <span className="hidden sm:inline">Installed</span>
            <span className="sm:hidden">✓</span>
          </Button>
        );
      case 'processing':
        return (
          <Button disabled className="w-full bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200 text-xs sm:text-sm py-1.5 sm:py-2 h-8 sm:h-auto">
            <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin" />
            <span className="hidden sm:inline">Processing...</span>
            <span className="sm:hidden">Processing</span>
          </Button>
        );
      case 'requested':
        return (
          <Button disabled className="w-full bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200 text-xs sm:text-sm py-1.5 sm:py-2 h-8 sm:h-auto">
            <span className="hidden sm:inline">Requested</span>
            <span className="sm:hidden">Requested</span>
          </Button>
        );
      default:
        return app.type === 'paid' ? (
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onRequest(app);
            }}
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 text-white shadow-md transition-all duration-200 text-xs sm:text-sm py-1.5 sm:py-2 h-8 sm:h-auto"
          >
            <span className="hidden sm:inline">Request</span>
            <span className="sm:hidden">Request</span>
          </Button>
        ) : (
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onInstall(app);
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md transition-all duration-200 text-xs sm:text-sm py-1.5 sm:py-2 h-8 sm:h-auto"
          >
            <span className="hidden sm:inline">Install</span>
            <span className="sm:hidden">Install</span>
          </Button>
        );
    }
  };

  return (
    <div 
      className={`
        app-card group relative bg-white dark:bg-[#021121] rounded-xl cursor-pointer 
        hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-900/50 hover:-translate-y-0.5
        hover:ring-2 hover:ring-blue-500/50 dark:hover:ring-blue-400/50
        transition-all duration-200 ease-out
        border border-gray-200 dark:border-gray-600 w-full
        ${isSelected ? 'ring-2 ring-blue-500 shadow-lg -translate-y-0.5' : ''}
        
        /* Responsive layout: horizontal on very small screens, vertical on larger */
        flex sm:flex-col
        p-3 sm:p-4
        h-20 sm:h-40 md:h-44 lg:h-48
        items-center sm:items-stretch
        gap-3 sm:gap-0
      `}
      onClick={() => onClick(app)}
    >
      {/* App Icon */}
      <div className="flex justify-center items-center flex-shrink-0 sm:mb-2 md:mb-3">
        <div className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-gray-700 rounded-lg md:rounded-xl flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-600 shadow-sm">
          <ImageWithFallback
            src={app.icon}
            alt={app.name}
            className="w-full h-full object-cover rounded-lg md:rounded-xl"
          />
        </div>
      </div>

      {/* App Info - ALWAYS VISIBLE */}
      <div className="flex-1 flex flex-col justify-center sm:text-center text-left min-h-0 overflow-hidden sm:mb-2 md:mb-3">
        {/* App Name - PROMINENT AND READABLE WITH ELLIPSIS */}
        <h3 className="app-name-truncate font-medium text-gray-900 dark:text-white leading-tight mb-1 sm:mb-2 text-sm sm:text-sm md:text-base overflow-hidden">
          {/* Mobile: Single line truncate */}
          <span className="block sm:hidden truncate" title={app.name}>
            {app.name}
          </span>
          {/* Desktop: Multi-line with ellipsis - Enhanced for long names */}
          <span className="hidden sm:block app-name-ellipsis app-name-ellipsis-force" title={app.name}>
            {app.name}
          </span>
        </h3>
        
        {/* Publisher */}
        <p className="text-gray-500 dark:text-gray-400 truncate text-xs sm:text-xs md:text-sm" title={app.publisher}>
          {app.publisher}
        </p>
      </div>

      {/* Action Button */}
      <div className="flex-shrink-0 sm:w-full w-20">
        {getStatusButton()}
      </div>
    </div>
  );
}
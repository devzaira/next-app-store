import React from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { App } from '@/types';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

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
      className={`app-card app-card-height relative group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-200 cursor-pointer flex flex-col overflow-hidden ${
        isSelected 
          ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/20 border-blue-300 dark:border-blue-500' 
          : 'hover:shadow-md hover:shadow-gray-500/10 hover:border-gray-300 dark:hover:border-gray-600'
      }`}
      onClick={() => onClick(app)}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center z-10">
          <CheckCircle className="w-3 h-3 text-white" />
        </div>
      )}

      {/* Card content */}
      <div className="p-3 sm:p-4 flex flex-col h-full">
        {/* Header section with icon and type badge */}
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <div className="flex-shrink-0">
            <ImageWithFallback
              src={app.icon}
              alt={`${app.name} icon`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover shadow-sm"
            />
          </div>
          <Badge 
            variant={app.type === 'paid' ? 'secondary' : 'outline'}
            className={`text-xs font-medium px-2 py-0.5 ${
              app.type === 'paid' 
                ? 'bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 border-cyan-200 dark:from-cyan-900/30 dark:to-cyan-800/30 dark:text-cyan-300 dark:border-cyan-700' 
                : 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700'
            }`}
          >
            {app.type === 'paid' ? 'PAID' : 'FREE'}
          </Badge>
        </div>

        {/* App name */}
        <div className="mb-1 sm:mb-2 flex-shrink-0">
          <h3 className="app-name-truncate font-medium text-gray-900 dark:text-white leading-tight text-sm sm:text-sm md:text-base overflow-hidden">
            <span className="block sm:hidden truncate" title={app.name}>
              {app.name}
            </span>
            <span className="hidden sm:block line-clamp-2 line-clamp-2-force line-clamp-strict" title={app.name}>
              {app.name}
            </span>
          </h3>
        </div>

        {/* App details */}
        <div className="mb-2 sm:mb-3 flex-shrink-0">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
            {app.publisher}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            v{app.version} • {app.size}
          </p>
        </div>

        {/* Description */}
        <div className="flex-1 mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {app.description}
          </p>
        </div>

        {/* Action button */}
        <div className="flex-shrink-0 mt-auto">
          {getStatusButton()}
        </div>
      </div>
    </div>
  );
}
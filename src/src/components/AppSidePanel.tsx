import React from 'react';
import { X, Info, Loader2, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { App } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AppSidePanelProps {
  app: App | null;
  isOpen: boolean;
  onClose: () => void;
  onInstall: (app: App) => void;
  onRequest: (app: App) => void;
  onNavigateToRequests?: (appId: string) => void;
}

export function AppSidePanel({ app, isOpen, onClose, onInstall, onRequest, onNavigateToRequests }: AppSidePanelProps) {
  if (!app || !isOpen) return null;

  const getActionButton = () => {
    switch (app.status) {
      case 'installing':
        return (
          <Button disabled className="w-full bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Installing...
          </Button>
        );
      case 'installed':
        return (
          <div className="w-full flex items-center justify-center py-3 text-green-700 bg-green-100 rounded-md">
            <CheckCircle className="w-4 h-4 mr-2" />
            Installed
          </div>
        );
      case 'processing':
        return (
          <div className="w-full flex items-center justify-center py-3 text-orange-700 bg-orange-100 rounded-md">
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing Request...
          </div>
        );
      case 'requested':
        return (
          <Button 
            onClick={() => {
              onNavigateToRequests?.(app.id);
              onClose();
            }}
            className="w-full bg-gradient-to-r from-blue-100 to-blue-50 hover:from-blue-200 hover:to-blue-100 text-blue-700 border border-blue-200 shadow-sm transition-all duration-200"
          >
            View Request Status
          </Button>
        );
      default:
        return app.type === 'paid' ? (
          <Button 
            onClick={() => onRequest(app)}
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 text-white shadow-lg transition-all duration-200"
          >
            Request
          </Button>
        ) : (
          <Button 
            onClick={() => onInstall(app)}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg transition-all duration-200"
          >
            Install
          </Button>
        );
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className="lg:hidden fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="side-panel-medium fixed top-[70px] md:top-[77px] lg:top-[77px] bottom-0 right-0 w-full sm:w-[320px] md:w-[380px] lg:w-[461px] bg-white dark:bg-gray-900 border-l-2 border-blue-200 dark:border-gray-700 shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10"
          >
            <X className="w-5 h-5" />
          </Button>
          
          {/* App Image */}
          <div className="w-full h-32 sm:h-48 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border-2 border-white/20">
              <ImageWithFallback
                src={app.icon}
                alt={app.name}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* App Info */}
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-1 app-name-ellipsis" style={{
              WebkitLineClamp: 3,
              maxHeight: 'calc(1.2em * 3)'
            }} title={app.name}>
              {app.name}
            </h2>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
              by {app.publisher}
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3">
              {app.description.split('.')[0]}
            </p>
            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-2 sm:gap-4">
              <span>Version {app.version}</span>
              <span>•</span>
              <span>{app.size}</span>
              <span>•</span>
              <span>{app.category}</span>
            </div>
            <div className="mt-3">
              <Badge variant={app.type === 'paid' ? 'destructive' : 'secondary'}>
                {app.type === 'paid' ? 'Paid' : 'Free'}
              </Badge>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4 sm:mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {app.description}
            </p>
          </div>

          {/* Action Button */}
          <div className="mb-4">
            {getActionButton()}
          </div>

          {/* Additional Info */}
          {app.hasMultipleVersions && app.versions && (
            <div className="mb-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Info className="w-4 h-4 mr-1" />
                Multiple versions available
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                {app.versions.slice(0, 3).map((versionInfo, index) => (
                  <div key={versionInfo.version} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{versionInfo.version}</span>
                      {versionInfo.isRecommended && (
                        <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      )}
                      {versionInfo.isLTS && (
                        <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full">
                          LTS
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-400">{versionInfo.size}</span>
                  </div>
                ))}
                {app.versions.length > 3 && (
                  <div className="text-xs text-gray-400 italic">
                    +{app.versions.length - 3} more versions available
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Requirements */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">System Requirements</h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <div>• Windows 10 or later</div>
              <div>• 4GB RAM minimum</div>
              <div>• 500MB available storage</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
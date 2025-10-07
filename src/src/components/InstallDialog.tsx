import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { App } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InstallDialogProps {
  app: App | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (app: App, version?: string) => void;
  onShowDetails: () => void;
}

export function InstallDialog({ app, isOpen, onClose, onConfirm, onShowDetails }: InstallDialogProps) {
  const [selectedVersion, setSelectedVersion] = useState<string>('');

  // Reset selected version when app changes
  useEffect(() => {
    setSelectedVersion('');
  }, [app?.id]);

  if (!app) return null;

  const handleConfirm = () => {
    onConfirm(app, selectedVersion || app.version);
    onClose();
  };

  const handleShowDetails = () => {
    onShowDetails();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Install Application</DialogTitle>
          <DialogDescription className="text-center">
            Confirm installation of this application to your system
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-4">
          {/* App Icon */}
          <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-600">
            <ImageWithFallback
              src={app.icon}
              alt={app.shortName}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* App Name */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {app.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {app.category} • {app.size}
            </p>
          </div>

          {/* Version Selection */}
          {app.hasMultipleVersions && app.versions && (
            <div className="w-full space-y-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Select Version
              </label>
              
              <Select value={selectedVersion} onValueChange={setSelectedVersion}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={`Latest (${app.version})`} />
                </SelectTrigger>
                <SelectContent align="start" className="w-full">
                  {app.versions.map((versionInfo) => (
                    <SelectItem key={versionInfo.version} value={versionInfo.version} className="cursor-pointer">
                      <div className="flex items-center justify-between w-full min-w-0">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-medium text-sm">{versionInfo.version}</span>
                          {versionInfo.isRecommended && (
                            <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full whitespace-nowrap">
                              Recommended
                            </span>
                          )}
                          {versionInfo.isLTS && (
                            <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full whitespace-nowrap">
                              LTS
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{versionInfo.size}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Selected Version Details */}
              {selectedVersion && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  {(() => {
                    const selected = app.versions?.find(v => v.version === selectedVersion);
                    return selected ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-blue-900 dark:text-blue-100">
                              Version {selected.version}
                            </span>
                            {selected.isRecommended && (
                              <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                                Recommended
                              </span>
                            )}
                            {selected.isLTS && (
                              <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-full">
                                LTS
                              </span>
                            )}
                          </div>
                          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{selected.size}</span>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm text-gray-700 dark:text-gray-300">{selected.description}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <span>Released: {new Date(selected.releaseDate).toLocaleDateString()}</span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded p-2">
                            <strong>Requirements:</strong> {selected.requirements}
                          </p>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}
              
              {/* Default Version Info */}
              {!selectedVersion && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Default: Latest version ({app.version}) will be installed
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex w-full space-x-3">
            <Button
              variant="outline"
              onClick={handleShowDetails}
              className="flex-1 flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Details
            </Button>
            <Button
              onClick={handleConfirm}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg transition-all duration-200"
            >
              Install
            </Button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            The application will be installed and available in your desktop menu.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
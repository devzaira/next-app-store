'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'sonner@2.0.3';
import { Header } from '@/components/Header';
import { AppsPage } from '@/components/AppsPage';
import { RequestsTable } from '@/components/RequestsTable';
import { InstallDialog } from '@/components/InstallDialog';
import { RequestDialog } from '@/components/RequestDialog';
import { InstallNotification } from '@/components/InstallNotification';
import { appsApi, requestsApi, analyticsApi } from '@/services/api';
import { App, AppRequest, ViewMode, TabType, RequestTabType } from '@/types';

export default function HomePage() {
  // Global state
  const [apps, setApps] = useState<App[]>([]);
  const [requests, setRequests] = useState<AppRequest[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<ViewMode>('apps');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Apps page state
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  // Requests page state
  const [requestSearchQuery, setRequestSearchQuery] = useState('');
  const [activeRequestTab, setActiveRequestTab] = useState<RequestTabType>('all');
  const [expandedRequestId, setExpandedRequestId] = useState<string | undefined>(undefined);

  // Pagination state (only for requests)
  const [requestsCurrentPage, setRequestsCurrentPage] = useState(1);
  const [requestsPerPage, setRequestsPerPage] = useState(10);

  // Dialog state
  const [installDialog, setInstallDialog] = useState<{ isOpen: boolean; app: App | null }>({
    isOpen: false,
    app: null
  });
  const [requestDialog, setRequestDialog] = useState<{ isOpen: boolean; app: App | null }>({
    isOpen: false,
    app: null
  });

  // Notification state
  const [notification, setNotification] = useState<{
    isVisible: boolean;
    appName: string;
    type: 'success' | 'error';
    message?: string;
    subMessage?: string;
  }>({
    isVisible: false,
    appName: '',
    type: 'success'
  });

  // Load initial data from API
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        
        // Load data with individual error handling
        const appsData = await appsApi.getApps().catch(error => {
          console.error('[App] Failed to load apps:', error);
          return []; // Safe fallback
        });
        
        const requestsData = await requestsApi.getRequests().catch(error => {
          console.error('[App] Failed to load requests:', error);
          return { requests: [], total: 0 }; // Safe fallback
        });
        
        const categoriesData = await appsApi.getCategories().catch(error => {
          console.error('[App] Failed to load categories:', error);
          return []; // Safe fallback
        });
        
        // Ensure all data is valid before setting state
        setApps(Array.isArray(appsData) ? appsData : []);
        setRequests(Array.isArray(requestsData.requests) ? requestsData.requests : []);
        setCategories(Array.isArray(categoriesData) ? categoriesData : []);
        
        console.log('[App] Initial data loaded successfully');
      } catch (error) {
        console.error('[App] Critical error during data loading:', error);
        
        // Set safe defaults even on critical errors
        setApps([]);
        setRequests([]);
        setCategories([]);
        
        toast.error('Failed to load application data', {
          description: 'Please refresh the page to try again'
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Auto-update selectedApp when apps state changes (for sidebar refresh)
  useEffect(() => {
    if (selectedApp) {
      const updatedApp = apps.find(app => app.id === selectedApp.id);
      if (updatedApp && JSON.stringify(updatedApp) !== JSON.stringify(selectedApp)) {
        setSelectedApp(updatedApp);
      }
    }
  }, [apps, selectedApp]);

  // App installation flow
  const handleInstallApp = (app: App, version?: string) => {
    if (app.status === 'available') {
      setInstallDialog({ isOpen: true, app });
    }
  };

  const confirmInstall = async (app: App, version?: string) => {
    const installVersion = version || app.version;
    
    try {
      // Update app status to installing
      setApps(prev => prev.map(a => 
        a.id === app.id ? { ...a, status: 'installing' } : a
      ));

      const versionText = version && version !== app.version ? ` (v${version})` : '';
      toast.info(`Installing ${app.name}${versionText}...`, {
        description: 'Please wait while the application is being installed'
      });

      // Call API to install app
      const result = await appsApi.installApp(app.id, installVersion);
      
      if (result.success) {
        // Simulate installation delay (real API would handle this)
        setTimeout(() => {
          setApps(prev => prev.map(a => 
            a.id === app.id ? { 
              ...a, 
              status: 'installed',
              installedVersion: installVersion
            } : a
          ));
          
          // Track installation for analytics
          analyticsApi.trackInstallation(app.id, installVersion);
          
          // Show custom notification
          setNotification({
            isVisible: true,
            appName: `${app.name} v${installVersion}`,
            type: 'success'
          });
        }, 3000);
      } else {
        throw new Error(result.message || 'Installation failed');
      }
    } catch (error) {
      console.error('[App] Installation failed:', error);
      
      // Reset app status on failure
      setApps(prev => prev.map(a => 
        a.id === app.id ? { ...a, status: 'available' } : a
      ));
      
      setNotification({
        isVisible: true,
        appName: app.name,
        type: 'error',
        message: 'Installation Failed',
        subMessage: error instanceof Error ? error.message : 'Please try again later'
      });

      toast.error(`Failed to install ${app.name}`, {
        description: 'Please try again or contact IT support'
      });
    }
  };

  // App request flow
  const handleRequestApp = async (app: App, reason?: string, version?: string) => {
    if (reason) {
      const requestVersion = version || app.version;
      const appNameWithVersion = version && version !== app.version ? `${app.name} v${version}` : app.name;
      
      try {
        // Update app status to processing first
        setApps(prev => prev.map(a => 
          a.id === app.id ? { ...a, status: 'processing' } : a
        ));

        const versionText = version && version !== app.version ? ` (v${version})` : '';
        toast.info(`Processing request for ${app.name}${versionText}...`, {
          description: 'Please wait while your request is being submitted'
        });

        // Submit request via API
        const newRequest = await requestsApi.submitRequest({
          appId: app.id,
          appName: appNameWithVersion,
          reason,
          version: requestVersion
        });

        // Simulate processing delay
        setTimeout(() => {
          setRequests(prev => [newRequest, ...prev]);
          
          // Update app status to requested
          setApps(prev => prev.map(a => 
            a.id === app.id ? { ...a, status: 'requested' } : a
          ));

          // Track request for analytics
          analyticsApi.trackRequest(app.id, reason);

          // Show custom notification for request
          setNotification({
            isVisible: true,
            appName: `${app.name}${version && version !== app.version ? ` v${version}` : ''}`,
            type: 'success',
            message: 'Request Submitted Successfully',
            subMessage: 'Your request will be reviewed by the IT team'
          });

          toast.success(`Request submitted successfully for ${app.name}${versionText}`, {
            description: 'Your request will be reviewed by the IT team'
          });
        }, 1500);

      } catch (error) {
        console.error('[App] Request submission failed:', error);
        
        // Reset app status on failure
        setApps(prev => prev.map(a => 
          a.id === app.id ? { ...a, status: 'available' } : a
        ));

        setNotification({
          isVisible: true,
          appName: app.name,
          type: 'error',
          message: 'Request Failed',
          subMessage: 'Please try again or contact IT support'
        });

        toast.error(`Failed to submit request for ${app.name}`, {
          description: 'Please try again or contact IT support'
        });
      }
    } else {
      setRequestDialog({ isOpen: true, app });
    }
  };

  // Show side panel from install dialog
  const showAppDetails = () => {
    if (installDialog.app) {
      setSelectedApp(installDialog.app);
      setCurrentView('apps');
    }
  };

  // Navigate to requests page and filter by app
  const navigateToRequests = (appId: string) => {
    // Find the request for this app
    const appRequest = requests.find(req => req.appId === appId);
    if (appRequest) {
      // Set search to the request number to highlight it
      setRequestSearchQuery(appRequest.requestNumber);
      // Set the request to be auto-expanded
      setExpandedRequestId(appRequest.id);
    }
    // Switch to requests view
    setCurrentView('requests');
    // Close any open panels
    setSelectedApp(null);
  };

  // Search functionality
  const effectiveSearchQuery = currentView === 'apps' ? searchQuery : requestSearchQuery;
  const setEffectiveSearchQuery = currentView === 'apps' ? setSearchQuery : setRequestSearchQuery;

  // Reset requests pagination when filters change
  useEffect(() => {
    setRequestsCurrentPage(1);
  }, [requestSearchQuery, activeRequestTab]);

  // Clear expanded request ID when user manually searches or changes tabs
  useEffect(() => {
    // Only clear if the search query was changed manually (not by navigation)
    if (expandedRequestId) {
      const timer = setTimeout(() => {
        setExpandedRequestId(undefined);
      }, 1000); // Clear after 1 second to allow the expansion to take effect
      return () => clearTimeout(timer);
    }
  }, [requestSearchQuery, activeRequestTab]);

  // Close notification
  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  // Show loading state while initial data is being fetched
  if (isLoading) {
    return (
      <div className="h-screen flex flex-col relative overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 dark:from-blue-400/10 dark:via-transparent dark:to-cyan-300/10" />
        </div>
        
        {/* Loading Content */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin mx-auto"></div>
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-gray-900 dark:text-white">Loading Albertsons App Store</h2>
              <p className="text-gray-600 dark:text-gray-400">Fetching applications and data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      {/* Simplified Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Simple Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        
        {/* Simple Blue Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 dark:from-blue-400/10 dark:via-transparent dark:to-cyan-300/10" />
      </div>
      {/* Fixed Header */}
      <div className="flex-shrink-0 relative z-10">
        <Header
          currentView={currentView}
          onViewChange={setCurrentView}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          searchQuery={effectiveSearchQuery}
          onSearchChange={setEffectiveSearchQuery}
        />
      </div>

      {/* Scrollable Main Content */}
      <div className="flex-1 min-h-0 overflow-hidden relative z-10">
        {currentView === 'apps' ? (
          <AppsPage
            apps={apps}
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            selectedApp={selectedApp}
            onAppSelect={setSelectedApp}
            onInstall={handleInstallApp}
            onRequest={handleRequestApp}
            onNavigateToRequests={navigateToRequests}
            searchQuery={searchQuery}
          />
        ) : (
          <div className="p-3 md:p-4 h-full overflow-auto">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl border border-white/20 dark:border-gray-700/30 shadow-xl shadow-blue-500/5 dark:shadow-blue-400/10 p-4 md:p-6 min-h-full">
              <RequestsTable
                requests={requests || []}
                searchQuery={requestSearchQuery}
                onSearchChange={setRequestSearchQuery}
                activeTab={activeRequestTab}
                onTabChange={setActiveRequestTab}
                currentPage={requestsCurrentPage}
                onPageChange={setRequestsCurrentPage}
                itemsPerPage={requestsPerPage}
                onItemsPerPageChange={setRequestsPerPage}
                expandedRequestId={expandedRequestId}
              />
            </div>
          </div>
        )}
      </div>

      {/* Dialogs */}
      <InstallDialog
        app={installDialog.app}
        isOpen={installDialog.isOpen}
        onClose={() => setInstallDialog({ isOpen: false, app: null })}
        onConfirm={confirmInstall}
        onShowDetails={showAppDetails}
      />

      <RequestDialog
        app={requestDialog.app}
        isOpen={requestDialog.isOpen}
        onClose={() => setRequestDialog({ isOpen: false, app: null })}
        onSubmit={handleRequestApp}
      />

      {/* Custom Installation Notification */}
      <InstallNotification
        appName={notification.appName}
        isVisible={notification.isVisible}
        onClose={closeNotification}
        type={notification.type}
        message={notification.message}
        subMessage={notification.subMessage}
      />
    </div>
  );
}
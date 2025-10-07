import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, CheckCircle, Clock, XCircle, Loader2, ArrowUpDown, ArrowUp, ArrowDown, Calendar, User, Hash, Info } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AppRequest, RequestTabType, App } from '../types';
import { mockApps } from '../data/mockData';

// Mock machine names for different request types
const mockMachineNames = [
  'LAPTOP-U5CJG45',
  'DESKTOP-ALB2847',
  'PC-KTH9X2M',
  'LAPTOP-RT8M3P1',
  'ALB-WS-0192',
  'DESKTOP-M7PQ4K3',
  'LAPTOP-QN6Y8R5',
  'PC-ALB-3456',
  'WORKSTATION-7X9',
  'LAPTOP-B4KF7J2',
  'DESKTOP-S9WL1P8',
  'ALB-LAPTOP-904',
  'PC-XR5N2M7',
  'DESKTOP-T6QY3K1',
  'LAPTOP-H8FB9D4'
];

// Generate consistent machine name based on request ID
function getMachineNameForRequest(requestId: string): string {
  // Use a simple hash of the request ID to consistently assign machine names
  let hash = 0;
  for (let i = 0; i < requestId.length; i++) {
    const char = requestId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  const index = Math.abs(hash) % mockMachineNames.length;
  return mockMachineNames[index];
}

interface RequestsTableProps {
  requests: AppRequest[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeTab: RequestTabType;
  onTabChange: (tab: RequestTabType) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  expandedRequestId?: string; // ID of request to auto-expand
}

type SortField = 'requestedAt' | 'estimatedDeliveryDate' | 'completedAt';
type SortDirection = 'asc' | 'desc';

export function RequestsTable({ 
  requests, 
  searchQuery, 
  onSearchChange,
  activeTab,
  onTabChange,
  currentPage,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  expandedRequestId
}: RequestsTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [sortField, setSortField] = useState<SortField>('requestedAt');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [itemsPerPageLocal, setItemsPerPageLocal] = useState(itemsPerPage);

  // Auto-expand request when navigating from sidebar
  useEffect(() => {
    if (expandedRequestId) {
      setExpandedRows(prev => new Set([...prev, expandedRequestId]));
    }
  }, [expandedRequestId]);

  const toggleRowExpansion = (requestId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(requestId)) {
      newExpanded.delete(requestId);
    } else {
      newExpanded.add(requestId);
    }
    setExpandedRows(newExpanded);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4 ml-1" />;
    }
    return sortDirection === 'asc' ? 
      <ArrowUp className="w-4 h-4 ml-1" /> : 
      <ArrowDown className="w-4 h-4 ml-1" />;
  };

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.appName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (request.requestNumber || `REQ-${request.id.toUpperCase()}`).toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'requested') return matchesSearch && request.status === 'requested';
    return matchesSearch && request.status === activeTab;
  });

  // Sort requests - prioritize 'requested' status, then by selected field
  const sortedRequests = [...filteredRequests].sort((a, b) => {
    // First priority: requested status items on top
    if (a.status === 'requested' && b.status !== 'requested') return -1;
    if (b.status === 'requested' && a.status !== 'requested') return 1;
    
    // Second priority: sort by selected field
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (!aValue && !bValue) return 0;
    if (!aValue) return 1;
    if (!bValue) return -1;
    
    const comparison = new Date(aValue).getTime() - new Date(bValue).getTime();
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedRequests.length / itemsPerPageLocal);
  const startIndex = (currentPage - 1) * itemsPerPageLocal;
  const endIndex = startIndex + itemsPerPageLocal;
  const paginatedRequests = sortedRequests.slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const getVisiblePages = () => {
    const pages = [];
    const maxVisiblePages = window.innerWidth < 768 ? 3 : 5; // Show fewer pages on mobile
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const getAppDetails = (appId: string): App | undefined => {
    return mockApps.find(app => app.id === appId);
  };

  const getStatusBadge = (status: AppRequest['status']) => {
    switch (status) {
      case 'requested':
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-300">
            <Clock className="w-3 h-3 mr-1" />
            Requested
          </Badge>
        );

      case 'delivered':
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300">
            <CheckCircle className="w-3 h-3 mr-1" />
            Delivered
          </Badge>
        );
      case 'cancelled':
        return (
          <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300">
            <XCircle className="w-3 h-3 mr-1" />
            Cancelled
          </Badge>
        );
      case 'rejected':
        return (
          <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300">
            <XCircle className="w-3 h-3 mr-1" />
            Rejected
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatShortDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const formatShortDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getRequestCounts = () => {
    return {
      all: requests.length,
      requested: requests.filter(r => r.status === 'requested').length,
      delivered: requests.filter(r => r.status === 'delivered').length
    };
  };

  const counts = getRequestCounts();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="p-3 md:p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            Application Requests
          </h2>
          
          {/* Search */}
          <div className="relative w-full sm:w-80 lg:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Input
                    placeholder="Search by app name or request number..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-9"
                  />
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs">
                  <p>Search requests by application name, request number, or business reason</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Tabs - Mobile optimized */}
        <div className="flex space-x-1 bg-blue-100 dark:bg-gray-800 rounded-lg p-1">
          <Button
            variant={activeTab === 'all' ? 'default' : 'ghost'}
            onClick={() => onTabChange('all')}
            className={`flex-1 relative text-xs md:text-sm transition-all duration-200 ${
              activeTab === 'all' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' 
                : 'text-blue-700 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600 hover:shadow-md hover:scale-105'
            }`}
            size="sm"
          >
            <span className="hidden sm:inline">All</span>
            <span className="sm:hidden">All</span>
            <Badge variant="secondary" className={`ml-1 md:ml-2 h-4 md:h-5 px-1 md:px-2 text-xs ${
              activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-blue-200 text-blue-800 dark:bg-gray-300 dark:text-gray-800'
            }`}>
              {counts.all}
            </Badge>
          </Button>
          <Button
            variant={activeTab === 'requested' ? 'default' : 'ghost'}
            onClick={() => onTabChange('requested')}
            className={`flex-1 relative text-xs md:text-sm transition-all duration-200 ${
              activeTab === 'requested' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' 
                : 'text-blue-700 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600 hover:shadow-md hover:scale-105'
            }`}
            size="sm"
          >
            <span className="hidden sm:inline">Requested</span>
            <span className="sm:hidden">Requested</span>
            <Badge variant="secondary" className={`ml-1 md:ml-2 h-4 md:h-5 px-1 md:px-2 text-xs ${
              activeTab === 'requested' ? 'bg-white/20 text-white' : 'bg-blue-200 text-blue-800 dark:bg-gray-300 dark:text-gray-800'
            }`}>
              {counts.requested}
            </Badge>
          </Button>
          <Button
            variant={activeTab === 'delivered' ? 'default' : 'ghost'}
            onClick={() => onTabChange('delivered')}
            className={`flex-1 relative text-xs md:text-sm transition-all duration-200 ${
              activeTab === 'delivered' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' 
                : 'text-blue-700 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600 hover:shadow-md hover:scale-105'
            }`}
            size="sm"
          >
            <span className="hidden sm:inline">Delivered</span>
            <span className="sm:hidden">Done</span>
            <Badge variant="secondary" className={`ml-1 md:ml-2 h-4 md:h-5 px-1 md:px-2 text-xs ${
              activeTab === 'delivered' ? 'bg-white/20 text-white' : 'bg-blue-200 text-blue-800 dark:bg-gray-300 dark:text-gray-800'
            }`}>
              {counts.delivered}
            </Badge>
          </Button>
        </div>
      </div>

      {/* Table - Responsive Layout */}
      <div className="flex-1 overflow-auto min-h-0">
        <div className="w-full min-h-full">
          {/* Desktop Header - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-12 items-center py-4 px-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
            <div className="col-span-4 font-bold text-gray-900 dark:text-white flex justify-center items-center pl-[34px] pr-4">Application</div>
            <div className="col-span-2 font-bold text-gray-900 dark:text-white text-center">Status</div>
            <div className="col-span-2 font-bold text-gray-900 dark:text-white text-center">
              <button 
                onClick={() => handleSort('requestedAt')}
                className="flex items-center justify-center w-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Requested Date
                {getSortIcon('requestedAt')}
              </button>
            </div>
            <div className="col-span-3 font-bold text-gray-900 dark:text-white text-center">
              <button 
                onClick={() => handleSort(activeTab === 'delivered' ? 'completedAt' : 'estimatedDeliveryDate')}
                className="flex items-center justify-center w-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {activeTab === 'delivered' ? 'Completed Date' : 'Est Delivery Date'}
                {getSortIcon(activeTab === 'delivered' ? 'completedAt' : 'estimatedDeliveryDate')}
              </button>
            </div>
            <div className="col-span-1 font-bold text-gray-900 dark:text-white flex items-center justify-center">Info</div>
          </div>
          
          {/* Content */}
          <div className="w-full">
            {sortedRequests.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8 px-4">
                {searchQuery ? 'No requests match your search' : 'No requests found'}
              </div>
            ) : (
              paginatedRequests.map((request) => {
                const appDetails = getAppDetails(request.appId);
                const isExpanded = expandedRows.has(request.id);
                
                return (
                  <Collapsible key={request.id} open={isExpanded} onOpenChange={() => toggleRowExpansion(request.id)}>
                    <div className="border-b border-gray-200 dark:border-gray-700">
                      {/* Desktop Row */}
                      <CollapsibleTrigger asChild>
                        <div className="hidden md:grid grid-cols-12 items-center py-4 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:shadow-lg cursor-pointer transition-all duration-300 hover:scale-[1.01] rounded-lg mx-2">
                          {/* Application Column - 4/12 */}
                          <div className="col-span-4 flex items-center space-x-3 pl-[34px] pr-4">
                            <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-xl shadow-md flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-600">
                              <ImageWithFallback
                                src={appDetails?.icon || ''}
                                alt={request.appName}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">
                                {request.appName}
                              </div>
                            </div>
                          </div>
                          
                          {/* Status Column - 2/12 */}
                          <div className="col-span-2 flex justify-center">
                            {getStatusBadge(request.status)}
                          </div>
                          
                          {/* Requested Date Column - 2/12 */}
                          <div className="col-span-2 text-gray-600 dark:text-gray-400 text-sm text-center">
                            {formatShortDateTime(request.requestedAt)}
                          </div>
                          
                          {/* Date Column - 3/12 */}
                          <div className="col-span-3 text-gray-600 dark:text-gray-400 text-sm text-center">
                            {activeTab === 'delivered' && request.completedAt 
                              ? formatShortDateTime(request.completedAt)
                              : activeTab === 'delivered' 
                              ? '-'
                              : request.estimatedDeliveryDate 
                              ? formatShortDateTime(request.estimatedDeliveryDate) 
                              : '-'
                            }
                          </div>
                          
                          {/* More Info Column - 1/12 */}
                          <div className="col-span-1 flex items-center justify-center">
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            )}
                          </div>
                        </div>
                      </CollapsibleTrigger>

                      {/* Mobile Row */}
                      <CollapsibleTrigger asChild>
                        <div className="md:hidden py-4 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:shadow-lg cursor-pointer transition-all duration-300 hover:scale-[1.01] rounded-lg mx-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 min-w-0 flex-1">
                              <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-xl shadow-md flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-600 flex-shrink-0">
                                <ImageWithFallback
                                  src={appDetails?.icon || ''}
                                  alt={request.appName}
                                  className="w-full h-full object-cover rounded-xl"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="font-medium text-gray-900 dark:text-white truncate text-sm">
                                  {request.appName}
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                  {getStatusBadge(request.status)}
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {request.requestNumber || `REQ-${request.id.toUpperCase()}`}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="h-8 w-8 p-0 flex-shrink-0 ml-2 flex items-center justify-center">
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                              )}
                            </div>
                          </div>
                        </div>
                      </CollapsibleTrigger>
                      
                      {/* Expanded Content */}
                      <CollapsibleContent>
                        <div className="px-4 pb-6 bg-gray-50 dark:bg-gray-800/50">
                          {/* Mobile Quick Info - Only visible on mobile */}
                          <div className="md:hidden mb-4 grid grid-cols-2 gap-3 text-sm">
                            <div className="bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                              <div className="flex items-center space-x-2 mb-1">
                                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                <span className="font-medium text-gray-900 dark:text-white">Requested</span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 text-xs">
                                {formatShortDateTime(request.requestedAt)}
                              </p>
                            </div>
                            <div className="bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                              <div className="flex items-center space-x-2 mb-1">
                                <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {activeTab === 'delivered' ? 'Completed' : 'Est. Delivery'}
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 text-xs">
                                {activeTab === 'delivered' && request.completedAt 
                                  ? formatShortDateTime(request.completedAt)
                                  : activeTab === 'delivered' 
                                  ? '-'
                                  : request.estimatedDeliveryDate 
                                  ? formatShortDateTime(request.estimatedDeliveryDate) 
                                  : '-'
                                }
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Column - App Details */}
                            <div className="lg:col-span-2 space-y-4">
                              {/* App Description Card */}
                              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-600">
                                {appDetails && (
                                  <>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                      {appDetails.description?.split('.')[0]}.
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                      Version {appDetails.version} | {appDetails.size} | {appDetails.category}
                                    </p>
                                    <p className="hidden">
                                      {request.reason}
                                    </p>
                                  </>
                                )}
                              </div>
                              
                              {/* System Requirements Card */}
                              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-600">
                                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">System Requirements</h5>
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 dark:text-gray-400">Operating System:</span>
                                    <span className="text-gray-900 dark:text-white">Windows 10/11</span>
                                  </div>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 dark:text-gray-400">Architecture:</span>
                                    <span className="text-gray-900 dark:text-white">x64</span>
                                  </div>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 dark:text-gray-400">Memory:</span>
                                    <span className="text-gray-900 dark:text-white">4 GB RAM</span>
                                  </div>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 dark:text-gray-400">Storage:</span>
                                    <span className="text-gray-900 dark:text-white">{appDetails?.size || '2.8 GB'}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-3">
                                <h5 className="font-semibold text-gray-900 dark:text-white">Business Reason</h5>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600">
                                  {request.reason}
                                </p>
                              </div>
                            </div>
                            
                            {/* Right Column - Request Info */}
                            <div className="space-y-4">
                              {/* Request Information */}
                              <div className="space-y-3 text-sm">
                                <div>
                                  <span className="font-semibold text-gray-900 dark:text-white">Request Number:</span>
                                  <p className="text-gray-600 dark:text-gray-400">{request.requestNumber || 'REQ-' + request.id.toUpperCase()}</p>
                                </div>
                                
                                <div>
                                  <span className="font-semibold text-gray-900 dark:text-white">Order By:</span>
                                  <p className="text-gray-600 dark:text-gray-400">{request.requestedBy || 'Unknown User'}</p>
                                </div>
                                
                                <div>
                                  <span className="font-semibold text-gray-900 dark:text-white">Updated:</span>
                                  <p className="text-gray-600 dark:text-gray-400">{formatDateTime(request.requestedAt)}</p>
                                </div>
                                
                                <div>
                                  <span className="font-semibold text-gray-900 dark:text-white">State:</span>
                                  <p className="text-gray-600 dark:text-gray-400 capitalize">{request.status}</p>
                                </div>
                                
                                {/* Completed Date for Delivered Status */}
                                {request.status === 'delivered' && request.completedAt && (
                                  <div>
                                    <span className="font-semibold text-gray-900 dark:text-white">Completed:</span>
                                    <p className="text-green-700 dark:text-green-400">{formatDateTime(request.completedAt)}</p>
                                  </div>
                                )}
                              </div>
                              
                              {/* Machine Name */}
                               <div className="space-y-3 text-sm">
                                 <div>
                                   <span className="font-semibold text-gray-900 dark:text-white">Machine Name:</span>
                                   <p className="text-gray-600 dark:text-gray-400">
                                     {request.status === 'delivered' ? getMachineNameForRequest(request.id) : 'Not yet assigned'}
                                   </p>
                                 </div>
                               </div>
                               
                               {/* Status Progress */}
                              <div className="space-y-2">
                                <h6 className="font-semibold text-gray-900 dark:text-white text-sm">Deployment Progress</h6>
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2 text-xs">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-400">ServiceNow - Request Approved</span>
                                  </div>
                                  
                                  {request.status === 'requested' && (
                                    <>
                                      <div className="flex items-center space-x-2 text-xs">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                        <span className="text-gray-600 dark:text-gray-400">Microsoft Intune - Preparing Deployment</span>
                                      </div>
                                      <div className="flex items-center space-x-2 text-xs">
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        <span className="text-gray-400">Deployment to Device - Pending</span>
                                      </div>
                                    </>
                                  )}
                                  
                                  {request.status === 'delivered' && (
                                    <>
                                      <div className="flex items-center space-x-2 text-xs">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-600 dark:text-gray-400">Microsoft Intune - Deployed Successfully</span>
                                      </div>
                                      <div className="flex items-center space-x-2 text-xs">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-600 dark:text-gray-400">Application Available on Device</span>
                                      </div>
                                    </>
                                  )}
                                  
                                  {request.status === 'cancelled' && (
                                    <>
                                      <div className="flex items-center space-x-2 text-xs">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-gray-600 dark:text-gray-400">ServiceNow - Request Cancelled</span>
                                      </div>
                                      <div className="flex items-center space-x-2 text-xs">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                        <span className="text-gray-400">Microsoft Intune - Deployment Cancelled</span>
                                      </div>
                                    </>
                                  )}
                                </div>
                                
                                {/* Deployment Information */}
                                <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    <div className="mb-1">
                                      <span className="font-medium">Deployment Method:</span> Microsoft Intune
                                    </div>
                                    <div className="mb-1">
                                      <span className="font-medium">Source:</span> ServiceNow Catalog
                                    </div>
                                    {request.status === 'delivered' && (
                                      <div>
                                        <span className="font-medium">Install Location:</span> Program Files
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                );
              })
            )}
          </div>
        </div>
      </div>
      
      {/* Pagination - Mobile optimized */}
      {sortedRequests.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-3 md:p-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Results info - Hide on small mobile */}
            <div className="text-sm text-gray-600 dark:text-gray-400 hidden xs:block">
              Showing {startIndex + 1} to {Math.min(endIndex, sortedRequests.length)} of {sortedRequests.length} requests
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex-1 flex justify-center">
                <Pagination>
                  <PaginationContent className="gap-1">
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                        className={`${
                          currentPage <= 1 
                            ? 'pointer-events-none opacity-50' 
                            : 'cursor-pointer'
                        } h-8 px-2 md:px-3`}
                        size="sm"
                      />
                    </PaginationItem>
                    
                    {getVisiblePages().map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => onPageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer h-8 w-8 md:w-auto md:px-3"
                          size="sm"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {getVisiblePages()[getVisiblePages().length - 1] < totalPages - 1 && (
                      <PaginationItem>
                        <PaginationEllipsis className="h-8 w-8" />
                      </PaginationItem>
                    )}
                    
                    {getVisiblePages()[getVisiblePages().length - 1] < totalPages && (
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => onPageChange(totalPages)}
                          className="cursor-pointer h-8 w-8 md:w-auto md:px-3"
                          size="sm"
                        >
                          {totalPages}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                        className={`${
                          currentPage >= totalPages 
                            ? 'pointer-events-none opacity-50' 
                            : 'cursor-pointer'
                        } h-8 px-2 md:px-3`}
                        size="sm"
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
            
            {/* Items per page selector - Hide on mobile, show on tablet+ */}
            <div className="hidden sm:flex items-center gap-2 pagination-select">
              <span className="text-sm text-gray-600 dark:text-gray-400">Items:</span>
              <Select 
                value={itemsPerPageLocal.toString()} 
                onValueChange={(value) => {
                  const newItemsPerPage = parseInt(value);
                  setItemsPerPageLocal(newItemsPerPage);
                  onPageChange(1); // Reset to first page when changing items per page
                  onItemsPerPageChange?.(newItemsPerPage);
                }}
              >
                <SelectTrigger className="w-auto min-w-[6rem] h-8 px-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent align="end" side="top" position="popper" sideOffset={4} alignOffset={0} className="min-w-fit">
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value={sortedRequests.length.toString()}>All ({sortedRequests.length})</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
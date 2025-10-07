// Albertsons Enterprise App Store - API Service Layer
// This file contains placeholders for real API integration

import { App, AppRequest } from '../types';
import { mockApps, mockRequests, categories } from '../data/mockData';
import { API_CONFIG, FEATURES } from '../config/env';

// API Response Types
interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface ApiError {
  status: 'error';
  message: string;
  code?: string;
  details?: any;
}

// HTTP Client with error handling
class ApiClient {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string = API_CONFIG.BASE_URL, timeout: number = API_CONFIG.TIMEOUT) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      // Check if we're in mock mode
      if (API_CONFIG.MOCK_MODE) {
        if (API_CONFIG.DEBUG) {
          console.log(`[MOCK API] ${options.method || 'GET'} ${this.baseURL}${endpoint}`);
        }
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 100));
        // Return mock data
        throw new Error('API_NOT_IMPLEMENTED');
      }

      // TODO: Replace with actual fetch when API is ready
      if (API_CONFIG.DEBUG) {
        console.log(`[API] ${options.method || 'GET'} ${this.baseURL}${endpoint}`);
      }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Return mock data for now
      throw new Error('API_NOT_IMPLEMENTED');
      
    } catch (error) {
      if (error instanceof Error && error.message === 'API_NOT_IMPLEMENTED') {
        // Return mock data during development
        return this.getMockResponse<T>(endpoint, options);
      }
      
      console.error('[API Error]', error);
      throw {
        status: 'error',
        message: 'Failed to fetch data from API',
        code: 'NETWORK_ERROR'
      } as ApiError;
    }
  }

  // Mock data responses (to be removed when real API is ready)
  private getMockResponse<T>(endpoint: string, options: RequestInit): ApiResponse<T> {
    if (API_CONFIG.DEBUG) {
      console.log(`[MOCK API] Serving mock data for ${endpoint}`);
    }
    
    if (endpoint.includes('/apps')) {
      return {
        data: mockApps as T,
        status: 'success',
        message: 'Mock data retrieved successfully'
      };
    }
    
    if (endpoint.includes('/requests')) {
      return {
        data: { 
          requests: mockRequests, 
          total: mockRequests.length 
        } as T,
        status: 'success',
        message: 'Mock data retrieved successfully'
      };
    }
    
    if (endpoint.includes('/categories')) {
      return {
        data: categories as T,
        status: 'success',
        message: 'Mock data retrieved successfully'
      };
    }
    
    throw {
      status: 'error',
      message: 'Mock endpoint not found',
      code: 'NOT_FOUND'
    } as ApiError;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// API Client Instance
const apiClient = new ApiClient(API_CONFIG.BASE_URL, API_CONFIG.TIMEOUT);

// Apps API Service
export const appsApi = {
  // Get all applications with optional filtering
  async getApps(params?: {
    category?: string[];
    search?: string;
    status?: string;
    page?: number;
    limit?: number;
  }): Promise<App[]> {
    try {
      const queryParams = new URLSearchParams();
      if (params?.category?.length) queryParams.set('category', params.category.join(','));
      if (params?.search) queryParams.set('search', params.search);
      if (params?.status) queryParams.set('status', params.status);
      if (params?.page) queryParams.set('page', params.page.toString());
      if (params?.limit) queryParams.set('limit', params.limit.toString());

      const endpoint = `/api/v1/apps${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiClient.get<App[]>(endpoint);
      
      return response.data;
    } catch (error) {
      if (API_CONFIG.DEBUG) {
        console.error('[Apps API] Failed to fetch apps:', error);
      }
      // Always return a safe fallback
      return Array.isArray(mockApps) ? mockApps : [];
    }
  },

  // Get single application by ID
  async getApp(id: string): Promise<App | null> {
    try {
      const response = await apiClient.get<App>(`/api/v1/apps/${id}`);
      return response.data;
    } catch (error) {
      console.error('[Apps API] Failed to fetch app:', error);
      // Fallback to mock data
      return mockApps.find(app => app.id === id) || null;
    }
  },

  // Install application
  async installApp(appId: string, version?: string): Promise<{ success: boolean; message: string }> {
    try {
      const response = await apiClient.post<{ success: boolean; message: string }>(
        `/api/v1/apps/${appId}/install`,
        { version }
      );
      return response.data;
    } catch (error) {
      console.error('[Apps API] Failed to install app:', error);
      // Mock successful installation
      return { success: true, message: 'Installation started successfully (mock)' };
    }
  },

  // Get application categories
  async getCategories(): Promise<string[]> {
    try {
      const response = await apiClient.get<string[]>('/api/v1/categories');
      return response.data;
    } catch (error) {
      if (API_CONFIG.DEBUG) {
        console.error('[Apps API] Failed to fetch categories:', error);
      }
      // Always return a safe fallback
      return Array.isArray(categories) ? categories : [];
    }
  }
};

// Requests API Service
export const requestsApi = {
  // Get all requests with optional filtering
  async getRequests(params?: {
    status?: string;
    search?: string;
    page?: number;
    limit?: number;
  }): Promise<{ requests: AppRequest[]; total: number }> {
    try {
      const queryParams = new URLSearchParams();
      if (params?.status) queryParams.set('status', params.status);
      if (params?.search) queryParams.set('search', params.search);
      if (params?.page) queryParams.set('page', params.page.toString());
      if (params?.limit) queryParams.set('limit', params.limit.toString());

      const endpoint = `/api/v1/requests${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiClient.get<{ requests: AppRequest[]; total: number }>(endpoint);
      
      return response.data;
    } catch (error) {
      if (API_CONFIG.DEBUG) {
        console.error('[Requests API] Failed to fetch requests:', error);
      }
      // Always return a safe fallback structure
      return { 
        requests: Array.isArray(mockRequests) ? mockRequests : [], 
        total: Array.isArray(mockRequests) ? mockRequests.length : 0 
      };
    }
  },

  // Submit new application request
  async submitRequest(data: {
    appId: string;
    appName: string;
    reason: string;
    version?: string;
  }): Promise<AppRequest> {
    try {
      const response = await apiClient.post<AppRequest>('/api/v1/requests', data);
      return response.data;
    } catch (error) {
      console.error('[Requests API] Failed to submit request:', error);
      
      // Mock request creation
      const mockRequest: AppRequest = {
        id: `req-${Date.now()}`,
        appId: data.appId,
        appName: data.appName,
        reason: data.reason,
        status: 'open',
        requestedAt: new Date().toISOString(),
        estimatedDeliveryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        requestNumber: `REQ-${Date.now().toString().slice(-6)}`,
        requestedBy: 'Current User' // TODO: Get from authentication context
      };
      
      return mockRequest;
    }
  },

  // Get single request by ID
  async getRequest(id: string): Promise<AppRequest | null> {
    try {
      const response = await apiClient.get<AppRequest>(`/api/v1/requests/${id}`);
      return response.data;
    } catch (error) {
      console.error('[Requests API] Failed to fetch request:', error);
      // Fallback to mock data
      return mockRequests.find(req => req.id === id) || null;
    }
  }
};

// User API Service (for future authentication)
export const userApi = {
  // Get current user profile
  async getCurrentUser(): Promise<{ id: string; name: string; email: string; role: string } | null> {
    try {
      const response = await apiClient.get<{ id: string; name: string; email: string; role: string }>('/api/v1/user/profile');
      return response.data;
    } catch (error) {
      console.error('[User API] Failed to fetch user profile:', error);
      // Mock user data
      return {
        id: 'user-123',
        name: 'Current User',
        email: 'user@albertsons.com',
        role: 'employee'
      };
    }
  }
};

// Analytics API Service (for future reporting)
export const analyticsApi = {
  // Track app installation
  async trackInstallation(appId: string, version?: string): Promise<void> {
    if (!FEATURES.ANALYTICS) {
      return; // Analytics disabled
    }
    
    try {
      await apiClient.post('/api/v1/analytics/install', { appId, version });
    } catch (error) {
      if (API_CONFIG.DEBUG) {
        console.error('[Analytics API] Failed to track installation:', error);
      }
      // Silently fail for analytics
    }
  },

  // Track app request
  async trackRequest(appId: string, reason: string): Promise<void> {
    if (!FEATURES.ANALYTICS) {
      return; // Analytics disabled
    }
    
    try {
      await apiClient.post('/api/v1/analytics/request', { appId, reason });
    } catch (error) {
      if (API_CONFIG.DEBUG) {
        console.error('[Analytics API] Failed to track request:', error);
      }
      // Silently fail for analytics
    }
  }
};

// Export API client for custom requests
export { apiClient };
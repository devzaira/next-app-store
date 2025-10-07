# Albertsons Enterprise App Store - API Implementation Guide

## Current State: Mock Data Implementation

The Albertsons Enterprise App Store currently uses **mock data** for all operations while the API service layer is ready for integration with real backend services.

### 🔄 **What's Currently Mock Data:**

- **Applications list** - Static data from `/data/mockData.ts`
- **Application categories** - Predefined categories array
- **User requests** - In-memory request storage
- **Installation status** - Simulated with timeouts
- **User authentication** - Mock user profile
- **Analytics tracking** - Console logging only

### 🚀 **API Service Architecture**

The app uses a complete API service layer located in `/services/api.ts` with the following structure:

```typescript
// Current API Services Available:
- appsApi.getApps()          // Get all applications
- appsApi.getApp(id)         // Get single application
- appsApi.installApp(id)     // Install application
- appsApi.getCategories()    // Get app categories

- requestsApi.getRequests()  // Get all requests
- requestsApi.submitRequest() // Submit new request
- requestsApi.getRequest(id) // Get single request

- userApi.getCurrentUser()   // Get user profile
- analyticsApi.trackInstallation() // Track installations
- analyticsApi.trackRequest() // Track requests
```

## API Implementation Steps

### Step 1: Environment Setup

1. **Copy environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Configure API endpoint:**
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com
   NEXT_PUBLIC_MOCK_API=false
   ```

### Step 2: Backend API Requirements

Your backend API should implement the following endpoints:

#### **Applications API**

```bash
# Get all applications with filtering
GET /api/v1/apps?category=productivity&search=office&status=available&page=1&limit=20

# Response format:
{
  "data": [
    {
      "id": "app-123",
      "name": "Microsoft Office 365",
      "description": "Complete office suite",
      "publisher": "Microsoft",
      "category": "Productivity",
      "version": "16.0.1",
      "icon": "https://cdn.example.com/icons/office.png",
      "screenshots": ["https://cdn.example.com/screenshots/office1.png"],
      "status": "available",
      "price": "Free",
      "rating": 4.5,
      "reviewCount": 1250,
      "size": "2.1 GB",
      "lastUpdated": "2024-01-15T10:30:00Z",
      "requirements": ["Windows 10+", "4GB RAM"],
      "features": ["Word processing", "Spreadsheets", "Presentations"],
      "changelog": "Bug fixes and performance improvements"
    }
  ],
  "status": "success",
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}

# Get single application
GET /api/v1/apps/{appId}

# Install application
POST /api/v1/apps/{appId}/install
Content-Type: application/json

{
  "version": "16.0.1"
}

# Response:
{
  "data": {
    "success": true,
    "message": "Installation started successfully",
    "installationId": "install-456"
  },
  "status": "success"
}

# Get categories
GET /api/v1/categories

# Response:
{
  "data": ["Productivity", "Security", "Communication", "Development"],
  "status": "success"
}
```

#### **Requests API**

```bash
# Get all requests
GET /api/v1/requests?status=open&search=office&page=1&limit=10

# Response:
{
  "data": {
    "requests": [
      {
        "id": "req-789",
        "appId": "app-123",
        "appName": "Microsoft Office 365",
        "reason": "Need for quarterly reports",
        "status": "open",
        "requestedAt": "2024-01-20T14:30:00Z",
        "estimatedDeliveryDate": "2024-01-25T14:30:00Z",
        "requestNumber": "REQ-789012",
        "requestedBy": "john.doe@albertsons.com"
      }
    ],
    "total": 25
  },
  "status": "success"
}

# Submit new request
POST /api/v1/requests
Content-Type: application/json

{
  "appId": "app-123",
  "appName": "Microsoft Office 365",
  "reason": "Need for quarterly reports",
  "version": "16.0.1"
}

# Get single request
GET /api/v1/requests/{requestId}
```

#### **User API**

```bash
# Get current user profile
GET /api/v1/user/profile

# Response:
{
  "data": {
    "id": "user-123",
    "name": "John Doe",
    "email": "john.doe@albertsons.com",
    "role": "employee",
    "department": "Finance",
    "permissions": ["install_free_apps", "request_paid_apps"]
  },
  "status": "success"
}
```

### Step 3: Update API Service

1. **Remove mock data fallbacks** in `/services/api.ts`:

```typescript
// Replace this section in ApiClient.request():
if (error instanceof Error && error.message === 'API_NOT_IMPLEMENTED') {
  return this.getMockResponse<T>(endpoint, options);
}

// With actual fetch implementation:
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), this.timeout);

const response = await fetch(`${this.baseURL}${endpoint}`, {
  ...options,
  signal: controller.signal,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getAuthToken()}`, // Add authentication
    ...options.headers,
  },
});

clearTimeout(timeoutId);

if (!response.ok) {
  throw new Error(`HTTP ${response.status}: ${response.statusText}`);
}

return await response.json();
```

2. **Add authentication headers** (when auth is implemented):

```typescript
// Add to API client headers
headers: {
  'Authorization': `Bearer ${await getAccessToken()}`,
  'Content-Type': 'application/json',
  'X-User-ID': await getUserId(),
  ...options.headers,
}
```

### Step 4: Error Handling

The API service includes comprehensive error handling:

- **Network errors** - Shows user-friendly messages
- **API errors** - Displays server error messages
- **Timeout errors** - Configurable timeout handling
- **Fallback to mock data** - During development/outages

### Step 5: Authentication Integration

When implementing authentication (SSO/LDAP):

1. **Install auth library:**
   ```bash
   npm install @okta/okta-auth-js @okta/okta-react
   # or your preferred auth solution
   ```

2. **Update API client with auth:**
   ```typescript
   // In services/api.ts
   import { getAccessToken } from '../auth/authService';
   
   // Add to request headers
   headers: {
     'Authorization': `Bearer ${await getAccessToken()}`,
   }
   ```

3. **Add auth context to App.tsx:**
   ```typescript
   import { AuthProvider } from './auth/AuthContext';
   
   // Wrap app with AuthProvider
   ```

### Step 6: Real-time Updates (WebSocket)

For real-time installation status and request updates:

```typescript
// services/websocket.ts
const ws = new WebSocket('wss://your-api-domain.com/ws');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  if (data.type === 'INSTALLATION_STATUS') {
    // Update app installation status
    updateAppStatus(data.appId, data.status);
  }
  
  if (data.type === 'REQUEST_UPDATE') {
    // Update request status
    updateRequestStatus(data.requestId, data.status);
  }
};
```

### Step 7: Analytics Integration

For production analytics:

```typescript
// services/analytics.ts
import { track } from '@analytics/package';

export const trackInstallation = (appId: string, appName: string) => {
  track('App Installed', {
    appId,
    appName,
    userId: getCurrentUserId(),
    timestamp: new Date().toISOString()
  });
};
```

## Testing API Integration

### Development Testing

1. **Enable mock API mode:**
   ```env
   NEXT_PUBLIC_MOCK_API=true
   ```

2. **Test with staging API:**
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://staging-api.albertsons.com
   NEXT_PUBLIC_MOCK_API=false
   ```

3. **Monitor API calls:**
   ```bash
   # Check browser network tab or API logs
   # All API calls are logged with [API] prefix
   ```

### Production Checklist

- [ ] **API endpoints** implemented and tested
- [ ] **Authentication** configured (SSO/LDAP)
- [ ] **Rate limiting** configured on backend
- [ ] **CORS** configured for frontend domain
- [ ] **SSL certificates** installed and valid
- [ ] **Error monitoring** (Sentry/similar) configured
- [ ] **API documentation** created for IT team
- [ ] **Backup/fallback** strategy implemented
- [ ] **Performance monitoring** enabled
- [ ] **Security headers** configured

### API Security Requirements

```bash
# Required security headers:
Access-Control-Allow-Origin: https://your-app-domain.com
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains

# Authentication requirements:
- JWT tokens with short expiration (15-30 minutes)
- Refresh token rotation
- Role-based access control (RBAC)
- IP whitelisting for admin endpoints
```

## Performance Optimization

### Caching Strategy

```typescript
// Implement caching for frequently accessed data
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const cachedApps = localStorage.getItem('apps_cache');
if (cachedApps && Date.now() - cachedApps.timestamp < CACHE_DURATION) {
  return JSON.parse(cachedApps.data);
}
```

### Pagination Implementation

```typescript
// Use pagination for large datasets
const getApps = async (page = 1, limit = 20) => {
  const response = await apiClient.get(`/api/v1/apps?page=${page}&limit=${limit}`);
  return response;
};
```

## Monitoring and Debugging

### API Logging

All API calls are logged with structured information:

```bash
[API] GET /api/v1/apps - 200 OK (245ms)
[API] POST /api/v1/requests - 201 Created (1.2s)
[MOCK API] Serving mock data for /api/v1/apps
```

### Error Tracking

```typescript
// Production error tracking
import * as Sentry from '@sentry/nextjs';

// Errors are automatically reported to monitoring service
catch (error) {
  Sentry.captureException(error);
  console.error('[API Error]', error);
}
```

---

## 🎯 **Next Steps**

1. **Set up your backend API** with the required endpoints
2. **Configure authentication** (SSO/LDAP integration)
3. **Update environment variables** with real API URLs
4. **Remove mock data fallbacks** from the API service
5. **Test thoroughly** in staging environment
6. **Deploy to production** with monitoring enabled

The application is fully prepared for API integration - simply implement the backend endpoints and update the configuration!
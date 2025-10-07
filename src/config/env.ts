// Environment configuration for client-side usage
// This handles the difference between server-side and client-side environment access

// Safe environment variable access for browser
function getEnvVar(key: string, defaultValue: string): string {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // Try to get from window.__ENV__ (if set by build process)
    const windowEnv = (window as any).__ENV__;
    if (windowEnv && windowEnv[key]) {
      return windowEnv[key];
    }
    
    // For development, try localStorage as fallback
    const stored = localStorage.getItem(`env_${key}`);
    if (stored) {
      return stored;
    }
  }
  
  // Server-side or fallback to default
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || defaultValue;
  }
  
  return defaultValue;
}

// API Configuration
export const API_CONFIG = {
  BASE_URL: getEnvVar('NEXT_PUBLIC_API_BASE_URL', 'https://api.albertsons-appstore.internal'),
  TIMEOUT: parseInt(getEnvVar('NEXT_PUBLIC_API_TIMEOUT', '10000'), 10),
  MOCK_MODE: getEnvVar('NEXT_PUBLIC_MOCK_API', 'true') === 'true',
  DEBUG: getEnvVar('NEXT_PUBLIC_DEBUG_MODE', 'false') === 'true'
};

// App Configuration
export const APP_CONFIG = {
  NAME: getEnvVar('NEXT_PUBLIC_APP_NAME', 'Albertsons Enterprise App Store'),
  VERSION: getEnvVar('NEXT_PUBLIC_APP_VERSION', '1.0.0'),
  COMPANY: getEnvVar('NEXT_PUBLIC_COMPANY_NAME', 'Albertsons Companies')
};

// Feature Flags
export const FEATURES = {
  ANALYTICS: getEnvVar('NEXT_PUBLIC_ENABLE_ANALYTICS', 'true') === 'true',
  NOTIFICATIONS: getEnvVar('NEXT_PUBLIC_ENABLE_NOTIFICATIONS', 'true') === 'true',
  REQUEST_TRACKING: getEnvVar('NEXT_PUBLIC_ENABLE_REQUEST_TRACKING', 'true') === 'true'
};

// Development helper to set environment variables in localStorage
export function setDevEnvVar(key: string, value: string): void {
  if (typeof window !== 'undefined' && API_CONFIG.DEBUG) {
    localStorage.setItem(`env_${key}`, value);
    console.log(`[ENV] Set ${key} = ${value}`);
  }
}

// Development helper to clear environment variables
export function clearDevEnvVars(): void {
  if (typeof window !== 'undefined' && API_CONFIG.DEBUG) {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('env_'));
    keys.forEach(key => localStorage.removeItem(key));
    console.log('[ENV] Cleared development environment variables');
  }
}
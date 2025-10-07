export interface AppVersion {
  version: string;
  size: string;
  releaseDate: string;
  description?: string;
  isRecommended?: boolean;
  isLTS?: boolean; // Long Term Support
  requirements?: string;
}

export interface App {
  id: string;
  name: string;
  shortName: string;
  publisher: string;
  description: string;
  category: string;
  version: string; // Current/default version
  size: string;
  type: 'free' | 'paid';
  status: 'available' | 'installed' | 'installing' | 'requested' | 'processing';
  icon: string;
  image?: string;
  hasMultipleVersions?: boolean;
  versions?: AppVersion[];
  installedVersion?: string; // Track which version is actually installed
}

export interface AppRequest {
  id: string;
  appId: string;
  appName: string;
  reason: string;
  status: 'open' | 'delivered' | 'rejected' | 'cancelled';
  requestedAt: string;
  completedAt?: string;
  estimatedDeliveryDate?: string;
  requestNumber?: string;
  requestedBy?: string;
}

export type ViewMode = 'apps' | 'requests';
export type TabType = 'all' | 'free' | 'paid';
export type RequestTabType = 'all' | 'open' | 'delivered';
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { Shield, Code, Users, Building, Copyright, ExternalLink } from 'lucide-react';

interface AboutDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutDialog({ isOpen, onClose }: AboutDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <DialogTitle className="text-xl">Albertsons Enterprise App Store</DialogTitle>
              <DialogDescription>
                Version 2.1.0 • Enterprise Edition
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {/* App Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <Building className="w-5 h-5 mr-2 text-blue-600" />
                About This Application
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Albertsons Enterprise App Store provides a centralized platform for employees to discover, 
                request, and install approved enterprise software applications. Built with modern web technologies 
                and designed for scalability, security, and ease of use.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  <Shield className="w-3 h-3 mr-1" />
                  Enterprise Secure
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <Code className="w-3 h-3 mr-1" />
                  React + TypeScript
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  <Users className="w-3 h-3 mr-1" />
                  Multi-tenant
                </Badge>
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Centralized application catalog with 60+ enterprise software titles</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Automated installation and license management</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Request workflow for paid applications with business justification</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Advanced filtering and search capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Dark mode and responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Real-time request tracking and status updates</span>
                </li>
              </ul>
            </div>

            <Separator />

            {/* System Requirements */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">System Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Supported Browsers</h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Chrome 90+</li>
                    <li>• Firefox 88+</li>
                    <li>• Safari 14+</li>
                    <li>• Edge 90+</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Network Requirements</h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Active internet connection</li>
                    <li>• Corporate VPN (if remote)</li>
                    <li>• Minimum 1 Mbps bandwidth</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Support Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Support & Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">IT Help Desk:</span>
                  <span className="text-gray-900 dark:text-white font-medium">1-800-HELP-DESK</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Email Support:</span>
                  <span className="text-gray-900 dark:text-white font-medium">appstore@albertsons.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Business Hours:</span>
                  <span className="text-gray-900 dark:text-white font-medium">Mon-Fri 8AM-6PM PST</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Legal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <Copyright className="w-5 h-5 mr-2 text-gray-600" />
                Legal & Licensing
              </h3>
              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <strong className="text-gray-900 dark:text-white">Copyright © 2024 Albertsons Companies, Inc.</strong><br />
                  All rights reserved. This software and associated documentation are proprietary to Albertsons Companies 
                  and are protected by intellectual property laws.
                </p>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Software Licenses</h4>
                  <p>
                    This application incorporates various open-source and proprietary software components. 
                    Each installed application through this store is subject to its own licensing terms.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Terms of Use</h4>
                  <p>
                    By using this application store, you agree to comply with Albertsons Companies' 
                    Information Technology Acceptable Use Policy and all applicable software licensing agreements.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Privacy Policy</h4>
                  <p>
                    Usage data and application requests are collected and processed in accordance with 
                    Albertsons Companies' Privacy Policy and applicable data protection regulations.
                  </p>
                </div>

                <div className="pt-2">
                  <button className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm">
                    View Full Terms and Conditions
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Technical Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technical Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Version:</span>
                    <span className="text-gray-900 dark:text-white font-medium">2.1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Build:</span>
                    <span className="text-gray-900 dark:text-white font-medium">2024.12.15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Environment:</span>
                    <span className="text-gray-900 dark:text-white font-medium">Production</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Framework:</span>
                    <span className="text-gray-900 dark:text-white font-medium">React 18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">UI Library:</span>
                    <span className="text-gray-900 dark:text-white font-medium">Tailwind CSS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Last Updated:</span>
                    <span className="text-gray-900 dark:text-white font-medium">Dec 15, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
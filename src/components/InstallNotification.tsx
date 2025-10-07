import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-65hl8oprkq';

interface InstallNotificationProps {
  appName: string;
  isVisible: boolean;
  onClose: () => void;
  type?: 'success' | 'error';
  message?: string;
  subMessage?: string;
}

function SuccessIcon() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[9px]">
      <div className="relative size-full bg-[#00BBFF] rounded-full flex items-center justify-center">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
}

function ErrorIcon() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[9px]">
      <div className="relative size-full bg-[#FF4444] rounded-full flex items-center justify-center">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  );
}

export function InstallNotification({ 
  appName, 
  isVisible, 
  onClose, 
  type = 'success',
  message,
  subMessage 
}: InstallNotificationProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      // Auto close after 4 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const handleAnimationComplete = () => {
    if (!isVisible) {
      setShouldRender(false);
    }
  };

  if (!shouldRender) return null;

  const isSuccess = type === 'success';
  const mainMessage = message || (isSuccess ? `Installation completed: ${appName}` : `Error installing ${appName}`);
  const secondaryMessage = subMessage || (isSuccess ? 'You can now open it from your desktop menu' : 'Please check with support if the issue continues');

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 pointer-events-none">
      <AnimatePresence mode="wait" onExitComplete={handleAnimationComplete}>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.3 
            }}
            className="pointer-events-auto"
          >
            <div 
              className={`
                bg-white dark:bg-gray-800 overflow-hidden relative rounded-[10px] cursor-pointer
                w-[280px] h-[42px] sm:w-[320px] sm:h-[42px]
                border-l-4 
                ${isSuccess 
                  ? 'shadow-[0px_0px_8px_2px_rgba(0,187,255,0.4)] border-l-[#00BBFF]' 
                  : 'shadow-[0px_0px_8px_2px_rgba(255,68,68,0.4)] border-l-[#FF4444]'
                }
                hover:shadow-lg transition-all duration-300
              `}
              onClick={onClose}
            >
              <p 
                className="absolute leading-normal left-[46px] text-[12px] text-gray-900 dark:text-gray-100 truncate
                           w-[220px] sm:w-[249px] font-medium"
                style={{ top: "calc(50% - 14.5px)" }}
              >
                {mainMessage}
              </p>
              <p 
                className="absolute font-light leading-normal left-[46px] text-[10px] text-gray-600 dark:text-gray-300 truncate
                           w-[220px] sm:w-[249px]"
                style={{ top: "calc(50% + 4.5px)" }}
              >
                {secondaryMessage}
              </p>
              {isSuccess ? <SuccessIcon /> : <ErrorIcon />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
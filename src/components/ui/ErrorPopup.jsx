import React from 'react';
import { X as XIcon } from 'lucide-react';
import { AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, Info as InfoIcon } from 'lucide-react';

// General popup for errors, success, or info
const ErrorPopup = ({ type = 'error', message, onClose }) => {
  const isTest = process.env.NODE_ENV === 'test';
  if (!message) return null;
  const config = {
    error: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: AlertTriangleIcon, iconColor: 'text-red-600' },
    success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: CheckCircleIcon, iconColor: 'text-green-600' },
    info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: InfoIcon, iconColor: 'text-blue-600' },
  };
  const { bg, border, text: textClass, icon: Icon, iconColor } = config[type] || config.error;


  return (
    <div className="fixed top-2 right-4 md:right-1/2 md:translate-x-1/2 pointer-events-none z-50">
      <div className={`pointer-events-auto ${bg} ${border} ${textClass} p-4 rounded-lg shadow animate-fade-in-down flex items-center space-x-2 w-[calc(100vw-1rem)] md:max-w-sm`}>
        {Icon && <Icon className={`${iconColor} h-5 w-5`} />}
        <span data-testid={isTest ? 'error-popup' : undefined} className="flex-1">{message}</span>
        {XIcon && (
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 ml-2">
            <XIcon size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPopup;

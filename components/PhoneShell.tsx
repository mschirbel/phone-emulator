
import React from 'react';

interface PhoneShellProps {
  children: React.ReactNode;
  currentTime: Date;
  onHomeClick: () => void;
}

const PhoneShell: React.FC<PhoneShellProps> = ({ children, currentTime, onHomeClick }) => {
  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[720px] w-[360px] shadow-2xl overflow-hidden ring-4 ring-gray-700">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-7 flex items-end justify-center z-50">
        <div className="bg-black h-6 w-32 rounded-b-2xl"></div>
      </div>

      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-10 flex items-center justify-between px-6 pt-2 z-40 text-xs font-semibold text-white pointer-events-none">
        <span>{timeString}</span>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21L1 10h22L12 21z" />
          </svg>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
          </svg>
        </div>
      </div>

      {/* Screen Content */}
      <div className="w-full h-full bg-black relative">
        {children}
      </div>

      {/* Navigation Bar (Home Indicator) */}
      <div className="absolute bottom-2 inset-x-0 flex justify-center z-50">
        <button 
          onClick={onHomeClick}
          className="w-32 h-1.5 bg-white/40 rounded-full hover:bg-white/60 transition-colors"
          aria-label="Home"
        />
      </div>
    </div>
  );
};

export default PhoneShell;

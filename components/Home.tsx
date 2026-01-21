
import React from 'react';
import { AppID } from '../types';

interface HomeProps {
  onOpenApp: (id: AppID) => void;
  wallpaper: string;
}

const Home: React.FC<HomeProps> = ({ onOpenApp, wallpaper }) => {
  return (
    <div 
      className="w-full h-full bg-cover bg-center flex flex-col pt-16 pb-12 px-6"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      {/* Dynamic Widget Area */}
      <div className="mb-6 w-full bg-black/20 backdrop-blur-lg rounded-3xl p-4 flex flex-col gap-1 ring-1 ring-white/20 shadow-xl">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-white/70 text-[10px] uppercase font-bold tracking-wider">Thursday, Oct 24</span>
            <span className="text-white text-3xl font-light">14:55</span>
          </div>
          <div className="text-right">
            <span className="text-white text-xl font-medium">22°</span>
            <span className="text-white/60 block text-[10px]">Partly Cloudy</span>
          </div>
        </div>
      </div>

      {/* App Grid */}
      <div className="grid grid-cols-4 gap-y-6 gap-x-2 overflow-y-auto">
        {/* Row 1 */}
        <AppIcon label="Camera" icon="📷" color="bg-zinc-800" disabled />
        <AppIcon label="Email" icon="✉️" color="bg-blue-500" onClick={() => onOpenApp(AppID.EMAIL)} />
        <AppIcon label="Maps" icon="📍" color="bg-red-400" disabled />
        <AppIcon label="Stocks" icon="📈" color="bg-black text-green-400" disabled />

        {/* Row 2 */}
        <AppIcon label="Spotify" icon="🎵" color="bg-green-600" disabled />
        <AppIcon label="Notes" icon="📝" color="bg-yellow-400 text-black" onClick={() => onOpenApp(AppID.NOTES)} />
        <AppIcon label="Instagram" icon="📸" color="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" disabled />
        <AppIcon label="Discord" icon="👾" color="bg-[#5865F2]" disabled />

        {/* Row 3 */}
        <AppIcon label="TikTok" icon="🎵" color="bg-black" disabled />
        <AppIcon label="Health" icon="❤️" color="bg-white text-red-500" disabled />
        <AppIcon label="Browser" icon="🌐" color="bg-indigo-500" onClick={() => onOpenApp(AppID.BROWSER)} />
        <AppIcon label="Photos" icon="🖼️" color="bg-pink-500" disabled />

        {/* Row 4 */}
        <AppIcon label="Wallet" icon="💳" color="bg-indigo-900" disabled />
        <AppIcon label="YouTube" icon="📺" color="bg-red-600" disabled />
        <AppIcon label="Clock" icon="⏰" color="bg-neutral-800" disabled />
        <AppIcon label="Translate" icon="文" color="bg-blue-600" disabled />

        {/* Row 5 */}
        <AppIcon label="Files" icon="📁" color="bg-blue-300" disabled />
        <AppIcon label="Calculator" icon="🧮" color="bg-orange-500" disabled />
        <AppIcon label="Calendar" icon="📅" color="bg-white text-red-500" disabled />
        <AppIcon label="Settings" icon="⚙️" color="bg-gray-600" disabled />
      </div>

      {/* Persistent Dock */}
      <div className="mt-auto">
        <div className="bg-white/25 backdrop-blur-2xl rounded-[2.5rem] p-4 grid grid-cols-4 gap-4 ring-1 ring-white/20 shadow-2xl">
          <AppIcon label="Phone" icon="📞" color="bg-green-500" showLabel={false} onClick={() => onOpenApp(AppID.PHONE)} />
          <AppIcon label="WhatsApp" icon="💬" color="bg-emerald-500" showLabel={false} onClick={() => onOpenApp(AppID.WHATSAPP)} />
          <AppIcon label="Email" icon="✉️" color="bg-blue-500" showLabel={false} onClick={() => onOpenApp(AppID.EMAIL)} />
          <AppIcon label="Browser" icon="🌐" color="bg-indigo-500" showLabel={false} onClick={() => onOpenApp(AppID.BROWSER)} />
        </div>
      </div>
    </div>
  );
};

interface AppIconProps {
  label: string;
  icon: string;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
  showLabel?: boolean;
}

const AppIcon: React.FC<AppIconProps> = ({ label, icon, color, onClick, disabled, showLabel = true }) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`flex flex-col items-center gap-1 group outline-none ${disabled ? 'opacity-90' : 'active:scale-90 transition-transform'}`}
    >
      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-3xl shadow-lg ring-1 ring-white/20 group-hover:brightness-110 overflow-hidden`}>
        {icon}
      </div>
      {showLabel && (
        <span className="text-[10px] font-medium text-white drop-shadow-md truncate w-full px-1 text-center">
          {label}
        </span>
      )}
    </button>
  );
};

export default Home;

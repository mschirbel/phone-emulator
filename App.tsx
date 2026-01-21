
import React, { useState, useEffect } from 'react';
import { AppID, PhoneData } from './types';
import { PHONE_DATA } from './data';
import PhoneShell from './components/PhoneShell';
import Home from './components/Home';
import EmailApp from './apps/Email';
import WhatsAppApp from './apps/WhatsApp';
import PhoneApp from './apps/Phone';
import BrowserApp from './apps/Browser';
import NotesApp from './apps/Notes';

const App: React.FC = () => {
  const [activeApp, setActiveApp] = useState<AppID>(AppID.HOME);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [data, setData] = useState<PhoneData>(PHONE_DATA);

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const renderApp = () => {
    switch (activeApp) {
      case AppID.EMAIL:
        return <EmailApp emails={data.emails} onBack={() => setActiveApp(AppID.HOME)} />;
      case AppID.WHATSAPP:
        return <WhatsAppApp chats={data.chats} onBack={() => setActiveApp(AppID.HOME)} />;
      case AppID.PHONE:
        return <PhoneApp calls={data.calls} onBack={() => setActiveApp(AppID.HOME)} />;
      case AppID.BROWSER:
        return <BrowserApp browser={data.browser} onBack={() => setActiveApp(AppID.HOME)} />;
      case AppID.NOTES:
        return <NotesApp notes={data.notes} onBack={() => setActiveApp(AppID.HOME)} />;
      case AppID.HOME:
      default:
        return <Home onOpenApp={setActiveApp} wallpaper={data.wallpaperUrl} />;
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-neutral-900 p-4">
      <PhoneShell 
        currentTime={currentTime} 
        onHomeClick={() => setActiveApp(AppID.HOME)}
      >
        {renderApp()}
      </PhoneShell>
    </div>
  );
};

export default App;

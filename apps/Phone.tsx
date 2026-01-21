
import React, { useState } from 'react';
import { Call } from '../types';

interface PhoneAppProps {
  calls: Call[];
  onBack: () => void;
}

const PhoneApp: React.FC<PhoneAppProps> = ({ calls, onBack }) => {
  const [tab, setTab] = useState<'recents' | 'keypad'>('recents');

  return (
    <div className="w-full h-full bg-white text-black flex flex-col pt-10">
      <div className="flex-1 flex flex-col">
        {tab === 'recents' ? (
          <>
            <div className="px-4 py-4">
              <h1 className="text-3xl font-bold">Recents</h1>
            </div>
            <div className="flex-1 overflow-y-auto px-4">
              {calls.map(call => (
                <div key={call.id} className="flex items-center py-3 border-b gap-3">
                  <div className={`text-lg ${call.type === 'missed' ? 'text-red-500' : 'text-gray-400'}`}>
                    {call.type === 'incoming' ? '↙️' : call.type === 'outgoing' ? '↗️' : '🚫'}
                  </div>
                  <div className="flex-1">
                    <p className={`font-semibold ${call.type === 'missed' ? 'text-red-500' : 'text-black'}`}>{call.contactName}</p>
                    <p className="text-xs text-gray-500">{call.time}</p>
                  </div>
                  <div className="text-xs text-gray-400">{call.duration || 'Missed'}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
            <div className="text-3xl font-light h-10 tracking-widest"></div>
            <div className="grid grid-cols-3 gap-6 w-full max-w-[240px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map(key => (
                <button key={key} className="w-16 h-16 rounded-full bg-gray-100 flex flex-col items-center justify-center active:bg-gray-200 transition-colors">
                  <span className="text-2xl">{key}</span>
                  <span className="text-[8px] text-gray-400 uppercase">
                    {key === 2 ? 'abc' : key === 3 ? 'def' : key === 4 ? 'ghi' : ''}
                  </span>
                </button>
              ))}
            </div>
            <button className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl mt-4">📞</button>
          </div>
        )}
      </div>

      <div className="bg-gray-50/80 backdrop-blur-md border-t flex justify-around p-2 pb-6">
        <button onClick={() => setTab('recents')} className={`flex flex-col items-center gap-1 ${tab === 'recents' ? 'text-blue-600' : 'text-gray-400'}`}>
          <span className="text-xl">🕒</span>
          <span className="text-[10px]">Recents</span>
        </button>
        <button onClick={() => setTab('keypad')} className={`flex flex-col items-center gap-1 ${tab === 'keypad' ? 'text-blue-600' : 'text-gray-400'}`}>
          <span className="text-xl">🔢</span>
          <span className="text-[10px]">Keypad</span>
        </button>
        <button onClick={onBack} className="flex flex-col items-center gap-1 text-gray-400">
          <span className="text-xl">🏠</span>
          <span className="text-[10px]">Home</span>
        </button>
      </div>
    </div>
  );
};

export default PhoneApp;

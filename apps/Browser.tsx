
import React, { useState } from 'react';
import { PhoneData } from '../types';

interface BrowserAppProps {
  browser: PhoneData['browser'];
  onBack: () => void;
}

const BrowserApp: React.FC<BrowserAppProps> = ({ browser, onBack }) => {
  const [url, setUrl] = useState('google.com');
  const [inputValue, setInputValue] = useState('google.com');

  const currentPage = browser.pages.find(p => p.url === url) || {
    title: "404 Not Found",
    content: "The requested URL was not found on this server."
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setUrl(inputValue.toLowerCase());
  };

  return (
    <div className="w-full h-full bg-white text-black flex flex-col pt-10">
      {/* Standard Header */}
      <div className="px-4 py-2 flex justify-between items-end border-b pb-4">
        <h1 className="text-3xl font-bold">Browser</h1>
        <button onClick={onBack} className="text-sm text-blue-600 font-medium">Close</button>
      </div>

      <div className="bg-gray-100 p-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="flex-1">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1 text-xs outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search or enter URL"
            />
          </form>
          <button className="text-lg opacity-50 cursor-default">🔄</button>
        </div>
        <div className="flex gap-4 px-2 overflow-x-auto text-[10px] text-gray-500 font-medium whitespace-nowrap">
          {browser.history.map(h => (
            <button key={h} onClick={() => { setUrl(h); setInputValue(h); }}>{h}</button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-md mx-auto">
          {url === 'google.com' ? (
            <div className="flex flex-col items-center pt-12">
              <h1 className="text-4xl font-bold mb-8">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </h1>
              <div className="w-full h-10 border rounded-full shadow-sm flex items-center px-4 text-sm text-gray-400">
                Search Google or type a URL
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 w-full text-xs">
                {browser.pages.filter(p => p.url !== 'google.com').map(p => (
                  <button 
                    key={p.url}
                    onClick={() => { setUrl(p.url); setInputValue(p.url); }}
                    className="p-4 bg-gray-50 rounded-lg border hover:bg-gray-100"
                  >
                    <p className="font-bold mb-1">{p.title}</p>
                    <p className="text-gray-400 truncate">{p.url}</p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-4">{currentPage.title}</h2>
              <div className="prose prose-sm leading-relaxed text-gray-700">
                {currentPage.content}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowserApp;

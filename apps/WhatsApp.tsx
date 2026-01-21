
import React, { useState } from 'react';
import { Chat } from '../types';

interface WhatsAppAppProps {
  chats: Chat[];
  onBack: () => void;
}

const WhatsAppApp: React.FC<WhatsAppAppProps> = ({ chats, onBack }) => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  if (selectedChat) {
    return (
      <div className="w-full h-full bg-[#E5DDD5] text-black flex flex-col pt-10">
        <div className="bg-[#075E54] text-white flex items-center p-3 gap-3">
          <button onClick={() => setSelectedChat(null)} className="text-xl">←</button>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-bold text-sm leading-tight">{selectedChat.contactName}</p>
            <p className="text-[10px] opacity-80">{selectedChat.lastSeen}</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
          {selectedChat.messages.map(msg => (
            <div 
              key={msg.id} 
              className={`max-w-[80%] rounded-lg p-2 text-xs relative ${msg.isMe ? 'bg-[#DCF8C6] self-end' : 'bg-white self-start'}`}
            >
              {msg.text}
              <span className="block text-[8px] text-gray-400 text-right mt-1">{msg.time}</span>
            </div>
          ))}
        </div>
        <div className="bg-white p-2 flex gap-2 items-center">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">Type a message...</div>
          <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center text-white">🎤</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white text-black flex flex-col pt-10">
      <div className="bg-[#075E54] text-white px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-medium">WhatsApp</h1>
        <div className="flex gap-4">
          <button>🔍</button>
          <button onClick={onBack}>🏠</button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map(chat => (
          <button 
            key={chat.id}
            onClick={() => setSelectedChat(chat)}
            className="w-full flex items-center p-3 gap-3 border-b active:bg-gray-50"
          >
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div className="flex-1 text-left">
              <div className="flex justify-between">
                <p className="font-bold">{chat.contactName}</p>
                <p className="text-[10px] text-gray-400">{chat.messages[chat.messages.length - 1]?.time}</p>
              </div>
              <p className="text-xs text-gray-500 truncate">{chat.messages[chat.messages.length - 1]?.text}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppApp;

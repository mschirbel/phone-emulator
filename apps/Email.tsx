
import React, { useState } from 'react';
import { Email } from '../types';

interface EmailAppProps {
  emails: Email[];
  onBack: () => void;
}

const EmailApp: React.FC<EmailAppProps> = ({ emails, onBack }) => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  if (selectedEmail) {
    return (
      <div className="w-full h-full bg-white text-black flex flex-col pt-10">
        <div className="flex items-center px-4 py-2 border-b">
          <button onClick={() => setSelectedEmail(null)} className="text-blue-600 font-medium">← Back</button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-1">{selectedEmail.subject}</h1>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-semibold">{selectedEmail.from}</p>
              <p className="text-sm text-gray-500">&lt;{selectedEmail.fromEmail}&gt;</p>
            </div>
            <p className="text-xs text-gray-400">{selectedEmail.date}</p>
          </div>
          <div className="text-sm leading-relaxed whitespace-pre-wrap border-t pt-4">
            {selectedEmail.body}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white text-black flex flex-col pt-10">
      <div className="px-4 py-2 flex justify-between items-end border-b pb-4">
        <h1 className="text-3xl font-bold">Inbox</h1>
        <button onClick={onBack} className="text-sm text-blue-600 font-medium">Close</button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {emails.map(email => (
          <button 
            key={email.id}
            onClick={() => setSelectedEmail(email)}
            className="w-full text-left px-4 py-3 border-b active:bg-gray-100 flex flex-col gap-0.5"
          >
            <div className="flex justify-between items-center">
              <span className={`font-bold ${email.read ? 'text-gray-500' : 'text-black'}`}>{email.from}</span>
              <span className="text-xs text-gray-400">{email.date}</span>
            </div>
            <p className={`text-sm truncate ${email.read ? 'text-gray-500' : 'text-black font-semibold'}`}>{email.subject}</p>
            <p className="text-xs text-gray-400 truncate">{email.body.substring(0, 50)}...</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmailApp;

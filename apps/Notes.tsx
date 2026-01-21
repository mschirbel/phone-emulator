
import React, { useState } from 'react';
import { Note } from '../types';

interface NotesAppProps {
  notes: Note[];
  onBack: () => void;
}

const NotesApp: React.FC<NotesAppProps> = ({ notes, onBack }) => {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  if (selectedNote) {
    return (
      <div className="w-full h-full bg-[#FFF9E6] text-[#423300] flex flex-col pt-10">
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#E8E0C5]">
          <button onClick={() => setSelectedNote(null)} className="text-[#D4AF37] font-bold text-lg">Done</button>
          <span className="text-xs opacity-50">{selectedNote.date}</span>
          <button className="text-[#D4AF37]">Share</button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <input 
            type="text" 
            readOnly 
            value={selectedNote.title} 
            className="w-full bg-transparent text-2xl font-bold border-none outline-none mb-4" 
          />
          <textarea 
            readOnly 
            value={selectedNote.content} 
            className="w-full h-full bg-transparent border-none outline-none resize-none leading-relaxed"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#FFF9E6] text-[#423300] flex flex-col pt-10 px-4">
      {/* Standard Header */}
      <div className="flex justify-between items-end py-2 border-b border-[#E8E0C5] pb-4">
        <h1 className="text-3xl font-bold">Notes</h1>
        <button onClick={onBack} className="text-sm text-[#D4AF37] font-medium">Close</button>
      </div>
      
      <div className="bg-white/50 rounded-xl overflow-hidden shadow-sm mt-4">
        {notes.map((note, index) => (
          <button 
            key={note.id}
            onClick={() => setSelectedNote(note)}
            className={`w-full text-left p-4 hover:bg-white/80 transition-colors flex flex-col gap-1 ${index !== notes.length - 1 ? 'border-b border-[#E8E0C5]' : ''}`}
          >
            <div className="flex justify-between items-center">
              <p className="font-bold text-sm">{note.title}</p>
              {note.completed && <span className="text-[10px] bg-green-200 text-green-800 px-1.5 py-0.5 rounded-full uppercase">Done</span>}
            </div>
            <p className="text-xs text-[#7A6E46] truncate">{note.content}</p>
            <p className="text-[9px] text-opacity-40">{note.date}</p>
          </button>
        ))}
      </div>

      <div className="mt-auto mb-10 flex justify-end">
        <button className="w-12 h-12 bg-[#D4AF37] rounded-full text-white text-2xl shadow-lg flex items-center justify-center">
          +
        </button>
      </div>
    </div>
  );
};

export default NotesApp;


import { Chat } from '../types';

export const CHATS: Chat[] = [
  {
    id: "c1",
    contactName: "Unknown",
    lastSeen: "Online",
    messages: [
      { id: "m1", text: "Are you there?", time: "12:01", isMe: false },
      { id: "m2", text: "I have the package.", time: "12:02", isMe: false },
      { id: "m3", text: "On my way to the drop point.", time: "12:05", isMe: true }
    ]
  },
  {
    id: "c2",
    contactName: "Sarah (Sister)",
    lastSeen: "Yesterday",
    messages: [
      { id: "m4", text: "Happy birthday Alex!", time: "08:00", isMe: false },
      { id: "m5", text: "Thanks Sarah!", time: "08:30", isMe: true }
    ]
  },
  {
    id: "c3",
    contactName: "Mark (Boss)",
    lastSeen: "10:15",
    messages: [
      { id: "m6", text: "Where is the report?", time: "09:00", isMe: false },
      { id: "m7", text: "Working on it now.", time: "09:10", isMe: true }
    ]
  }
];


export enum AppID {
  HOME = 'HOME',
  EMAIL = 'EMAIL',
  WHATSAPP = 'WHATSAPP',
  PHONE = 'PHONE',
  BROWSER = 'BROWSER',
  NOTES = 'NOTES',
  SETTINGS = 'SETTINGS',
  CAMERA = 'CAMERA',
  MAPS = 'MAPS'
}

export interface Email {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  date: string;
  body: string;
  read: boolean;
}

export interface Message {
  id: string;
  text: string;
  time: string;
  isMe: boolean;
}

export interface Chat {
  id: string;
  contactName: string;
  lastSeen: string;
  messages: Message[];
}

export interface Call {
  id: string;
  contactName: string;
  time: string;
  type: 'incoming' | 'outgoing' | 'missed';
  duration?: string;
}

export interface WebPage {
  url: string;
  title: string;
  content: string; // HTML-like string or simple text
}

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  completed?: boolean;
}

export interface PhoneData {
  ownerName: string;
  wallpaperUrl: string;
  emails: Email[];
  chats: Chat[];
  calls: Call[];
  notes: Note[];
  browser: {
    history: string[];
    pages: WebPage[];
  };
}

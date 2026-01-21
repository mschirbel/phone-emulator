
import { EMAILS } from './data/emails';
import { CHATS } from './data/chats';
import { CALLS } from './data/calls';
import { BROWSER_DATA } from './data/browser';
import { PHONE_SETTINGS } from './data/phoneSettings';
import { NOTES } from './data/notes';
import { PhoneData } from './types';

export const PHONE_DATA: PhoneData = {
  ownerName: PHONE_SETTINGS.ownerName,
  wallpaperUrl: PHONE_SETTINGS.wallpaperUrl,
  emails: EMAILS,
  chats: CHATS,
  calls: CALLS,
  notes: NOTES,
  browser: BROWSER_DATA
};

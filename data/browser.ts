
import { PhoneData } from '../types';

export const BROWSER_DATA: PhoneData['browser'] = {
  history: ["google.com", "nexus-internal.net", "news.com"],
  pages: [
    {
      url: "nexus-internal.net",
      title: "Nexus Dashboard",
      content: "ACCESS RESTRICTED: Please enter biometric credentials to view Project 'Echo' reports. Last login: 04:22 AM."
    },
    {
      url: "news.com",
      title: "Daily Global News",
      content: "BREAKING: Local tech billionaire disappears under mysterious circumstances. Police search the Sector 7 perimeter."
    },
    {
      url: "google.com",
      title: "Google Search",
      content: "Search the web... (Try searching 'Nexus' or 'Sector 7')"
    }
  ]
};

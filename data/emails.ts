
import { Email } from '../types';

export const EMAILS: Email[] = [
  {
    id: "e1",
    from: "Security Dept",
    fromEmail: "admin@global-corp.com",
    subject: "Suspicious Activity Detected",
    date: "Oct 24, 14:32",
    body: "Hello Alex,\n\nOur systems detected an unauthorized login to your account from a terminal in Sector 7. If this wasn't you, please change your password immediately.\n\nRegards,\nSecurity Team",
    read: false
  },
  {
    id: "e2",
    from: "Julia White",
    fromEmail: "j.white@nexus.org",
    subject: "Meeting Tonight?",
    date: "Oct 24, 09:15",
    body: "Hey, can we meet at the usual spot tonight? I found something in the logs you need to see. Don't tell anyone.",
    read: true
  },
  {
    id: "e3",
    from: "Newsletter",
    fromEmail: "info@daily-tech.com",
    subject: "The Future of AI is Here",
    date: "Oct 23, 18:00",
    body: "Check out our latest article on the breakthroughs in neural interface technology.",
    read: true
  }
];

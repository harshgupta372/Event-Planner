export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  participants: Participant[];
}

export interface Participant {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'accepted' | 'declined';
}
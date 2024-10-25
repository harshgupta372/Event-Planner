import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import type { Event } from '../types';

interface ParticipantFormProps {
  eventId: string;
  onInvite: (eventId: string, email: string, name: string) => void;
}

export function ParticipantForm({ eventId, onInvite }: ParticipantFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInvite(eventId, email, name);
    setEmail('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Participant name"
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required
      />
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <UserPlus className="w-4 h-4 mr-2" />
        Invite
      </button>
    </form>
  );
}
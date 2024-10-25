import React, { useState } from 'react';
import { CalendarRange } from 'lucide-react';
import { EventForm } from './components/EventForm';
import { EventCard } from './components/EventCard';
import { ParticipantForm } from './components/ParticipantForm';
import type { Event, Participant } from './types';

function App() {
  const [events, setEvents] = useState<Event[]>([]);

  const handleCreateEvent = (eventData: Omit<Event, 'id' | 'participants'>) => {
    const newEvent: Event = {
      ...eventData,
      id: crypto.randomUUID(),
      participants: [],
    };
    setEvents([...events, newEvent]);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleInviteParticipant = (eventId: string, email: string, name: string) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        const newParticipant: Participant = {
          id: crypto.randomUUID(),
          name,
          email,
          status: 'pending',
        };
        return {
          ...event,
          participants: [...event.participants, newParticipant],
        };
      }
      return event;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <CalendarRange className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Event Planner</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Create New Event</h2>
              <EventForm onSubmit={handleCreateEvent} />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              {events.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-md">
                  <CalendarRange className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No events</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by creating a new event.</p>
                </div>
              ) : (
                events.map(event => (
                  <div key={event.id} className="space-y-4">
                    <EventCard event={event} onDelete={handleDeleteEvent} />
                    <ParticipantForm eventId={event.id} onInvite={handleInviteParticipant} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
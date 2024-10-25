import React from 'react';
import { CalendarDays, MapPin, Clock, Users, Trash2 } from 'lucide-react';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
  onDelete: (id: string) => void;
}

export function EventCard({ event, onDelete }: EventCardProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
          <button
            onClick={() => onDelete(event.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
        
        <p className="mt-2 text-gray-600">{event.description}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-500">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-2" />
            <span>{event.participants.length} participants</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {event.participants.map((participant) => (
            <span
              key={participant.id}
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${
                  participant.status === 'accepted'
                    ? 'bg-green-100 text-green-800'
                    : participant.status === 'declined'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }
              `}
            >
              {participant.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
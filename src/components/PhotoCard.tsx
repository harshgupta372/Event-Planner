import React from 'react';

interface PhotoCardProps {
  imageUrl: string;
  title: string;
  onClick: () => void;
}

export function PhotoCard({ imageUrl, title, onClick }: PhotoCardProps) {
  return (
    <div 
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-xl"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover aspect-square transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-white p-4 font-medium">{title}</p>
      </div>
    </div>
  );
}
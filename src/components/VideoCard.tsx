import React from 'react';
import { Video } from '../types';
import { formatDistanceToNow } from 'date-fns';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{video.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{video.description}</p>
        <p className="text-gray-500 text-xs mt-2">
          {formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
}
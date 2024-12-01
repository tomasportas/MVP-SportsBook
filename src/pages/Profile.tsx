import React from 'react';
import { useStore } from '../store/useStore';
import { VideoCard } from '../components/VideoCard';

export function Profile() {
  const { currentUser } = useStore();

  if (!currentUser) return null;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{currentUser.name}</h1>
            <p className="text-gray-600">{currentUser.position}</p>
            <p className="text-sm text-gray-500">{currentUser.location}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h2 className="font-semibold">About</h2>
          <p className="mt-2 text-gray-600">{currentUser.bio}</p>
        </div>

        <div className="mt-6 flex space-x-8">
          <Stat label="Goals" value={currentUser.stats.goals} />
          <Stat label="Assists" value={currentUser.stats.assists} />
          <Stat label="Matches" value={currentUser.stats.matches} />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentUser.videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-blue-600">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}
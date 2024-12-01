import React from 'react';
import { VideoCard } from '../components/VideoCard';
import { mockUsers } from '../data/mockData';

export function Home() {
  const allVideos = mockUsers.flatMap(user => user.videos);
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Discover Talent</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
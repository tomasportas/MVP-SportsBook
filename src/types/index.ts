export interface User {
  id: string;
  name: string;
  position: string;
  age: number;
  location: string;
  avatar: string;
  bio: string;
  stats: {
    goals: number;
    assists: number;
    matches: number;
  };
  videos: Video[];
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
  userId: string;
  createdAt: string;
}

export interface Job {
  id: string;
  title: string;
  organization: string;
  location: string;
  type: 'club' | 'university';
  description: string;
  requirements: string[];
  postedAt: string;
}

export interface MarketplaceItem {
  id: string;
  title: string;
  price: number;
  condition: 'new' | 'like new' | 'good' | 'fair';
  description: string;
  image: string;
  sellerId: string;
  category: string;
}
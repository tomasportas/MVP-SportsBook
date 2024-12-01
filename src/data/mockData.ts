import { User, Job, MarketplaceItem } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Rahul Kumar',
    position: 'Forward',
    age: 17,
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    bio: 'Aspiring footballer from Mumbai with a passion for scoring goals. Training since age 6.',
    stats: { goals: 28, assists: 12, matches: 34 },
    videos: [
      {
        id: 'v1',
        title: 'Free Kick Practice',
        url: 'https://example.com/video1',
        thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55',
        description: 'Practicing free kicks from 25 yards',
        userId: '1',
        createdAt: '2024-03-10T10:00:00Z'
      }
    ]
  },
  {
    id: '2',
    name: 'Sarah Martinez',
    position: 'Midfielder',
    age: 19,
    location: 'Barcelona, Spain',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    bio: 'Technical midfielder with excellent vision. Looking for university opportunities.',
    stats: { goals: 15, assists: 32, matches: 45 },
    videos: [
      {
        id: 'v2',
        title: 'Dribbling Skills',
        url: 'https://example.com/video2',
        thumbnail: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12',
        description: 'Advanced dribbling techniques demonstration',
        userId: '2',
        createdAt: '2024-03-09T15:30:00Z'
      }
    ]
  }
];

export const mockJobs: Job[] = [
  {
    id: 'j1',
    title: 'Youth Academy Player',
    organization: 'FC Barcelona Academy',
    location: 'Barcelona, Spain',
    type: 'club',
    description: 'Looking for talented young players aged 15-18 for our youth academy.',
    requirements: ['Age: 15-18', 'Strong technical skills', 'Team player'],
    postedAt: '2024-03-08T09:00:00Z'
  },
  {
    id: 'j2',
    title: 'Soccer Scholarship',
    organization: 'University of California',
    location: 'California, USA',
    type: 'university',
    description: 'Full scholarship opportunity for talented football players.',
    requirements: ['High school diploma', 'Strong academic record', 'Competitive playing experience'],
    postedAt: '2024-03-07T14:00:00Z'
  }
];

export const mockMarketplace: MarketplaceItem[] = [
  {
    id: 'm1',
    title: 'Nike Mercurial Superfly',
    price: 89.99,
    condition: 'like new',
    description: 'Used only twice, size UK 8',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    sellerId: '1',
    category: 'Boots'
  },
  {
    id: 'm2',
    title: 'Adidas Match Ball',
    price: 45,
    condition: 'good',
    description: 'Official match ball, slight wear',
    image: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab',
    sellerId: '2',
    category: 'Equipment'
  }
];
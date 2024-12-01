import { create } from 'zustand';
import { User } from '../types';
import { mockUsers } from '../data/mockData';

interface Store {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export const useStore = create<Store>((set) => ({
  currentUser: mockUsers[0], // For demo purposes, we'll start logged in as the first user
  setCurrentUser: (user) => set({ currentUser: user }),
}));
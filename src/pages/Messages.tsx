import React from 'react';
import { mockUsers } from '../data/mockData';

export function Messages() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-3 h-[calc(100vh-12rem)]">
        <div className="border-r">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Messages</h2>
          </div>
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {mockUsers.map(user => (
              <div
                key={user.id}
                className="flex items-center space-x-3 p-4 hover:bg-gray-50 cursor-pointer"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Select a conversation</h2>
          </div>
          <div className="flex-1 p-4 flex items-center justify-center text-gray-500">
            Choose a contact to start messaging
          </div>
        </div>
      </div>
    </div>
  );
}
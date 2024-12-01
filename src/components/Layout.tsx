import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Home, User, Briefcase, ShoppingBag, MessageCircle } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-blue-600">SportsNet</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <NavLink to="/" icon={<Home size={20} />} />
              <NavLink to="/profile" icon={<User size={20} />} />
              <NavLink to="/jobs" icon={<Briefcase size={20} />} />
              <NavLink to="/marketplace" icon={<ShoppingBag size={20} />} />
              <NavLink to="/messages" icon={<MessageCircle size={20} />} />
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}

function NavLink({ to, icon }: { to: string; icon: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
    >
      {icon}
    </Link>
  );
}
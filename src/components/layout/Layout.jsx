import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { StudentChatWidget } from '../chat/StudentChatWidget';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full relative">
        <Outlet />
      </main>
      <StudentChatWidget />
      <Footer />
    </div>
  );
}


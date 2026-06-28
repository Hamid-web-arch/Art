// src/features/seller/layout/SellerLayout.jsx
import Sidebar from './Sidebar';
import Header from './Header';

export default function SellerLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      <Sidebar />
      <div className="container flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
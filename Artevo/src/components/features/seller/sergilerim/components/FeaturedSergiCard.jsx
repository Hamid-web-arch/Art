// src/features/seller/sergilerim/components/FeaturedSergiCard.jsx

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 19c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M16 13.2c2.6.5 4.5 2.7 4.5 5.3" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h4l2 7 4-14 2 7h6" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9a2 2 0 0 1 0-4h18a2 2 0 0 1 0 4 2 2 0 0 0 0 4 2 2 0 0 1 0 4H3a2 2 0 0 1 0-4 2 2 0 0 0 0-4Z" />
      <path d="M10 5v14" strokeDasharray="2 2" />
    </svg>
  );
}

function MoreVerticalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  );
}

export default function FeaturedSergiCard({ sergi }) {
  return (
    <div className="bg-white rounded-xl border border-[#ECECEC] overflow-hidden font-inter">
      {/* Şəkil */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={sergi.sekil}
          alt={sergi.baslik}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Məlumat */}
      <div className="p-5 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-black">{sergi.baslik}</h3>
            <div className="flex items-center gap-1.5 text-[#5F5E5E] text-sm mt-1">
              <CalendarIcon />
              <span>{sergi.tarix}</span>
            </div>
          </div>
          <button className="text-[#5F5E5E] hover:text-black">
            <MoreVerticalIcon />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#ECECEC]">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#5F5E5E] uppercase tracking-wide">
              <UsersIcon />
              <span>Ziyarətçi</span>
            </div>
            <p className="text-xl font-medium text-[#900B00] mt-1">
              {sergi.ziyaretci}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#5F5E5E] uppercase tracking-wide">
              <ActivityIcon />
              <span>İştirak</span>
            </div>
            <p className="text-xl font-medium text-[#2563EB] mt-1">
              {sergi.istirak}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#5F5E5E] uppercase tracking-wide">
              <TicketIcon />
              <span>Bilet satışı</span>
            </div>
            <p className="text-xl font-medium text-black mt-1">
              {sergi.biletSatisi}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

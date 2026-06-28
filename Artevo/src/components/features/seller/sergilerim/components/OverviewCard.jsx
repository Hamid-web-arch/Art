// src/features/seller/sergilerim/components/OverviewCard.jsx

function TrendingUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 19c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M16 13.2c2.6.5 4.5 2.7 4.5 5.3" />
    </svg>
  );
}

export default function OverviewCard({ data }) {
  return (
    <div className="bg-white rounded-xl border border-[#ECECEC] p-5 font-inter">
      <h3 className="text-base font-medium text-black mb-4">Ümumi Baxış</h3>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between bg-[#FBEAEA] rounded-lg px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-[#900B00]">
            <TrendingUpIcon />
            <span>Böyümə</span>
          </div>
          <span className="text-sm font-medium text-[#900B00]">
            {data.boyume}
          </span>
        </div>

        <div className="flex items-center justify-between bg-[#EAF1FB] rounded-lg px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-[#2563EB]">
            <UsersIcon />
            <span>Yeni Kolleksionerlər</span>
          </div>
          <span className="text-sm font-medium text-[#2563EB]">
            {data.yeniKoleksionerler}
          </span>
        </div>
      </div>
    </div>
  );
}

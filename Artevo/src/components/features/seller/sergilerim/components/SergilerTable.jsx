// src/features/seller/sergilerim/components/SergilerTable.jsx

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

const statusStyles = {
  AKTİV: "bg-[#E6F4E9] text-[#00901A]",
  "GÖZLƏNİLƏN": "bg-[#DBF3FF] text-[#006F8F]",
  KEÇMİŞ: "bg-[#FFF0EF] text-[#5F5E5E]",
};

const performansBarColor = {
  red: "bg-[#900B00]",
  blue: "bg-[#006F8F]",
};

export default function SergilerTable({ sergiler, pagination }) {
  return (
    <div className="bg-white rounded-xl border border-[#ECECEC] font-inter overflow-hidden">
      <div className="px-5 py-4">
        <h3 className="text-base font-medium text-black">Digər Sərgilər</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-[#5F5E5E] uppercase border-y border-[#ECECEC]">
              <th className="px-5 py-3 font-medium">Sərgi Adı</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Tarix</th>
              <th className="px-5 py-3 font-medium">Ziyarətçilər</th>
              <th className="px-5 py-3 font-medium">Performans</th>
            </tr>
          </thead>
          <tbody>
            {sergiler.map((s) => (
              <tr key={s.id} className="border-b border-[#ECECEC] last:border-0">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={s.sekil}
                      alt={s.ad}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                    <span className="font-medium text-black">{s.ad}</span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[s.statusLabel]}`}
                  >
                    {s.statusLabel}
                  </span>
                </td>
                <td className="px-5 py-3 text-[#5F5E5E]">{s.tarix}</td>
                <td className="px-5 py-3 text-[#5F5E5E]">{s.ziyaretci}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 rounded-full bg-[#ECECEC] overflow-hidden">
                      <div
                        className={`h-full ${performansBarColor[s.performans.color]}`}
                        style={{
                          width:
                            s.performans.color === "red" ? "45%" : "85%",
                        }}
                      />
                    </div>
                    <span className="text-xs text-[#5F5E5E] whitespace-nowrap">
                      {s.performans.label}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-5 py-4 text-sm text-[#5F5E5E]">
        <span>
          {pagination.cem} sərginin {pagination.gosterilen}-ü göstərilir
        </span>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-md border border-[#ECECEC] hover:bg-[#FAFAFA]">
            <ChevronLeftIcon />
          </button>
          <span className="w-8 h-8 flex items-center justify-center rounded-md border border-[#ECECEC] text-black font-medium">
            {pagination.cari}
          </span>
          <button className="p-1.5 rounded-md border border-[#ECECEC] hover:bg-[#FAFAFA]">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

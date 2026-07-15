// src/features/seller/create-exhibiton/components/Step2Yoxlanis.jsx
import { useNavigate } from "react-router-dom";

function SearchIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#900B00" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// onTamamlandi: real layihədə backend-dən "təsdiqləndi" cavabı gəldikdə çağrılır
export default function Step2Yoxlanis({ onTamamlandi }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-[#ECECEC] rounded-xl p-12 flex flex-col items-center gap-5 font-inter text-center">
      <div className="w-20 h-20 rounded-full bg-[#FFF0F0] flex items-center justify-center">
        <SearchIcon />
      </div>

      <h2 className="text-xl font-semibold text-black">Müraciətiniz yoxlanılır</h2>

      <p className="text-sm text-[#5F5E5E] max-w-sm leading-relaxed">
        Sənədləriniz moderatorlarımız tərəfindən nəzərdən keçirilir.
        Bu proses adətən 24-48 saat çəkir. Nəticə barədə sizə
        bildiriş göndəriləcək.
      </p>

      <div className="flex gap-4 mt-2">
        <button
          onClick={() => navigate("/seller/sergilerim")}
          className="px-8 py-3.5 border border-[#D9D9D9] rounded-lg text-sm font-medium text-black hover:bg-[#F5F5F5] transition-colors"
        >
          Sərgi Səhifəsinə Get
        </button>
        <button
          onClick={() => navigate("/seller/dashboard")}
          className="px-8 py-3.5 bg-[#900B00] text-white rounded-lg text-sm font-medium hover:bg-[#7a0900] transition-colors"
        >
          Dashboard-a Qayıt
        </button>
      </div>

      {/* DEV: backend cavabını simulyasiya etmək üçün */}
      {process.env.NODE_ENV === "development" && (
        <button
          onClick={onTamamlandi}
          className="mt-4 text-xs text-[#9C9C9C] underline"
        >
          [DEV] Təsdiqləndi simulyasiya et → Step 3
        </button>
      )}
    </div>
  );
}

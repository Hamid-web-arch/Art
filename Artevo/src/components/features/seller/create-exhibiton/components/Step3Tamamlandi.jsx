// src/features/seller/sergi-tesdiq/components/Step3Tamamlandi.jsx
import { useNavigate } from "react-router-dom";

function CheckIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Step3Tamamlandi() {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-[#ECECEC] rounded-xl p-12 flex flex-col items-center gap-5 font-inter text-center">
      {/* Yaşıl check ikonası */}
      <div className="w-20 h-20 rounded-full bg-[#E8F5E9] flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-[#2E7D32] flex items-center justify-center">
          <CheckIcon />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-black">Sərginiz Təsdiqləndi!</h2>

      <p className="text-sm text-[#5F5E5E] max-w-sm leading-relaxed">
        Təbrik edirik! Sərginiz uğurla təsdiqləndi və artıq platformada yayımlandı.
        Siz sərgi detallarını idarə edə və statistikaya baxa bilərsiniz.
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
    </div>
  );
}

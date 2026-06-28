// src/features/seller/sergilerim/components/PremiumBanner.jsx

export default function PremiumBanner({ onYukle }) {
  return (
    <div className="bg-[#900B00] rounded-xl p-5 flex flex-col gap-3 font-inter">
      <h3 className="text-white font-medium text-base">Premium Hesabat</h3>
      <p className="text-white/80 text-sm leading-snug">
        Bütün sərgilərinizin dərin analitikasını əldə edin.
      </p>
      <button
        onClick={onYukle}
        className="self-start bg-white text-[#900B00] text-sm font-medium px-4 py-2 rounded-md"
      >
        Yüklə
      </button>
    </div>
  );
}

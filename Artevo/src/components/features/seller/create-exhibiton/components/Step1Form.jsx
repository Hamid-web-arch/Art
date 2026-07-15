// src/features/seller/sergi-tesdiq/components/Step1Form.jsx
import { useState } from "react";
import FileUploadZone from "./FileUploadZone";
import AserlerSiyahisi from "./AserlerSiyahisi";

export default function Step1Form({ onNext, onCancel }) {
  const [form, setForm] = useState({
    vesiqeNomresi: "",
    vesiqeSkan: null,
    mekanMuqavilesi: null,
    aserlerFayllar: [],
    telefon: "",
    instagram: "",
    facebook: "",
    portfolioLink: "",
  });

  const set = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = () => {
    // Sadə validasiya
    if (!form.vesiqeNomresi || !form.vesiqeSkan) {
      alert("Zəhmət olmasa şəxsiyyət vəsiqəsi məlumatlarını doldurun.");
      return;
    }
    onNext();
  };

  return (
    <div className="flex flex-col gap-6 font-inter">
      {/* Şəxsiyyət Məlumatları */}
      <div className="bg-white border border-[#ECECEC] rounded-xl p-6 flex flex-col gap-5">
        <h2 className="text-base font-semibold text-black">Şəxsiyyət Məlumatları</h2>

        <div>
          <label className="text-xs text-[#5F5E5E] uppercase tracking-wide block mb-1.5">
            Şəxsiyyət vəsiqəsinin seriyası və nömrəsi
          </label>
          <input
            type="text"
            placeholder="AZE 00000000"
            value={form.vesiqeNomresi}
            onChange={(e) => set("vesiqeNomresi", e.target.value)}
            className="w-full border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm text-black placeholder:text-[#C4C4C4] focus:outline-none focus:border-[#900B00]"
          />
        </div>

        <FileUploadZone
          label="Şəxsiyyət vəsiqəsinin skanı"
          hint="PDF, JPG və ya PNG (Maks. 5MB)"
          accept=".pdf,.jpg,.jpeg,.png"
          value={form.vesiqeSkan}
          onChange={(f) => set("vesiqeSkan", f)}
        />
      </div>

      {/* Məkan Müqaviləsi */}
      <div className="bg-white border border-[#ECECEC] rounded-xl p-6">
        <h2 className="text-base font-semibold text-black mb-5">Məkan Müqaviləsi</h2>
        <FileUploadZone
          label="Sərgi keçiriləcəyi məkan ilə bağlanan icarə və ya sair razılaşma müqaviləsi"
          hint="DOCX, PDF (Maks. 10MB)"
          accept=".pdf,.doc,.docx"
          value={form.mekanMuqavilesi}
          onChange={(f) => set("mekanMuqavilesi", f)}
        />
      </div>

      {/* Əsərlər Siyahısı */}
      <div className="bg-white border border-[#ECECEC] rounded-xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-black">Əsərlərin Siyahısı</h2>
          <a
            href="#"
            className="text-sm text-[#900B00] flex items-center gap-1 hover:underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Şablonu yüklə
          </a>
        </div>
        <AserlerSiyahisi
          files={form.aserlerFayllar}
          onChange={(f) => set("aserlerFayllar", f)}
        />
      </div>

      {/* Əlaqə */}
      <div className="bg-white border border-[#ECECEC] rounded-xl p-6">
        <h2 className="text-base font-semibold text-black mb-5">Əlaqə</h2>
        <div>
          <label className="text-xs text-[#5F5E5E] uppercase tracking-wide block mb-1.5">
            Mobil telefon nömrəsi
          </label>
          <input
            type="tel"
            placeholder="50 000 00 00"
            value={form.telefon}
            onChange={(e) => set("telefon", e.target.value)}
            className="w-full border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm placeholder:text-[#C4C4C4] focus:outline-none focus:border-[#900B00]"
          />
        </div>
      </div>

      {/* Sosial Şəbəkələr */}
      <div className="bg-white border border-[#ECECEC] rounded-xl p-6 flex flex-col gap-4">
        <h2 className="text-base font-semibold text-black">Sosial Şəbəkələr</h2>

        <div>
          <label className="text-xs text-[#5F5E5E] uppercase tracking-wide block mb-1.5">
            Instagram
          </label>
          <input
            type="text"
            placeholder="@artist_name"
            value={form.instagram}
            onChange={(e) => set("instagram", e.target.value)}
            className="w-full border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm placeholder:text-[#C4C4C4] focus:outline-none focus:border-[#900B00]"
          />
        </div>

        <div>
          <label className="text-xs text-[#5F5E5E] uppercase tracking-wide block mb-1.5">
            Facebook
          </label>
          <input
            type="text"
            placeholder="facebook.com/artist"
            value={form.facebook}
            onChange={(e) => set("facebook", e.target.value)}
            className="w-full border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm placeholder:text-[#C4C4C4] focus:outline-none focus:border-[#900B00]"
          />
        </div>

        <div>
          <label className="text-xs text-[#5F5E5E] uppercase tracking-wide block mb-1.5">
            Artist Portfolio Link
          </label>
          <input
            type="url"
            placeholder="https://behance.net/artist"
            value={form.portfolioLink}
            onChange={(e) => set("portfolioLink", e.target.value)}
            className="w-full border border-[#D9D9D9] rounded-lg px-4 py-3 text-sm placeholder:text-[#C4C4C4] focus:outline-none focus:border-[#900B00]"
          />
        </div>
      </div>

      {/* Info banner */}
      <div className="flex items-start gap-3 bg-[#FFF5F5] border border-[#F5C6C6] rounded-lg px-4 py-3 text-sm text-[#5F5E5E]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#900B00" strokeWidth="2" className="mt-0.5 flex-shrink-0">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span>
Məlumatlar moderator tərəfindən 24-48 saat ərzində yoxlanılacaq. Təsdiq edildikdən sonra sərgi platformada dərc olunacaq.        </span>
      </div>

      {/* Alt düymələr */}
      <div className="flex justify-center gap-4">
        <button
          onClick={onCancel}
          className="px-10 py-3.5 border border-[#D9D9D9] rounded-lg text-sm font-medium text-black hover:bg-[#F5F5F5] transition-colors"
        >
          Ləğv et
        </button>
        <button
          onClick={handleSubmit}
          className="px-10 py-3.5 bg-[#900B00] text-white rounded-lg text-sm font-medium hover:bg-[#7a0900] transition-colors"
        >
          Yadda saxla
        </button>
      </div>
    </div>
  );
}

import AuthInput from "./auth-input/AuthInput";
import AuthButton from "./auth-button/AuthButton";

export default function CompleteProfile({ setStep, setIsAuthPage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Qeydiyyat tamamlandı! Platformaya yönləndirilirsiniz...");
    if (setIsAuthPage) setIsAuthPage(false);
    window.location.reload(); 
  };

  return (
    <div className="w-full flex flex-col justify-center">
      {/*  Geri Qayıtmaq Düyməsi */}
      <div className="mb-3">
        <button
          onClick={() => setIsAuthPage && setIsAuthPage(false)}
          className="group flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-black transition-colors duration-200"
        >
          <svg 
            className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Ana Səhifə
        </button>
      </div>

      {/* Head text*/}
      <h2 className="text-center text-xl md:text-2xl font-bold font-sans tracking-tight text-black">
        Profil məlumatlarını tamamla
      </h2>
      <p className="text-center text-gray-400 text-[11px] md:text-xs mb-3">
        Hesabınız üçün məlumat əlavə edin
      </p>

      {/* Profile Avatar*/}
      <div className="relative w-16 h-16 mb-3 mx-auto">
        <div className="w-full h-full bg-gray-50 rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
          <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0 1 12.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
          </svg>
        </div>
        <label className="absolute bottom-0 right-0 bg-[#800000] text-white p-1.5 rounded-full cursor-pointer shadow-md hover:bg-[#660000] transition-colors duration-200">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <input type="file" className="hidden" accept="image/*" />
        </label>
      </div>

      {/* Form  */}
      <form onSubmit={handleSubmit} className="space-y-2">
        
        {/* Sənətkar Adı */}
        <AuthInput 
          label={<span className="text-[10px] tracking-wider text-gray-400">SƏNƏTKAR ADI <span className="text-red-500">*</span></span>}
          type="text"
          placeholder="Sənətkar adınızı daxil edin"
          required
        />

        {/* Fəaliyyət Sahəsi */}
        <AuthInput 
          label={<span className="text-[10px] tracking-wider text-gray-400">FƏALİYYƏT SAHƏSİ <span className="text-red-500">*</span></span>}
          type="text"
          placeholder="Fəaliyyət sahəsi daxil edin"
          required
        />

        {/* Xüsusi Sifariş Qəbulu */}
        <AuthInput 
          label={<span className="text-[10px] tracking-wider text-gray-400">XÜSUSİ SİFARİŞ QƏBULU <span className="text-red-500">*</span></span>}
          type="text"
          placeholder="Xüsusi sifariş qəbulu"
          required
        />

        {/* Sosial Media */}
        <AuthInput 
          label={<span className="text-[10px] tracking-wider text-gray-400">SOSİAL MEDİA</span>}
          type="text"
          placeholder="Link əlavə edin"
        />

        {/* Bio*/}
        <div className="flex flex-col gap-0.5">
          <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
            BIO
          </label>
          <textarea 
            placeholder="Bio əlavə et" 
            rows="2" 
            maxLength="300" 
            className="w-full px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 text-xs resize-none bg-white text-black"
          ></textarea>
          <span className="text-right text-[9px] text-gray-400 tracking-tight">Maksimum 300 simvol</span>
        </div>

        {/* Yadda Saxla Düyməsi  */}
        <div className="pt-1">
          <AuthButton type="submit" variant="primary">
            Yadda saxla
          </AuthButton>
        </div>
      </form>

      {/* Geri Qayıt Linki */}
      <span 
        className="text-[11px] text-gray-400 hover:text-black text-center block mt-2.5 cursor-pointer underline transition-all font-medium"
        onClick={() => setStep("sanatkar-login")}
      >
        Giriş səhifəsinə qayıt
      </span>
    </div>
  );
}
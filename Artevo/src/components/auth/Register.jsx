import AuthInput from "./auth-input/AuthInput";
import AuthButton from "./auth-button/AuthButton";

export default function Register({ setStep, setIsAuthPage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("sms-verification");
  };

  return (
    <div className="w-full flex flex-col justify-center h-full">
      {/* Premium Geri Qayıtmaq Düyməsi */}
      <div className="mb-4">
        <button
          onClick={() => setIsAuthPage && setIsAuthPage(false)}
          className="group flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-black transition-colors duration-200"
        >
          <svg 
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Ana Səhifə
        </button>
      </div>

      {/* Başlıq hissəsini tam yığcam etdik */}
      <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight">Qeydiyyat</h2>
      <p className="text-gray-500 text-xs md:text-sm mb-3">Yaradıcılıq dünyasına yenidən xoş gəlmisiniz.</p>

      {/* space-y-2.5 ilə inputları bir-birinə ideal məsafədə yaxınlaşdırdıq */}
      <form onSubmit={handleSubmit} className="space-y-2.5">
        
        {/* Ad və Soyad */}
        <AuthInput 
          label="AD VƏ SOYAD"
          type="text"
          placeholder="Ad və Soyad"
          required
        />

        {/* Mobil Nömrə */}
        <AuthInput 
          label="MOBİL NÖMRƏ"
          type="tel"
          placeholder="Mobil nömrə"
          required
        />

        {/* Email Ünvanı */}
        <AuthInput 
          label="EMAIL ÜNVANI"
          type="email"
          placeholder="Email"
          required
        />

        {/* Şifrə Bölməsi */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            ŞİFRƏ
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <AuthInput 
              type="password"
              placeholder="Şifrə"
              required
            />
            <AuthInput 
              type="password"
              placeholder="Şifrəni təkrarla"
              required
            />
          </div>
        </div>

        {/* Şərtlər Checkbox */}
        <div className="flex items-center text-xs pt-0.5">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer select-none">
            <input type="checkbox" required className="w-3.5 h-3.5 rounded border-gray-300 accent-black cursor-pointer" />
            <span className="text-[11px] md:text-xs text-gray-500">İstifadəçi şərtləri və Məxfilik siyasəti ilə razıyam.</span>
          </label>
        </div>

        {/* Əsas Qeydiyyat Düyməsi */}
        <AuthButton type="submit" variant="primary">
          Qeydiyyatdan keç
        </AuthButton>

        {/* VƏ YA Bölməsi */}
        <div className="relative flex py-0.5 items-center text-xs text-gray-400 uppercase font-semibold">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="mx-2.5 text-gray-400 select-none text-[10px]">VƏ YA</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* Google Düyməsi */}
        <AuthButton 
          type="button" 
          variant="outline"
          icon={
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.65-5.17 3.65-8.78z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.08 1.16-3.13 0-5.78-2.11-6.73-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
              <path fill="#FBBC05" d="M5.27 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.36-2.31V6.54H1.21A11.96 11.96 0 0 0 0 12c0 2.01.5 3.91 1.21 5.62l4.06-3.38z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.06 3.38c.95-2.85 3.6-4.96 6.73-4.96z"/>
            </svg>
          }
        >
          Google ilə qeydiyyatdan keç
        </AuthButton>
      </form>

      {/* Giriş Linki */}
      <p className="text-center text-xs md:text-sm mt-3 text-gray-500">
        Artıq hesabınız var?{" "}
        <span className="text-[#800000] font-semibold cursor-pointer hover:underline transition-all" onClick={() => setStep("sanatkar-login")}>
          Daxil ol
        </span>
      </p>
    </div>
  );
}
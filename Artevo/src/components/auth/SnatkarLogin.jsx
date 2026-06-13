import AuthInput from "./auth-input/AuthInput";
import AuthButton from "./auth-button/AuthButton";

export default function SanatkarLogin({ setStep }) {
  return (
    <div className="w-full">
      

      {/* Tab / Başlıq Hissəsi */}
      <div className="mb-10 font-inter text-black">
        <h2 className="mb-[15px] text-2xl md:text-3xl font-medium ">
          Sənətkar / Satıcı girişi
        </h2>
        <p className="text-black font-normal text-sm md:text-base ">
          Yaradıcılıq dünyasına yenidən xoş gəlmisiniz.
        </p>
      </div>
      {/* Form strukturu */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">

        {/* Email / Telefon İnputu */}
        <AuthInput
          label="EMAIL VƏ YA TELEFON"
          type="text"
          placeholder="Email və ya Telefon"
        />

        {/* Şifrə İnputu */}
        <AuthInput
          label="ŞİFRƏ"
          type="password"
          placeholder="Şifrə"
        />

        {/* Məni Xatırla & Şifrəni Unutdum */}
        <div className="flex items-center justify-between text-xs md:text-sm pt-1">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 accent-black cursor-pointer"
            />
            Məni xatırla
          </label>
          <span
            className="text-[#800000] font-medium hover:underline cursor-pointer transition-all"
            onClick={() => setStep("forgot-password")}
          >
            Şifrəni unutdum?
          </span>
        </div>

        <AuthButton type="submit" variant="primary">
          Daxil ol
        </AuthButton>

        {/* VƏ YA Bölməsi */}
        <div className="relative flex py-2 items-center text-xs text-gray-400 uppercase font-semibold">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-400 select-none">VƏ YA</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Peşəkar Düymə - Outline (Google) */}
        <AuthButton
          type="button"
          variant="outline"
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.65-5.17 3.65-8.78z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.08 1.16-3.13 0-5.78-2.11-6.73-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z" />
              <path fill="#FBBC05" d="M5.27 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.36-2.31V6.54H1.21A11.96 11.96 0 0 0 0 12c0 2.01.5 3.91 1.21 5.62l4.06-3.38z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.06 3.38c.95-2.85 3.6-4.96 6.73-4.96z" />
            </svg>
          }
        >
          Google ilə daxil ol
        </AuthButton>
      </form>

      {/* Qeydiyyat Linki */}
      <p className="text-center text-xs md:text-sm mt-8 text-gray-500">
        Hesabınız yoxdur?{" "}
        <span
          className="text-[#800000] font-semibold cursor-pointer hover:underline transition-all"
          onClick={() => setStep("register")}
        >
          Qeydiyyatdan keç
        </span>
      </p>
    </div>
  );
}
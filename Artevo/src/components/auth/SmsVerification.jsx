export default function SmsVerification({ setStep, setIsAuthPage }) {
  const handleVerify = (e) => {
    e.preventDefault();
    setStep("complete-profile"); // SMS uğurlu olanda profil tamamlamağa keçir
  };

  return (
    <div className="w-full text-center">
      {/* Premium Geri Qayıtmaq Düyməsi */}
      <div className="mb-6 text-left">
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

      <h2 className="text-2xl md:text-3xl font-bold mb-2 font-sans text-left md:text-center">SMS Təsdiq</h2>
      <p className="text-gray-500 text-xs md:text-sm mb-8 text-left md:text-center max-w-[340px] mx-auto">
        Lütfən, <strong>+994 50 *** ** 44</strong> nömrəsinə göndərilmiş 6 rəqəmli təsdiq kodunu daxil edin.
      </p>

      <form onSubmit={handleVerify} className="space-y-6">
        {/* 6 Ədəd Input qutusu */}
        <div className="flex justify-between gap-2 max-w-[360px] mx-auto">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 md:w-14 md:h-14 text-center text-lg font-bold border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              required
            />
          ))}
        </div>

        <button type="submit" className="w-full bg-[#800000] hover:bg-[#660000] text-white py-3.5 rounded-lg font-medium transition-colors cursor-pointer text-sm md:text-base">
          Təsdiqlə
        </button>
      </form>

      <p className="text-xs md:text-sm text-gray-500 mt-5">
        Kodu almadınız? <span className="text-[#800000] cursor-not-allowed">Yenidən göndər (01:54)</span>
      </p>

      <button 
        onClick={() => setStep("register")}
        className="text-xs text-gray-400 hover:text-black transition-colors mt-8 block mx-auto underline"
      >
        Geri qayıt
      </button>
    </div>
  );
}
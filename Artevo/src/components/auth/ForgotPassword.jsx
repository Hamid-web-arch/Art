export default function ForgotPassword({ setStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("reset-password"); // Link göndərildi, yeni şifrə təyin etməyə keçirik
  };

  return (
    <div className="w-full">
     

      <h2 className="text-2xl md:text-3xl font-bold mb-2 font-sans text-center">Şifrəni unutdum</h2>
      <p className="text-black text-xs md:text-sm mb-8 text-center max-w-[368px] mx-auto">
        Şifrənizi sıfırlamaq üçün qeydiyyatdan keçdiyiniz e-poçt ünvanınızı və ya telefon nömrənizi daxil edin.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 tracking-wider uppercase">E-POÇT VƏ YA TELEFON NÖMRƏSİ</label>
          <input type="text" placeholder="nümunə@artevo.az" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black placeholder:text-gray-300 text-sm" />
        </div>

        <button type="submit" className="w-full bg-[#800000] hover:bg-[#660000] text-white py-3.5 rounded-lg font-medium transition-colors cursor-pointer text-sm md:text-base">
          Təsdiqlə
        </button>
      </form>

      <span 
        className="text-xs text-gray-500 hover:text-black transition-colors text-center block mt-5 cursor-pointer underline"
        onClick={() => setStep("sanatkar-login")}
      >
        Giriş səhifəsinə qayıt
      </span>

      {/* Info Box */}
      <div className="mt-8 p-4 bg-[#FFF0F0] rounded-xl flex items-start gap-3 border border-[#FFE000]">
        <span className="text-gray-700 font-bold">ⓘ</span>
        <div className="text-xs text-gray-600 space-y-1">
          <p className="font-semibold text-gray-800">Kömək lazımdır?</p>
          <p>Əgər girişlə bağlı problem yaşayırsınızsa, <span className="text-[#800000] font-medium hover:underline cursor-pointer">Dəstək Mərkəzi</span> ilə əlaqə saxlayın.</p>
        </div>
      </div>
    </div>
  );
}
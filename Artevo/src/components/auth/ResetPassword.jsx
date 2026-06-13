export default function ResetPassword({ setStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Şifrəniz uğurla yeniləndi!");
    setStep("sanatkar-login"); // Yenilənəndən sonra girişə qaytarır
  };

  return (
    <div className="w-full">
   

      <h2 className="text-2xl md:text-3xl font-bold mb-2 font-sans text-center">Yeni şifrə</h2>
      <p className="text-gray-500 text-xs md:text-sm mb-8 text-center">Hesabınız üçün təhlükəsiz və yadda qalan yeni bir şifrə yazın.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 tracking-wider">YENİ ŞİFRƏ</label>
          <input type="password" placeholder="Şifrə" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-400 tracking-wider">ŞIFRƏNİ TƏKRARLA</label>
          <input type="password" placeholder="Şifrə" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm" />
        </div>

        {/* Password Strength Indicator */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-medium text-gray-700">
            <span>Şifrənin mürəkkəbliyi: Orta</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 h-1 w-full bg-gray-100 rounded">
            <div className="bg-[#800000] rounded"></div>
            <div className="bg-[#800000] rounded"></div>
            <div className="bg-gray-200 rounded"></div>
          </div>
        </div>

        <button type="submit" className="w-full bg-[#800000] hover:bg-[#660000] text-white py-3.5 rounded-lg font-medium transition-colors cursor-pointer text-sm md:text-base">
          Şifrəni yenilə
        </button>
      </form>

      <span 
        className="text-xs text-gray-500 hover:text-black transition-colors text-center block mt-6 cursor-pointer underline"
        onClick={() => setStep("sanatkar-login")}
      >
        Giriş səhifəsinə qayıt
      </span>
    </div>
  );
}
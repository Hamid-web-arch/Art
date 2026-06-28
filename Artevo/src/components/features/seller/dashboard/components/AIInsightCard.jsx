export default function AIInsightCard() {
  return (
<div className="bg-[#900B00] p-6 rounded-2xl w-full flex flex-col justify-between">      {/* Başlıq */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white text-lg">✦</span>
          <h3 className="font-bold text-white text-lg">AI Tövsiyələri</h3>
        </div>
        {/* Mətn */}
        <p className="text-white/80 text-sm leading-relaxed">
          Sizin "Müasir Minimalizm" sərgisi cümə axşamı saat 18:00-da ən yüksək aktivliyə malikdir. 
          Bu saatlarda yeni əsərləri təqdim etmək baxış sayını 15% artıra bilər.
        </p>
      </div>

      {/* Düymə */}
      <button className="w-full mt-6 bg-white text-[#900B00] font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors">
        Detallara bax
      </button>
    </div>
  );
}
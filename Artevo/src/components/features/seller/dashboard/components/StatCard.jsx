export default function StatCard({ title, value, percentage, subText, color, icon }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        {/* İkon və Başlıq */}
        <div className="flex items-center gap-2">
           <div className="text-gray-500">{icon}</div>
           <p className="text-xs font-bold text-gray-500 tracking-wider">{title}</p>
        </div>
        {/* Faiz/Etiket */}
        {percentage && (
          <span className="text-[10px] font-semibold bg-gray-50 px-2 py-1 rounded-md text-gray-600">
            {percentage}
          </span>
        )}
      </div>

      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      
      {/* Alt mətn və ya Progress Bar */}
      {title === "AKTİV ELANLAR" ? (
        <div className="mt-3">
          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
             <span></span>
             <span>Limit: 8</span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full">
            <div className="bg-[#900B00] h-1.5 rounded-full" style={{ width: '62.5%' }}></div>
          </div>
        </div>
      ) : (
        <p className="text-[11px] text-gray-400 mt-1">{subText}</p>
      )}
    </div>
  );
}
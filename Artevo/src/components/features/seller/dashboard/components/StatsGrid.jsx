import { statsData } from '../dashboardData';
import { LuTrendingUp, LuWallet, LuShoppingCart, LuLayoutDashboard } from "react-icons/lu";

function StatCard({ title, value, percentage, subText, iconName, colorClass, bgClass, percentageColor }) {
  const getIcon = (name) => {
    switch(name) {
      case "TrendingUp": return <LuTrendingUp size={16} />;
      case "Wallet": return <LuWallet size={16} />;
      case "ShoppingCart": return <LuShoppingCart size={16} />;
      case "LayoutDashboard": return <LuLayoutDashboard size={16} />;
      default: return <LuLayoutDashboard size={16} />;
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between h-[130px]">
      <div className="flex justify-between items-center">
        <div className={`${colorClass} ${bgClass} p-2 rounded-lg`}>
          {getIcon(iconName)}
        </div>
        {percentage && (
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${percentageColor}`}>
            {percentage}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <p className="font-bold text-[11px] text-gray-400 tracking-wider uppercase">{title}</p>
        <h3 className="text-xl font-bold text-gray-900 mt-0.5">{value}</h3>
      </div>

      {title === "AKTİV ELANLAR" ? (
        <div>
          <div className="flex justify-end text-[10px] text-gray-400 mb-1">
            <span>Limit: 8</span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full">
            <div className="bg-[#900B00] h-1.5 rounded-full" style={{ width: '62.5%' }}></div>
          </div>
        </div>
      ) : (
        <p className="text-[11px] text-gray-400">{subText}</p>
      )}
    </div>
  );
}

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((item, index) => (
        <StatCard key={index} {...item} />
      ))}
    </div>
  );
}
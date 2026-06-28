// src/features/seller/dashboard/DashboardPage.jsx
import SellerLayout from '../layout/SellerLayout';
import StatsGrid from './components/StatsGrid';
import AnalyticsChart from './components/AnalyticsChart';
import AIInsightCard from './components/AIInsightCard';
import ArtworkPerformance from './components/ArtworkPerformance';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();
  return (
    <SellerLayout>
      <div className="flex flex-col gap-6">
        {/* Başlıq və Məhsul Yarat düyməsi */}
        <div className="flex justify-between items-center">
          <div className="font-inter">
            <h1 className="text-[40px] font-medium text-black">Xoş gəlmişsiniz, Ceyhun</h1>
            <p className="text-[#5F5E5E] font-normal">ArtEvo Studio-nun bugünkü performans özeti buradadır.</p>
          </div>
          <button 
            onClick={() => navigate('/seller/create-product')}
            className="bg-[#900B00] text-white px-8 py-4 rounded-lg font-medium whitespace-nowrap">
            Məhsul yarat
          </button>
        </div>

        {/* Statistikalar (StatsGrid) */}
        <StatsGrid />

        {/* Qrafik və AI Kartı */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2">
            <AnalyticsChart />
          </div>
          <div className="lg:col-span-1 flex">
  <AIInsightCard />
</div>
        </div>

        {/* Cədvəl */}
        <ArtworkPerformance />
      </div>
    </SellerLayout>
  );
}
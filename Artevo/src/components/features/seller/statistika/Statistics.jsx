// src/features/seller/dashboard/DashboardPage.jsx
import SellerLayout from '../layout/SellerLayout';
import AnalyticsChart from '../dashboard/components/AnalyticsChart'; 
import AIInsightCard from '../dashboard/components/AIInsightCard'; 
import ArtworkPerformance from '../dashboard/components/ArtworkPerformance'; 

export default function Statistics() {
  
  return (
    <SellerLayout>
      <div className="flex flex-col gap-6">
        {/* Başlıq */}
        <div >
          <p className="text-2xl sm:text-3xl lg:text-[24px] font-medium text-black">
           Sizin platformadakı fəaliyyətiniz və kolleksiyalarınızın populyarlığı haqqında ətraflı məlumat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2">
            <AnalyticsChart />
          </div>
          <div className="lg:col-span-1 flex">
            <AIInsightCard />
          </div>
        </div>

        <ArtworkPerformance />
      </div>
    </SellerLayout>
  );
}
// src/features/seller/sergilerim/SergilerimPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SellerLayout from "../layout/SellerLayout";
import SergiTabs from "./components/SergiTabs";
import FeaturedSergiCard from "./components/FeaturedSergiCard";
import OverviewCard from "./components/OverviewCard";
import PremiumBanner from "./components/PremiumBanner";
import SergilerTable from "./components/SergilerTable";

import {
  sergiTabs,
  featuredSergi,
  umumiBaxis,
  digerSergiler,
  sergiPagination,
} from "./sergilerimData";

export default function SergilerimPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("hamisi");

  return (
    <SellerLayout>
      <div className="flex flex-col gap-6">
        {/* Başlıq və Sərgi Yarat düyməsi */}
        <div className="flex justify-between items-start gap-4 font-inter">
          <p className="text-[#5F5E5E]">
            Sizin kuratorluq etdiyiniz bütün aktiv və arxivləşdirilmiş sərgilər.
          </p>
          <button
            onClick={() => navigate("/seller/create-sergi")}
            className="bg-[#900B00] text-white px-8 py-4 rounded-lg font-medium whitespace-nowrap"
          >
            Sərgi yarat
          </button>
        </div>

        {/* Filter tab-ları */}
        <SergiTabs
          tabs={sergiTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {/* Featured kart + yan panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <FeaturedSergiCard sergi={featuredSergi} />
          </div>
          <div className="lg:col-span-1 flex flex-col gap-4">
            <OverviewCard data={umumiBaxis} />
            <PremiumBanner onYukle={() => console.log("Premium hesabat yüklənir...")} />
          </div>
        </div>

        {/* Digər sərgilər cədvəli */}
        <SergilerTable sergiler={digerSergiler} pagination={sergiPagination} />
      </div>
    </SellerLayout>
  );
}

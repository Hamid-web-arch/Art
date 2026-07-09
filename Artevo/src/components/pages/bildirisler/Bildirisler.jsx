import { useState } from "react";

// Məlumatları bir yerdə saxlayaq
const notificationsData = [
  { id: 1, type: "emeliyyat", day: "Bugün", title: "Sifarişiniz gümüş boyunbağı uğurla qəbul edildi", desc: "Sifariş nömrəsi: #AE-20394", time: "12:25" },
  { id: 2, type: "emeliyyat", day: "Bugün", title: "Sifarişin statusu dəyişdi: Gözləmədə", desc: "Hazırlanır.", time: "11:45" },
  { id: 3, type: "kampaniya", day: "Bugün", title: "Yeni yay endirimləri başladı!", desc: "50%-dək endirim.", time: "09:00" },
  { id: 4, type: "emeliyyat", day: "Dünən", title: "Sevimli satıcınız yeni kolleksiya əlavə edib", desc: '"Modern Echoes" kolleksiyası.', time: "12:25" },
];

export default function Bildirisler() {
  const [activeTab, setActiveTab] = useState("emeliyyat");

  // Seçilmiş taba görə filtrləmə
  const filteredData = notificationsData.filter(item => item.type === activeTab);
  
  // Günlərə görə qruplaşdırma
  const groupedData = filteredData.reduce((acc, curr) => {
    (acc[curr.day] = acc[curr.day] || []).push(curr);
    return acc;
  }, {});

  return (
    <section className="container mx-auto px-4 py-4 lg:py-6">
      <h1 className="font-inter font-medium text-2xl md:text-3xl mb-6">Bildirişlər</h1>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8">
        <p className="font-inter font-medium text-lg md:text-xl lg:text-2xl text-black">
          Sizin üçün ən son fəaliyyət yeniləmələri.
        </p>

        <div className="flex bg-[#F3F5F7] p-1 rounded-xl w-full sm:w-fit">
          <button 
            onClick={() => setActiveTab("emeliyyat")}
            className={`flex-1 sm:flex-none px-4 md:px-8 py-3 md:py-5 rounded-lg transition ${activeTab === "emeliyyat" ? "bg-red-800 text-white" : "text-[#818181]"}`}
          >
            Əməliyyatlar
          </button>
          <button 
            onClick={() => setActiveTab("kampaniya")}
            className={`flex-1 sm:flex-none px-4 md:px-8 py-3 md:py-5 rounded-lg transition ${activeTab === "kampaniya" ? "bg-red-800 text-white" : "text-[#818181]"}`}
          >
            Kampaniyalar
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:gap-10">
        {Object.keys(groupedData).map((day) => (
          <div key={day}>
            <SectionHeader title={day} />
            <div className="space-y-4">
              {groupedData[day].map((item) => (
                <NotificationItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 mb-6">
      <h2 className="font-inter font-medium text-sm md:text-base text-black whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-[#9C9C9C]" />
    </div>
  );
}

function NotificationItem({ title, desc, time }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 md:px-6 py-4 md:py-5 border border-[#9C9C9C] rounded-xl hover:bg-gray-50 transition">
      <div className="flex items-start md:items-center gap-4 md:gap-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FFF0EF] flex items-center justify-center shrink-0">
          {/* Buraya ikon əlavə edə bilərsiniz */}
        </div>
        <div>
          <h3 className="font-inter font-medium text-base sm:text-lg text-black">{title}</h3>
          <p className="font-inter text-sm md:text-base text-[#9C9C9C] mt-1">{desc}</p>
        </div>
      </div>
      <span className="self-end md:self-auto text-sm text-[#9C9C9C]">{time}</span>
    </div>
  );
}
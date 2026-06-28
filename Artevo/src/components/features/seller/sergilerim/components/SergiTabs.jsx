// src/features/seller/sergilerim/components/SergiTabs.jsx

export default function SergiTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 font-inter">
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              isActive
                ? "bg-[#900B00] text-white"
                : "bg-[#FBEAEA] text-[#900B00] hover:bg-[#f5d6d6]"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        );
      })}
    </div>
  );
}

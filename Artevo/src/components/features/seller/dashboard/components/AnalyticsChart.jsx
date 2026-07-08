import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { monthlyAnalyticsData , weeklyAnalyticsData } from '../dashboardData';

export default function AnalyticsChart() {
  const [activeTab, setActiveTab] = useState('Aylıq');
  const chartData = activeTab === 'Aylıq' ? monthlyAnalyticsData : weeklyAnalyticsData;

  return (
    <div className="bg-[#FFF5F5] p-4 sm:p-6 rounded-2xl border border-red-100 h-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <div>
          <h3 className="font-bold text-lg">Baxış Analytics</h3>
          <p className="text-sm text-gray-400">Son 6 ayın trendi</p>
        </div>
        <div className="flex bg-gray-100 rounded-lg p-1 gap-1 self-start sm:self-auto">
          {['Aylıq', 'Həftəlik'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#900B00] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={260} className="sm:!h-[75%]">
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#900B00" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#900B00" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#E5C0C0" strokeDasharray="4 4" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
          />
          <YAxis hide={true} />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />
          <Area
            type="monotone"
            dataKey="views"
            stroke="#900B00"
            strokeWidth={2.5}
            fillOpacity={1}
            fill="url(#colorViews)"
            dot={{ r: 4, fill: '#900B00', strokeWidth: 0 }}
            activeDot={{ r: 6, fill: '#900B00' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
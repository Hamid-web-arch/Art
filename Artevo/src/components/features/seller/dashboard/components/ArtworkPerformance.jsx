import { artworkData } from '../dashboardData';

function ActivityBars({ level }) {
  return (
    <div className="flex items-end gap-0.5">
      {[1, 2, 3, 4, 5].map((bar) => (
        <div
          key={bar}
          className={`w-1.5 rounded-sm ${bar <= level ? 'bg-[#900B00]' : 'bg-gray-200'}`}
          style={{ height: `${8 + bar * 4}px` }}
        />
      ))}
    </div>
  );
}

export default function ArtworkPerformance() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg">Son Elanların Performansı</h3>
        <button className="text-[#900B00] text-sm font-medium hover:underline">Hamısına bax</button>
      </div>

      <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
        <table className="w-full min-w-[560px]">
          <thead>
            <tr className="text-xs text-gray-400 font-medium uppercase tracking-wider border-b border-gray-100">
              <th className="text-left pb-3">Əsər</th>
              <th className="text-center pb-3">Status</th>
              <th className="text-center pb-3">Baxış</th>
              <th className="text-center pb-3">Aktivlik</th>
              <th className="text-right pb-3">Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {artworkData.map((artwork, index) => (
              <tr key={artwork.id} className={index !== artworkData.length - 1 ? 'border-b border-gray-100' : ''}>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img src={artwork.image} alt={artwork.name} className="w-10 h-10 rounded-lg flex-shrink-0 object-cover" />
                    <div>
                      <p className="font-medium text-sm text-gray-900">{artwork.name}</p>
                      <p className="text-xs text-gray-400">{artwork.category}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-center">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    artwork.status === 'AKTİV' ? 'text-green-600 bg-green-50' : 'text-yellow-600 bg-yellow-50'
                  }`}>
                    {artwork.status}
                  </span>
                </td>
                <td className="py-4 text-center font-semibold text-sm text-gray-900">{artwork.views}</td>
                <td className="py-4">
                  <div className="flex justify-center">
                    <ActivityBars level={artwork.activityLevel} />
                  </div>
                </td>
                <td className="py-4 text-right">
                  <button className="text-gray-400 hover:text-gray-600 text-lg">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
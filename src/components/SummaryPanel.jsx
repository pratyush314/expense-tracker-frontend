const SummaryPanel = ({ total, breakdown }) => {
  const totalCategories = Object.keys(breakdown).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Total Spending Card */}
      <div className="bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 p-8 rounded-2xl shadow-2xl border border-emerald-400/30 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <h3 className="text-emerald-100 text-lg font-semibold mb-3">
            Total Spending
          </h3>
          <p className="text-5xl font-bold text-white mb-2">
            ₹{total.toFixed(2)}
          </p>
          <p className="text-emerald-100 text-sm">
            {totalCategories} categories tracked
          </p>
        </div>
      </div>

      {/* Category Breakdown Card */}
      <div className="bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl border border-indigo-400/30 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mt-20"></div>
        <div className="relative z-10">
          <h3 className="text-indigo-100 text-lg font-semibold mb-4">
            Spending by Category
          </h3>
          <div className="space-y-3">
            {Object.entries(breakdown).map(([cat, amt]) => {
              const percentage = (amt / total) * 100;
              return (
                <div key={cat}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-indigo-100 font-medium text-sm">
                      {cat}
                    </span>
                    <span className="text-white font-bold">
                      ₹{amt.toFixed(2)}
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-linear-to-r from-yellow-300 to-orange-300 h-full rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;

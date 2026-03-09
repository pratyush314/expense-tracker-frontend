const ExpenseList = ({ expenses, onDelete }) => {
  const getCategoryColor = (category) => {
    const colors = {
      Food: "from-orange-500 to-red-500",
      Transport: "from-blue-500 to-cyan-500",
      Entertainment: "from-purple-500 to-pink-500",
      Utilities: "from-green-500 to-emerald-500",
      Shopping: "from-pink-500 to-rose-500",
      Health: "from-red-500 to-pink-500",
      Other: "from-gray-500 to-slate-500",
    };
    return colors[category] || "from-slate-500 to-gray-500";
  };

  return (
    <div className="space-y-3 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 mr-3"></span>
        Recent Expenses
      </h2>
      {expenses.length === 0 ? (
        <p className="text-slate-400 text-center py-8">No expenses added yet</p>
      ) : (
        expenses.map((exp, idx) => (
          <div
            key={idx}
            className="group bg-linear-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 p-5 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-3 h-3 rounded-full bg-linear-to-r ${getCategoryColor(exp.category)}`}
                  ></div>
                  <h3 className="font-bold text-white text-lg">{exp.name}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs font-semibold">
                    {exp.category}
                  </span>
                </div>
              </div>
              <div className="text-right flex items-center gap-4">
                <div>
                  <p className="text-2xl font-bold background-clip-text ">
                    ₹{exp.amount.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => onDelete(idx)}
                  className="bg-linear-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95 font-semibold text-sm shadow-lg"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseList;

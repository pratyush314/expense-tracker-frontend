import { useState } from "react";
import { CATEGORIES } from "../constants";

const ExpenseForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: CATEGORIES[0],
  });
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, amount, category } = formData;
    if (!name) {
      setFormErrors((prev) => ({
        ...prev,
        name: "Expense name is required",
      }));
      return;
    }
    if (!amount) {
      setFormErrors((prev) => ({
        ...prev,
        amount: "Expense amount is required",
      }));
      return;
    }
    if (amount && parseFloat(amount) <= 0) {
      setFormErrors((prev) => ({
        ...prev,
        amount: "Amount must be greater than zero",
      }));
      return;
    }
    onAdd({ name, amount: parseFloat(amount), category });
    setFormData({ name: "", amount: "", category: CATEGORIES[0] });
    setFormErrors({});
  };

  const handleChange = (e) => {
    setFormErrors({});
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-linear-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl mb-8 border border-purple-500/20 backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-400 to-pink-400 mr-3"></span>
        Add New Expense
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-purple-200 text-sm font-semibold mb-2">
            Expense Name
          </label>
          <input
            type="text"
            placeholder="e.g., Coffee, Groceries, Gas..."
            value={formData.name}
            name="name"
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
          />
          {formErrors.name && (
            <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-purple-200 text-sm font-semibold mb-2">
            Amount (₹)
          </label>
          <input
            type="number"
            placeholder="0.00"
            value={formData.amount}
            name="amount"
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
            step="0.01"
          />
          {formErrors.amount && (
            <p className="text-red-400 text-sm mt-1">{formErrors.amount}</p>
          )}
        </div>
        <div>
          <label className="block text-purple-200 text-sm font-semibold mb-2">
            Category
          </label>
          <select
            value={formData.category}
            onChange={handleChange}
            name="category"
            className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 text-white rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat} className="bg-slate-800">
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-6 bg-linear-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-2xl shadow-lg active:scale-95 cursor-pointer"
      >
        ✨ Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;

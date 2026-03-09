/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const CurrencyConverter = ({
  total,
  rates,
  loading,
  error,
  onCurrencyChange,
}) => {
  const [target, setTarget] = useState("USD");

  useEffect(() => {
    if (rates && rates.rates) {
      const converted = total * rates.rates[target];

      onCurrencyChange(converted);
    }
  }, [rates, target, total]);

  if (loading) {
    return (
      <div className="bg-linear-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-purple-500/20 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <p className="text-purple-200 font-semibold">
            Loading exchange rates...
          </p>
          <div
            className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-linear-to-r from-red-500/20 to-pink-500/20 p-8 rounded-2xl border border-red-400/30 text-center">
        <p className="text-red-200 font-semibold">⚠️ {error}</p>
        <p className="text-red-100 text-sm mt-2">Showing base total in INR</p>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-slate-800 via-slate-700 to-slate-800 p-8 rounded-2xl shadow-2xl border border-purple-500/20 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-yellow-400 to-orange-400 mr-3"></span>
        Currency Converter
      </h2>
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1">
          <label className="block text-purple-200 text-sm font-semibold mb-2">
            Convert to:
          </label>
          <select
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 text-white rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-semibold"
          >
            <option value="USD" className="bg-slate-800">
              🇺🇸 USD (US Dollar)
            </option>
            <option value="EUR" className="bg-slate-800">
              🇪🇺 EUR (Euro)
            </option>
            <option value="GBP" className="bg-slate-800">
              🇬🇧 GBP (British Pound)
            </option>
            <option value="JPY" className="bg-slate-800">
              🇯🇵 JPY (Japanese Yen)
            </option>
            <option value="AUD" className="bg-slate-800">
              🇦🇺 AUD (Australian Dollar)
            </option>
          </select>
        </div>
        <div className="flex-1">
          <p className="text-purple-200 text-sm font-semibold mb-2">
            Total in {target}:
          </p>
          <div className="text-4xl font-bold  background-clip-text ">
            {rates?.rates?.[target]
              ? (total * rates.rates[target]).toFixed(2)
              : "N/A"}{" "}
            <span className="text-2xl">{target}</span>
          </div>
          <p className="text-slate-400 text-xs mt-2">₹{total.toFixed(2)} INR</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;

import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CurrencyConverter from "./components/CurrencyConverter";

const Frankfurter_BASE = "https://api.frankfurter.app";

const App = () => {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : [],
  );
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [_, setConvertedTotal] = useState(0);

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const breakdown = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  useEffect(() => {
    fetch(`${Frankfurter_BASE}/latest?from=INR`)
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then(setRates)
      .catch((err) => {
        setError(err.message);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const addExpense = (exp) => setExpenses([...expenses, exp]);
  const deleteExpense = (idx) =>
    setExpenses(expenses.filter((_, i) => i !== idx));

  useEffect(() => {
    if (expenses) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
            <h1 className="text-5xl font-bold  background-clip-text">
              Expense Tracker
            </h1>
            <div className="w-2 h-2 rounded-full bg-purple-400 ml-3"></div>
          </div>
          <p className="text-purple-200 text-lg">
            Track your spending with style
          </p>
        </div>
        <ExpenseForm onAdd={addExpense} />
        {expenses.length > 0 && (
          <>
            <SummaryPanel total={total} breakdown={breakdown} />
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
            <CurrencyConverter
              total={total}
              rates={rates}
              loading={loading}
              error={error}
              onCurrencyChange={setConvertedTotal}
            />
          </>
        )}
        {expenses.length === 0 && (
          <div className="text-center mt-16 text-purple-300">
            <p className="text-xl">
              No expenses yet. Start adding to see your summary!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

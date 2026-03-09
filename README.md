# Expense Tracker

A simple, responsive React-based personal expense tracker built for the Marketing Mojito Web Developer Intern assignment. Features real-time expense logging, category breakdowns, running totals, and live currency conversion using the free Frankfurter API.[file:1]

[![Live Demo](https://img.shields.io/badge/Live-Vercel-brightgreen)](https://expense-tracker-frontend-opal-eight.vercel.app)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-blueviolet)](https://tailwindcss.com)

## ✨ Features

- **Add & Delete Expenses**: Log expenses with name, amount, and category (Food, Travel, Marketing, Utilities, Other)
- **Real-time Totals**: Running total updates automatically as expenses are added/removed
- **Category Breakdown**: Visual spending summary by category
- **Live Currency Conversion**: Real-time INR → USD/EUR/GBP/INR conversion via Frankfurter API
- **Fully Responsive**: Works on desktop (1600x900) and mobile (414x749)
- **Error Handling**: Graceful API failure states and loading indicators
- **Clean Components**: 5+ reusable components with React hooks only (no Redux/Context)

## 🛠 Tech Stack

| Technology      | Purpose          |
| --------------- | ---------------- |
| React 19        | Core framework   |
| Vite            | Build tool       |
| Tailwind CSS    | Styling          |
| Frankfurter API | Currency rates   |
| React Hooks     | State management |

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/pratyush314/expense-tracker-frontend.git
cd expense-tracker

# Install dependencies
npm install

# Start development server
npm run dev
```

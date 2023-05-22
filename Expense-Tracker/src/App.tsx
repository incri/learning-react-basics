import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFiler from "./components/ExpenseFiler";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, categories: "Utilities" },
    { id: 2, description: "bbb", amount: 10, categories: "Utilities" },
    { id: 3, description: "ccc", amount: 10, categories: "Utilities" },
    { id: 4, description: "ddd", amount: 10, categories: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.categories === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFiler
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react"

import "./App.css"
import Money from "./components/Money"
import Balance from "./components/Balance"
import Savings from "./components/Savings"
import { MoneyItem } from "./types/Money"

function App() {
  const [incomes, setIncomes] = useState<MoneyItem[]>([]);
  const [expenses, setExpenses] = useState<MoneyItem[]>([]);
  const [savings, setSavings] = useState(0)
  const [balance, setBalance] = useState(0)
  const totalIncome = incomes.reduce((prev, current) => prev + current.amount, 0)
  const totalExpense = expenses.reduce((prev, current) => prev + current.amount, 0)
  useEffect(()=>{
    setBalance(totalIncome - totalExpense - savings)
  },[expenses, incomes, savings])
  return (
    <div className="App">
      <Money option="Income" list={incomes} setList={setIncomes} />
      <Money option="Expense" list={expenses} setList={setExpenses}/>
      <Savings savings={savings} />
      <Balance balance={balance} setSavings={setSavings}/>
    </div>
  )
}

export default App

import React, { useEffect, useState } from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, purple } from '@mui/material/colors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';


import "./Styles/App.css"
import Money from "./components/Money"
import Balance from "./components/Balance"
import Savings from "./components/Savings"
import { MoneyItem } from "./types/Money"
import { Box } from "@mui/system";

function App() {
  const [incomes, setIncomes] = useState<MoneyItem[]>([]);
  const [expenses, setExpenses] = useState<MoneyItem[]>([]);
  const [savings, setSavings] = useState(0)
  const [balance, setBalance] = useState(0)
  const [mode, setMode] = useState<"light"|"dark">("light") 
  const totalIncome = incomes.reduce((prev, current) => prev + current.amount, 0)
  const totalExpense = expenses.reduce((prev, current) => prev + current.amount, 0)
  useEffect(()=>{
    setBalance(totalIncome - totalExpense - savings)
  },[expenses, incomes, savings])

  const theme = createTheme({
    palette: { 
      mode,
      ...(mode === "light" ? {
        primary: {
          main: "#E8DFCA"
        },
        secondary: {
          main: "#FAF7F0"
        },
        text:{
          primary: "#7D6E83",
          secondary: "#395144 "
        },
        background: {
          default: "#F5EFE6 "
        }
      } : {
        primary:  {
          main: "#284E78"
        },
        secondary: {
          main: "#2C3639"
        },
        text:{
          primary: "#DCD7C9",
          secondary: "#D0C9C0"
        },
        background: {
          default: "#3E215D "
        }
      })
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <IconButton onClick={()=> setMode (mode === "dark" ? "light" : "dark")}>
        {mode === "light" ? <Brightness4Icon/> : <Brightness7Icon/>}
      </IconButton>
    <Box className="App" sx={{bgcolor:'background.default'}}>
      <Money option="Income" list={incomes} setList={setIncomes} />
      <Money option="Expense" list={expenses} setList={setExpenses}/>
      <Savings savings={savings} />
      <Balance balance={balance} setSavings={setSavings}/>
    </Box>
    </ThemeProvider>
  )
}

export default App

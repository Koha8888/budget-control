import React, { createContext, useEffect, useState } from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, purple } from '@mui/material/colors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ToggleButton from './components/ToggleButton';


import "./Styles/App.css"
import Money from "./components/Money"
import Balance from "./components/Balance"
import Savings from "./components/Savings"
import { MoneyItem } from "./types/Money"
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

export const ThemeContext = createContext ({toggleMode : () => {}}) 

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
  const manageTheme = {
    toggleMode: () => {
      setMode((prevMode)=> (prevMode === "light" ? "dark" : "light"))
    }
  }
  return (
    <ThemeContext.Provider value={manageTheme}>
      <ThemeProvider theme={theme}>
      <Box className="App" sx={{bgcolor:'background.default'}} padding={5}>
        <Grid container spacing={2} >
          <Grid item md={4}><Money option="Income" list={incomes} setList={setIncomes}/></Grid>
          <Grid item md={4}><Money option="Expense" list={expenses} setList={setExpenses}/></Grid>
          <Grid item md={4}><Savings savings={savings} /></Grid>
        </Grid>
        <Balance balance={balance} setSavings={setSavings}/>
        <ToggleButton/>
      </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App

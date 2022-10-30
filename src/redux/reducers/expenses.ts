import { MoneyItem } from './../../types/Money';
import { createSlice } from "@reduxjs/toolkit";

const initialState : MoneyItem [] = [{
    title: "first expense item",
    amount: 23,
    date: "first expense date "
} ]

const expensesSlicer = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: () => {
            console.log("addExpense method is invoked")
        },
        deleteExpense: () => {
            console.log("deleteExpense method is invoked")
        }
    }
})

const expenseReducer = expensesSlicer.reducer
export default expenseReducer
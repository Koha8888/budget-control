import { MoneyItem } from './../../types/Money';
import { createSlice } from "@reduxjs/toolkit";

const initialState : MoneyItem [] = [{
    title: "first income item",
    amount: 23,
    date: "first income date "
} ]

const incomesSlicer = createSlice({
    name: "incomes",
    initialState,
    reducers: {
        addIncome: () => {
            console.log("addIncome method is invoked")
        },
        deleteIncome: () => {
            console.log("deleteIncome method is invoked")
        }
    }
})

const incomeReducer = incomesSlicer.reducer
export default incomeReducer
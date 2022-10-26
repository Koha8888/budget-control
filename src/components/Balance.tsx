import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { BalanceProps } from '../types/Balance';
import { SavingsProps } from '../types/Savings';
import Savings from './Savings'; 
import { Box } from '@mui/system';

const Balance = ({balance, setSavings} :BalanceProps) => {
    const [amount, setAmount] = useState(0)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSavings((savings)=> savings + amount)
    }
    const theme = useTheme ()
    return (
        <Box>
            <p>{balance}</p>
            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="addSavings">Add to Savings</label>
                <input type="number" name="addSavings" id="addSavings" onChange={(e)=>setAmount(Number(e.target.value))}/>
                <button type="submit">Transfer</button>
            </form>
        </Box>
    )
};

export default Balance;

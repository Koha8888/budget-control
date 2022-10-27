import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import SendIcon from '@mui/icons-material/Send';
import { BalanceProps } from '../types/Balance';
import { SavingsProps } from '../types/Savings';
import Savings from './Savings'; 

import { Box, Button, Stack, TextField } from '@mui/material';

const Balance = ({balance, setSavings} :BalanceProps) => {
    const [amount, setAmount] = useState(0)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSavings((savings)=> savings + amount)
    }
    const theme = useTheme ()
    return (
        <Stack sx={{color: "text.primary"}} direction="column" alignItems="center">
            <p>Current balance:{balance}</p>
            <Box 
                component="form"
                onSubmit={(e) => onSubmit(e)}>
                <TextField 
                label="Transfer to savings"
                type="number" 
                name="addSavings" 
                onChange={(e)=>setAmount(Number(e.target.value))}/>
                <Button variant="contained" endIcon={<SendIcon />}
                type="submit">
                    Transfer
                </Button>
            </Box>
        </Stack>
    )
};

export default Balance;

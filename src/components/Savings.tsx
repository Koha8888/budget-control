import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

import { SavingsProps } from '../types/Savings';
import { Stack } from '@mui/system';

const Savings = ({savings}:SavingsProps) => {
    const [target, setTarget] = useState (0)
    const incomes = useSelector((state:any) => state.incomeReducer)
    const expenses = useSelector((state:any) => state.expenseReducer)
    console.log("incomes", incomes)
    console.log("expenses", expenses)
    return (
        <Stack sx={{color: "text.primary"}} direction="column" alignItems="center">
            <p>Current Savings: {savings}</p>
            <p>Current Target: {target}</p>
            
            <Stack sx={{ position: 'relative', display: 'inline-block' }}>
                <CircularProgress variant="determinate" value={savings / target  * 100} />
                <Box
                    sx={{top: 0,
                        left: 0,
                       bottom: 0,
                        right: 0,
                       position: 'absolute',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                }}>
                    <Typography
                    variant="caption"
                    component="div"
                    >{`${Math.round(savings / target * 100)}%`} 
                    </Typography>
                </Box>
            </Stack>
            <Stack component="form" spacing={1}>
                <TextField 
                    label="Set target "
                    type="number" 
                    name="target" 
                    onChange={(e)=>setTarget(Number(e.target.value))}
                />
                <Button variant="contained" startIcon={<DoneOutlineIcon />}
                type="submit">Set target</Button>
            </Stack>
        </Stack>
    )
};


export default Savings;

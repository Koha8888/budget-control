import React, { useState } from "react"
import {Box, TextField, Button, List, ListItem, styled, } from "@mui/material"
import { MoneyProps } from "../types/Money"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoneyTable from "../components/MoneyTable"

const Money = ({ option, list, setList }: MoneyProps) => {
    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState(0)
    const [date,setDate] = useState("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault ()
        setList([...list, {title, amount, date, id:Date.now()}])
    }
    
    const MoneyList = styled (List)({
        backgroundColor: "red"
    })
    return (
        <Box 
            component="form"
            autoComplete="off"
            onSubmit={(e)=>onSubmit(e)}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={2}

        >
            <TextField
                required
                label= {`Title of ${option}`}
                variant="standard"
                onChange={(e) => setTitle(e.target.value)}
                value = {title}
                InputLabelProps={{
                            shrink: true,
                }}
            />
            <TextField
                required
                label= {`Amount of ${option}`}
                variant="standard"
                onChange={(e) => setAmount(Number(e.target.value))}
                type = "number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                required
                label= {`Date of ${option}`}
                variant="standard"
                onChange={(e) => setDate(e.target.value)}
                type = "date"
                InputLabelProps={{
                     shrink: true,
                }}
            />
            <Button variant="contained" startIcon={<AddCircleOutlineIcon />}
            type="submit">
                Save
            </Button>
            {/* <List sx={{width: "100%", maxHeight:200, overflow:"scroll"}}>
                {
                    list.length > 0 && list.map(
                        item => (
                            <ListItem key={item.id }> {item.title}, {item.amount}, {item.date}</ListItem>
                         )
                    )
                 }
            </List> */}
            <MoneyTable list={list} />
        </Box>
  )
}

export default Money

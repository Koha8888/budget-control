import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import { MoneyItem } from '../types/Money'

const MoneyTable = ({list}: {list: MoneyItem[]}) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{ item.title}</TableCell>
                            <TableCell>{ item.amount}</TableCell>
                            <TableCell>{ item.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default MoneyTable

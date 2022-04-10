import React from 'react';
import { Typography, TableCell, TableHead, TableRow } from '@mui/material';

const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    <Typography>ID</Typography>
                </TableCell>
                <TableCell>
                    <Typography>Name</Typography>
                </TableCell>
                <TableCell>
                    <Typography>Symbol</Typography>
                </TableCell>
                <TableCell>
                    <Typography>Price {'PLN'}</Typography>
                </TableCell>
                <TableCell>
                    <Typography>Volume</Typography>
                </TableCell>
                <TableCell>
                    <Typography>Price Change</Typography>
                </TableCell>
                <TableCell>
                    <Typography>Market Cap</Typography>
                </TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;

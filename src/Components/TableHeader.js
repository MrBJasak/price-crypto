import React from 'react';
import { Typography, TableCell, TableHead, TableRow } from '@mui/material';

const TableHeader = ({ currencyState, onClick, filterCoins }) => {
    return (
        <TableHead>
            <TableRow style={{ cursor: 'pointer' }}>
                <TableCell
                    onClick={() => {
                        onClick('id');
                    }}
                >
                    <Typography>ID</Typography>
                </TableCell>
                <TableCell
                    onClick={() => {
                        onClick('name');
                    }}
                >
                    <Typography>Name</Typography>
                </TableCell>
                <TableCell
                    onClick={() => {
                        onClick('symbol');
                    }}
                >
                    <Typography>Symbol</Typography>
                </TableCell>
                <TableCell
                    onClick={() => {
                        onClick('price');
                    }}
                >
                    <Typography>Price {currencyState}</Typography>
                </TableCell>
                <TableCell
                    onClick={() => {
                        onClick('volume');
                    }}
                >
                    <Typography>Volume</Typography>
                </TableCell>
                <TableCell
                    onClick={() => {
                        onClick('priceChange');
                    }}
                >
                    <Typography>Price Change</Typography>
                </TableCell>
                <TableCell
                    onClick={() => {
                        onClick('marketcap');
                    }}
                >
                    <Typography>Market Cap</Typography>
                </TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;

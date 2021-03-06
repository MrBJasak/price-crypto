import React from 'react';
import { TableBody, TableCell, TableRow, Avatar, Typography, Stack } from '@mui/material';

const CoinDetails = ({
    id,
    image,
    symbol,
    name,
    price,
    volume,
    priceChange,
    marketcap,
    currencyState,
}) => {
    return (
        <TableBody>
            <TableRow>
                <TableCell>{id + 1}</TableCell>
                <TableCell>
                    <Stack direction="row" spacing={2}>
                        <Avatar src={image} alt={name} />
                        <Typography>{name}</Typography>
                    </Stack>
                </TableCell>
                <TableCell>{symbol.toUpperCase()}</TableCell>
                <TableCell>{parseFloat(price).toFixed(2)}</TableCell>
                <TableCell>{volume.toLocaleString()}</TableCell>
                {priceChange < 0 ? (
                    <TableCell sx={{ color: 'red' }}>{priceChange.toFixed(2)}%</TableCell>
                ) : (
                    <TableCell sx={{ color: 'green' }}>{priceChange.toFixed(2)}%</TableCell>
                )}
                <TableCell>{marketcap.toLocaleString()}</TableCell>
            </TableRow>
        </TableBody>
    );
};

export default CoinDetails;

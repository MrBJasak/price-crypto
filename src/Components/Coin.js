import axios from 'axios';
import React, { useState, useEffect } from 'react';

import API_URL from './Util/util';
import CoinDetails from './CoinDetails';
import TableHeader from './TableHeader';

import Form from './Form';
import {
    Paper,
    Table,
    Typography,
    TableCell,
    TableContainer,
    TablePagination,
    Box,
} from '@mui/material';

const Coin = () => {
    const [coins, setCoins] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [order, setOrder] = useState('ASC');
    const [currency, setCurrency] = useState('PLN');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const api = API_URL(currency.toLowerCase(), 50);

    const sortCoin = (col) => {
        if (order === 'ASC') {
            const sorted = [...coins].sort((a, b) => (a[col] > b[col] ? 1 : -1));
            setCoins(sorted);
            setOrder('DESC');
        } else {
            const sorted = [...coins].sort((a, b) => (a[col] < b[col] ? 1 : -1));
            setCoins(sorted);
            setOrder('ASC');
        }
    };

    const filterCoins = coins.filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
    );

    const handleChangePage = (newPage) => {
        setPage(+newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const handleInputValue = (event) => {
        event.preventDefault();
        setSearchName(event.target.value);
    };

    const fetchData = (api) => {
        axios
            .get(api)
            .then((results) => {
                setCoins(results.data);
                console.log(results.data);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData(api);
    }, [api, setCoins, currency]);

    return (
        <Box>
            <Form
                onChange={handleInputValue}
                setCurrencyState={setCurrency}
                currencyState={currency}
            />
            <div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer
                        sx={{ height: '85vh', '&::-webkit-scrollbar': { display: 'none' } }}
                    >
                        <Table stickyHeader aria-label="sticky table">
                            <TableHeader
                                currencyState={currency}
                                onClick={sortCoin}
                                filterCoins={filterCoins}
                            />
                            {filterCoins
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item, index) => (
                                    <CoinDetails
                                        id={index}
                                        key={item.id}
                                        image={item.image}
                                        name={item.name}
                                        symbol={item.symbol}
                                        volume={item.market_cap}
                                        price={item.current_price}
                                        priceChange={item.price_change_percentage_24h}
                                        marketcap={item.total_volume}
                                        currencyState={currency}
                                    />
                                ))}
                            {filterCoins.length === 0 && (
                                <TableCell colSpan={7}>
                                    <Typography align="center" variant="h2">
                                        {'Not found Crypto :('}
                                    </Typography>
                                </TableCell>
                            )}
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={filterCoins.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </Box>
    );
};

export default Coin;

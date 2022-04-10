import React, { useState } from 'react';

import {
    TextField,
    Box,
    Typography,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
} from '@mui/material';

const Form = ({ onChange }) => {
    const [currency, setCurrency] = useState('');

    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'space-between' }} component="form">
            <Typography variant={'h2'}>Search</Typography>
            <Box sx={{ m: 1, Width: 120 }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="currency-label">Currency</InputLabel>
                    <Select
                        labelId="currency-label"
                        id="currency-label"
                        value={currency}
                        onChange={handleChangeCurrency}
                        label="Currency"
                    >
                        <MenuItem value={'PLN'}>PLN</MenuItem>
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'EURO'}>EURO</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <TextField
                sx={{ margin: 2, minWidth: 120 }}
                onChange={onChange}
                label="Find Yor Crypto"
                variant="standard"
                size="small"
            />
        </Box>
    );
};

export default Form;

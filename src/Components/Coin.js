import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { API_URL } from './Util/util';
import CoinDetails from './CoinDetails';

const Coin = () => {
    const [coins, setCoins] = useState([]);
    const [searchName, setSearchName] = useState('');

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
        fetchData(API_URL);
    }, []);

    const filterCoins = coins.filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
    );
    // const sortCoins = coins.sort(item)
    return (
        <div>
            <div>
                <h1>Search</h1>
                <form>
                    <input
                        type="text"
                        placeholder={'Search your Crypto'}
                        onChange={(event) => {
                            setSearchName(event.target.value);
                            console.log(searchName);
                        }}
                    />
                </form>
            </div>
            <div>
                {filterCoins.map((item) => (
                    <CoinDetails
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        symbol={item.symbol}
                        volume={item.market_cap}
                        price={item.current_price}
                        priceChange={item.price_change_percentage_24h}
                        marketcap={item.total_volume}
                    />
                ))}
            </div>
        </div>
    );
};

export default Coin;

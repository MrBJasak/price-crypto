const API_URL = (currency = 'PLN', onPage = 50) => {
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${onPage}&page=1&sparkline=false`;
};

export default API_URL;

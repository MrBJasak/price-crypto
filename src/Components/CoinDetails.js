const CoinDetails = ({ image, symbol, name, price, volume, priceChange, marketcap }) => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src={image} alt={name} />
                        <h1>{name}</h1>
                        <p>{symbol.toUpperCase()}</p>
                        <p>{price}</p>
                    </div>
                    <div>
                        <p>{price} PLN</p>
                        <p>{volume.toLocaleString()}</p>
                        {priceChange < 0 ? (
                            <p>{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p>{priceChange.toFixed(2)}%</p>
                        )}
                        <p>{marketcap.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;

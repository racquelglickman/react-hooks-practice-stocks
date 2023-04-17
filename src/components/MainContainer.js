import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [sortType, setSortType] = useState('');
  const [stockTypeSearch, setStockTypeSearch] = useState('Tech');

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStocks(data);
      });
  }, []);

  useEffect(() => {
    if (sortType === 'Alphabetically') {
      console.log('name sorting')
      setStocks([...stocks].sort((a, b) => a.name.localeCompare(b.name)))
    } else if (sortType === 'Price') {
      console.log('price sorting')
      setStocks([...stocks].sort((a, b) => a.price - b.price))
    }
  }, [sortType]);

  const sortStocks = (e) => {
    console.log(`i want to sort stocks by ${e.target.value}`);
    setSortType(e.target.value);

    if (sortType === 'Alphabetically') {
      setStocks(stocks.sort((a, b) => a.name.localeCompare(b.name)))
    } else if (sortType === 'Price') {
      setStocks(stocks.sort((a, b) => a.price - b.price))
    }
  };

  const onPortfolioAdd = (addedStock) => {
    if (!portfolioStocks.includes(addedStock)) {
      console.log('stock added to portfolio');
      setPortfolioStocks([...portfolioStocks, addedStock]);
    }
  };

  const sellStock = (stock) => {

    console.log('selling stock');
    const filteredStocks = portfolioStocks.filter((portfolioStock) => {
      return stock.id !== portfolioStock.id;
    });

    setPortfolioStocks(filteredStocks);
  };

  return (
    <div>
      <SearchBar sortStocks={sortStocks} stockTypeSearch={stockTypeSearch} setStockTypeSearch={setStockTypeSearch}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onPortfolioAdd={onPortfolioAdd} search={stockTypeSearch}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} sellStock={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

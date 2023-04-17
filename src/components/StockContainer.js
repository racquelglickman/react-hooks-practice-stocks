import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onPortfolioAdd, search }) {

  const stocksToDisplay = stocks.filter((stock) => {
    return stock.type === search;
  }).map((stock) => {
    return <Stock key={stock.name} stock={stock} handleClick={onPortfolioAdd} />
  });

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;

import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, sellStock }) {

  const portfolioStocksToDisplay = portfolioStocks.map((portfolioStock) => {
    return <Stock key={portfolioStock.name} stock={portfolioStock} handleClick={sellStock}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocksToDisplay}
    </div>
  );
}

export default PortfolioContainer;

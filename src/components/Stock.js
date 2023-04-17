import React from "react";

function Stock({ stock, handleClick }) {

  function handleAllClicks() {
    console.log('clicked');
    // if a regular stock is clicked, the handleClick function being passed down is onPortfolioAdd and if a portfolio stock is clicked, the handleClick function being passed down is sellStock
    handleClick(stock);
  }

  return (
    <div>
      <div className="card" onClick={handleAllClicks}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: ${stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

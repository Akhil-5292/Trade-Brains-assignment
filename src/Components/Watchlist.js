// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { removeFromWatchlist } from '../actions';
// import './Watchlist.css';

// const Watchlist = ({ stocks }) => {
//   const dispatch = useDispatch();

//   const handleRemoveStock = (symbol) => {
//     dispatch(removeFromWatchlist(symbol));
//   };

//   return (
//     <ul className="watchlist">
//       {stocks.map((stock) => (
//         <li key={stock.symbol} className="stock-item">
//           <span className="stock-name">{stock.name}</span>
//           <span className="stock-price">{stock.price}</span>
//           <button onClick={() => handleRemoveStock(stock.symbol)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Watchlist;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../actions';
import './Watchlist.css';

const Watchlist = () => {
  const stocks = useSelector(state => state.watchlist);
  const dispatch = useDispatch();

  const handleRemoveStock = (symbol) => {
    dispatch(removeFromWatchlist(symbol));
  };

  return (
    <div className="watchlist-container">
      <h2 className="watchlist-title">My Watchlist</h2>
      {stocks.length > 0 ? (
        <ul className="watchlist">
          {stocks.map(stock => (
            <li key={stock.symbol} className="stock-item">
              <span className="stock-name">{stock.name}</span>
              <span className="stock-price">{stock.price}</span>
              <button onClick={() => handleRemoveStock(stock.symbol)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-watchlist">Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default Watchlist;

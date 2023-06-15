// actions/index.js
export const addToWatchlist = (stock) => {
    return {
      type: 'ADD_TO_WATCHLIST',
      payload: stock,
    };
  };
  
  export const removeFromWatchlist = (symbol) => {
    return {
      type: 'REMOVE_FROM_WATCHLIST',
      payload: symbol,
    };
  };
  
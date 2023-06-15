import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import CompanyList from './Components/CompanyList';
import Watchlist from './Components/Watchlist';
import { addToWatchlist, removeFromWatchlist } from './actions';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const watchlist = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch search results from Alpha Vantage API
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=RY303427Y2C5NDSS`
        );
        const data = await response.json();
        setSearchResults(data.bestMatches);
      } catch (error) {
        console.log('Error fetching search results:', error);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleAddStock = (company) => {
    dispatch(addToWatchlist(company));
  };


  const handleRemoveStock = (symbol) => {
    dispatch(removeFromWatchlist(symbol));
  };
  

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
  
    <div className="app">
      
      <Header title="Stock Watchlist" />
      <div className="content">
        <div className="search-section">
          <SearchBar handleChange={handleSearchChange} />
          <CompanyList companies={searchResults} handleAddStock={handleAddStock} />
        </div>
        <div className="watchlist-section">
          <h2>Watchlist</h2>
          <Watchlist stocks={watchlist} handleRemoveStock={handleRemoveStock} />
        </div>
      </div>
    </div>
    
  );
};

export default App;

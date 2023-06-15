import React from 'react';
import './CompanyList.css';

const CompanyList = ({ companies, handleAddStock }) => {
  return (
    <ul className="company-list">
      {companies.map((company) => (
        <li key={company['1. symbol']} className="company-item">
          <span className="company-name">{company['2. name']}</span>
          <span className="company-price">{company['4. price']}</span>
          <button onClick={() => handleAddStock(company)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default CompanyList;

import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map(transac => (
        <Transaction key={transac.id} {...transac} />
      ))}
    </ul>
  );
};

export default TransactionsList;
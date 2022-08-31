import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Transactions/Transactions.css'

export default function Transactions ({items}){
    return(
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(item => (
          <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    
    
  </tbody>
</table>
    )
}
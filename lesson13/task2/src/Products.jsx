import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Product from './Product.jsx';

function Products({ match }) {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/ball`}>Ball</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/book`}>Book</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={match.url}>
          <span>Select a product please</span>
        </Route>
        <Route path={`${match.url}/:productId`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default Products;
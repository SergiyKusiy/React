import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const rootElement = document.querySelector('#root');
const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Serhii',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Ivan',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Oleg',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Olya',
  },
];
ReactDOM.render(<UsersList users={users} />, rootElement);
import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <>
        <button onClick={() => setHide(!hide)}>
           {hide ? 'Hide' : 'Show'}
        </button>

      {hide && (
        <>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New York" offset={-5} />
        </>
      )}
    </>
  );
};

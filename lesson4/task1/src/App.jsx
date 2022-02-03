import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={100} interval={100} />
      <Counter start={1} interval={2000} />
    </>
  );
};

export default App;

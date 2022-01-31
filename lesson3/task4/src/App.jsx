import React from 'react';
import Greeting from './Greeting.jsx';

const userInfo = {
   firstName: 'John',
   lastName: 'Doe',
   birthDate: new Date('2004-01-01T11:32:19.566Z'),
}

const App = () => {
   return (
      <Greeting
         firstName={userInfo.firstName}
         lastName={userInfo.lastName}
         birthDate={userInfo.birthDate}
      />
   );
};

export default App;
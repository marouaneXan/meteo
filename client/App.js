import React from 'react';
import AuthContextProvider from './context/auth';
import RootStack from './navigators';

const App = () => {
  return (
    <AuthContextProvider>
      <RootStack/>
    </AuthContextProvider>
  );
};

export default App;

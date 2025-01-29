import React from 'react';
import AppNavigator from './src/Navigations/AppNavigator';
import {AtomThemeProvider} from './src/contexts/AtomThemeContext';

const App = () => {
  return (
    <AtomThemeProvider>
      <AppNavigator />
    </AtomThemeProvider>
  );
};

export default App;

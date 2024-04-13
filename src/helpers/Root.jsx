import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SelectedItemsProvider } from './SelectedItemsProvider';
import App from '../App';

const Root = () => {
  return (
    <Router>
      <SelectedItemsProvider>
        <App />
      </SelectedItemsProvider>
    </Router>
  );
};

export default Root;

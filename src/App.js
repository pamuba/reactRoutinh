import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import BaseLayout from './components/BaseLayout';
import history from './components/history'

function App() {
  return (
    <div className="App">
     <BrowserRouter history={history}>
      <BaseLayout></BaseLayout>
    </BrowserRouter>
    </div>
  );
}

export default App;

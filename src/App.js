import React from 'react';
import Pokedex from './components/pokedex/pokedex.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

export default App;


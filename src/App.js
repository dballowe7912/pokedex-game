import React from 'react';
import PokeCard from './components/pokecard/pokecard.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PokeCard 
          id='4' 
          name='Charmander' 
          type='fire' 
          exp='62'
        />
      </div>
    );
  }
}

export default App;



import React, { Component } from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
// import Data from './DuLieu.json';

class App extends Component {

  render() {
    return (
      <div>
      <Header />
      <SearchForm />        
      </div>
    );
  }
}


export default App;
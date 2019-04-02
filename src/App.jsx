import React, { Component } from 'react';
import './App.css';
import Places from './components/Places.jsx'
import SearchForm from './components/SearchForm.jsx'
import Footer from './components/Footer.jsx'


class App extends Component {

  constructor(){
    super() 

    this.state = {
      results: []
    }
  }
  
  

  render() {
    return (
      <div className="App">
        <header>
          <SearchForm />
        </header>
        <Places />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

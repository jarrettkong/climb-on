import React, { Component } from 'react';
import './App.css';
// import Header from './Header'
// import Place from './Place'
// import SideBar from './SideBar'
// import Route from './Route'
// import SearchFrom from './components/SearchForm'


class App extends Component {
  // constructor(){
  //   super() {

  //     this.state = {

  //     }
  //   }
  
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Climb On</h1>
     
        <form>
          <input className="search-bar" type="text" name="search" autoComplete="on" placeHolder="Search"/>
          <i role="button" class="fas fa-search thesearch"></i>
        </form>
        {/* <Header /> */}
        {/* <SearchForm /> */}
        {/* <Place /> */}
        {/* <Route /> */}
        {/* <SideBar /> */}
        {/* <Footer /> */}
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Places from './components/Places.jsx';
import SearchForm from './components/SearchForm.jsx';
import Footer from './components/Footer.jsx';
import {climbingPlaces, routes} from './data/climbing-data.js';

let places = climbingPlaces.map( currentPlace => {
  let newPlace = {};
  newPlace.place = currentPlace.place;
  newPlace.closestTown = currentPlace.closestTown;
  newPlace.climbingId = currentPlace.climbingId;
  newPlace.routes = routes.filter( route => {
    return route.climbingPlaceId === newPlace.climbingId;
  });
  return newPlace;
});
class App extends Component {

  constructor(){
    super() 

    this.state = {
      places: places,
      results: places
    }
  }
  
  submitSearch = query => {
    const results = this.state.places.filter(r => {
      return r.place.toLowerCase() === query.toLowerCase();
    })
    this.setState({ results: results });
  }
  

  render() {
    return (
      <div className="App">
        <header>
          <SearchForm submitSearch={this.submitSearch}/>
        </header>
        <Places places={this.state.results}/>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Places from './components/Places.jsx';
import SearchForm from './components/SearchForm.jsx';
import Footer from './components/Footer.jsx';
import {climbingPlaces, routes} from './data/climbing-data.js';



class App extends Component {

  constructor(){
    super() 

    this.state = {
      placesData: null,
      routesData: null,
      results: []
    }
  }

  componentDidMount = async () => {
    await fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/routes')
    .then(res => res.json())
    .then(json => this.setState({ routesData: json.routes }))
    .catch(error => console.log(error));

    await fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/climbingPlaces')
    .then(res => res.json())
    .then(json => this.setState({ placesData: json.climbingPlaces }))
    .catch(error => console.log(error));

    this.setState({ results: this.state.placesData.map( place => { 
        place.routes = this.state.routesData.filter( route => {
          return route.climbingPlaceId === place.climbingId;
        });
        return place;
      })
    })
  }

  submitSearch = query => {

    const results = this.state.places.filter(r => {
      return r.place.toLowerCase().includes(query.toLowerCase());
    })
    this.setState({ results: results });
  }
  

  render() {
    return (
      <div className="App">
        <header>
        <SearchForm submitSearch={this.submitSearch}/>
        </header>
        <Places places={this.state.results} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

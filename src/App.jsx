import React, { Component } from 'react';
import './App.css';
import Places from './components/Places.jsx';
import SearchForm from './components/SearchForm.jsx';
import Footer from './components/Footer.jsx';

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

    //promise.all || promise.finally

    // this.setState({ results: this.mergeData() })
    const combinedData = this.state.placesData.map( place => { 
      place.routes = this.state.routesData.filter( route => {
        return route.climbingPlaceId === place.climbingId;
      })
      return place;
    })

    this.setState({ results: combinedData })
  }

  sortByDifficulty(routes) {
    routes.sort((a, b) => {
      const first = parseInt(a.difficultyLevel.slice(2)
          .replace('a','1')
          .replace('b','2')
          .replace('c','3')
          .replace('d','4'));
      const second = parseInt(b.difficultyLevel.slice(2)
          .replace('a','1')
          .replace('b','2')
          .replace('c','3')
          .replace('d','4'));
      return first - second;
    });
  }

  submitSearch = query => {
    console.log(this.state.placesData);
    const results = this.state.placesData.filter(r => {
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

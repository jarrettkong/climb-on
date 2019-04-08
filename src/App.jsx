import React, { Component } from 'react';
import './App.css';
import Places from './components/Places.jsx';
import SearchForm from './components/SearchForm.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {

  constructor(){
    super() 

    this.state = {
      combinedData: null,
      results: [],
      filteredResults: [],
    }
  }

  componentDidMount = () => {

    const routePromise = fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/routes')
    .then(res => res.json())
    
    const placesPromise = fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/climbingPlaces')
    .then(res => res.json())
    
    Promise.all([routePromise, placesPromise])
    .then(data => { 
      const combinedData = this.mergeData(data[0].routes, data[1].climbingPlaces)
      this.setState({combinedData: combinedData})
    }).catch(error => console.log(error))
    
  }

  mergeData = (routes, places) => {
    return places.map( place => {
      let newPlace = Object.assign({}, place)
      newPlace.routes = routes.filter( route => {
        return route.climbingPlaceId === place.climbingId;
      })
      this.sortByDifficulty(newPlace.routes);
      return newPlace;
    })
  }

  sortByDifficulty = routes => {
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
    const results = this.state.combinedData.filter(r => {
      query = query.toLowerCase()
      return r.place.toLowerCase().includes(query) ||
             r.closestTown.toLowerCase().includes(query)
    })
    this.setState({ results: results });
  }

  // TODO unfilter does not work
  filterType = filters => {
    if(filters.length < 1) {
      return;
    }
    const results = this.state.results.map(r => r);
    results.forEach(result => {
      result.routes = result.routes.filter(route => {
        return route.type.some(type => filters.includes(type));
      })
    })
    this.setState({ results: results });
  }

  render() {
    // TODO not show on start
  //   let places;
  //   if(this.state.results.lengh > 0) {
  //     // console.log(true);
  //     places = <Places places={this.state.results} filterType={this.filterType} />
  //     console.log(this.state.results);
  //   }
    // ! filter
    // const results = filterResults(this.state.filters)
    return (
      <div className="App">
        <header>
        <SearchForm submitSearch={this.submitSearch}/>
        </header>
        {/* {places} */}
        <Places places={this.state.results} filterType={this.filterType} />
        {/* <Places places={results} filterType={this.filterType} /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

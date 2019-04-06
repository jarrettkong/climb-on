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
      results: []
    }
  }

  componentDidMount = () => {

    const routePromise = fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/routes')
    .then(res => res.json())
    
    const placesPromise = fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/climbingPlaces')
    .then(res => res.json())
    
    
    Promise.all([
      routePromise.catch(error => console.log(error)),
      placesPromise.catch(error => console.log(error))
    ]).then(data => { 
      const combinedData = this.mergeData(data[0].routes, data[1].climbingPlaces)
      this.setState({combinedData: combinedData})
    })
    
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
    // console.log(this.state.placesData);
    const results = this.state.combinedData.filter(r => {
      query = query.toLowerCase()
      return r.place.toLowerCase().includes(query) ||
             r.closestTown.toLowerCase().includes(query)
    })
    this.setState({ results: results });
  }

  filterType = filters => {
    // const results = [] 
    console.log(this.state.results);
    this.state.results.forEach(result => {
      result.routes = result.routes.forEach(route => {
        if(!route.type.some(type => filters.includes(type))) {
          result.routes.splice(result.routes.indexOf(route, 1))
        }
      })
    })

    console.log(this.state.results);

    // this.setState({ results: this.state.results });
  }

  render() {
    return (
      <div className="App">
        <header>
        <SearchForm submitSearch={this.submitSearch}/>
        </header>
        <Places places={this.state.results} filterType={this.filterType} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

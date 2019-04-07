import React, { Component } from 'react';
import './App.css';
import Places from './components/Places.jsx';
import SearchForm from './components/SearchForm.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {

  constructor(){
    super() 

    this.state = {
      routes: [],
      places: [],
      results: [],
      types: {
        'sport': true,
        'trad': true,
        'top-rope': true
      }
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
      this.setState({
        routes: data[0].routes,
        places: data[1].climbingPlaces
      })
    })
  }

  componentDidUpdate = () => {
    let sortedRoutes = this.sortByDifficulty(this.state.routes);
    let filteredRoutes = this.filterRoutesByType(sortedRoutes);
    let results = this.addRoutesToPlaces(filteredRoutes, this.state.places)
    if (JSON.stringify(this.state.results) !== JSON.stringify(results)) {
      this.setState({
        results: results
      })
    }
  }

  filterRoutesByType = (routes) => {

    let approvedTypes = Object.keys(this.state.types).filter(key => {
      return this.state.types[key];
    })

    let routesWithApprovedTypes = routes.filter( route => {
      return route.type.some( (type) => {
        return approvedTypes.includes(type);
      });
    })

    return routesWithApprovedTypes;
  }

  addRoutesToPlaces = (routes, places) => {
    return places.map( place => {
      let newPlace = Object.assign({}, place)
      newPlace.routes = this.filterRoutesByPlaceID(place, routes)
      return newPlace;
    })
  }

  filterRoutesByPlaceID = (place, routes) => {
    return routes.filter((route) => {
      return route.climbingPlaceId === place.climbingId;
    })
  }

  sortByDifficulty = (routes) => {
    let routesCopy = Object.assign([], routes)
    return routesCopy.sort((a, b) => {
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

  submitSearch = (query) => {
    const placesThatMatchQuery = this.state.results.filter(currentPlace => {
      query = query.toLowerCase();
      return (
        currentPlace.place.toLowerCase().includes(query) ||
        currentPlace.closestTown.toLowerCase().includes(query)
      );
    });
    this.setState({ results: placesThatMatchQuery });
  }
  
  setTypesState = (typeState) => {
    this.setState({types: typeState});
  }

  render() {
    return (
      <div className="App">
        <header>
        <SearchForm submitSearch={this.submitSearch}/>
        </header>
        <Places setTypesState={this.setTypesState} places={this.state.results} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

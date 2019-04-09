import React, { Component } from 'react';
import './App.css';
import Places from './components/Places.jsx';
import SearchForm from './components/SearchForm.jsx';
// import Footer from './components/Footer.jsx';

class App extends Component {

  constructor(){
    super() 

    this.state = {
      combinedData: null,
      searchQuery: '',
      filters: {
        types: [],
        difficulties: []
      }
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
      place.routes = routes.filter( route => {
        return route.climbingPlaceId === place.climbingId;
      })
      this.sortByDifficulty(place.routes);
      return place;
    })
  }

  sortByDifficulty = (routes, bool) => {
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
      return bool ? first - second : second - first;
    });
  }

  updateSearch = query => {
    this.setState({ searchQuery: query })
  }

  searchData = () => {
    const query = this.state.searchQuery.toLowerCase();
    const results = this.state.combinedData.filter(r => {
      return r.place.toLowerCase().includes(query) ||
             r.closestTown.toLowerCase().includes(query)
    })

    return results;
  }

  // TODO cannot select multiple diffiiculties
  // TODO cannot stack filters between diff and type
  filterResults = searchResults => {
    return searchResults.map(result => {
      const newResult = Object.assign({}, result);
      newResult.routes = this.filterRoutes(newResult.routes);
      return newResult;
    });
  }

  filterRoutes(routes) {
    const { types, difficulties } = this.state.filters;
    return routes.filter(route => {
      let doesRouteHaveType = this.isRouteTypeAllowed(types, route);
      let doesRouteHaveDiff = this.isRouteDifficultyAllowed(difficulties, route);
      if (types.length > 0 && difficulties.length > 0) {
        return doesRouteHaveType && doesRouteHaveDiff;
      } else if (types.length > 0) {
        return doesRouteHaveType;
      } else if (difficulties.length > 0) {
        return doesRouteHaveDiff;
      } else {
        return true;
      }
    });
  }

  isRouteTypeAllowed(allowedTypes, route) {
    return route.type.some(type => {
      return allowedTypes.includes(type);
    });
  }

  isRouteDifficultyAllowed(allowedDifficulties, route) {
    return allowedDifficulties.includes(route.difficultyLevel.match(/.+[^a-d]/)[0]);
  }

  updateFilters = filters => {
    this.setState({ filters: filters });
  }
  
  render() {
    const searchResults = this.state.combinedData ? this.searchData() : [];
    const results = this.filterResults(searchResults);

    return (
      <div className="App">
        <header>
        <SearchForm updateSearch={this.updateSearch}/>
        </header>
        {/* // TODO not show on start */}
        <Places places={results} updateFilters={this.updateFilters} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

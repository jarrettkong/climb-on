import React, { Component } from 'react';
import './_App.scss';
import Places from './components/Places.jsx';
import SearchForm from './components/SearchForm.jsx';

class App extends Component {

  constructor(){
    super()
    this.state = {
      combinedData: null,
      searchQuery: '',
      filters: {
        types: [],
        difficulties: [],
        sortOrder: true
      }
    }
  }

  componentDidMount = () => {

    const routePromise = fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/routes')
      .then(res => res.json());
    
    const placesPromise = fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/climbingPlaces')
      .then(res => res.json());
    
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
      });
      return place;
    });
  }

  sortByDifficulty = (places, lowestFirst) => {
    places.forEach(place => {
      place.routes.sort((a, b) => {
        const r1 = parseInt(a.difficultyLevel.slice(2)
            .replace('a','1')
            .replace('b','2')
            .replace('c','3')
            .replace('d','4'));
        const r2 = parseInt(b.difficultyLevel.slice(2)
            .replace('a','1')
            .replace('b','2')
            .replace('c','3')
            .replace('d','4'));
        return lowestFirst ? r1 - r2 : r2 - r1;
      });
    })
  }

  updateSearch = query => {
    this.setState({ searchQuery: query })
  }

  searchData = () => {
    const query = this.state.searchQuery.toLowerCase();
    const results = this.state.combinedData.filter(currentPlace => {
      return currentPlace.place.toLowerCase().includes(query) ||
             currentPlace.closestTown.toLowerCase().includes(query)
    })
    return results;
  }

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
    const regex = /.+[^a-d]/
    return allowedDifficulties.includes(route.difficultyLevel.match(regex)[0]);
  }

  updateFilters = filters => {
    this.setState({ filters: filters });
  }

  getDataToDisplay = () => {
    const searchResults = this.state.combinedData ? this.searchData() : [];
    const results = this.filterResults(searchResults);
    this.sortByDifficulty(results, this.state.filters.sortOrder);
    return results;
  }
  
  render() {
    
    let places;
    let downArrow;
    const results = this.getDataToDisplay();

    // ! Only works if the re-render is not run
    if(results.length > 0) {
      places = <Places places={results} updateFilters={this.updateFilters} />
      downArrow = <a href="#Places" className="App-arrow-container">
                    <i className="fas fa-chevron-down App-down-arrow bounce"></i>
                  </a>
    }

    return (
      <div className="App">
        <header className="App-header">
          <SearchForm updateSearch={this.updateSearch}/>
          {downArrow}
        </header>
        {places}
      </div>
    );
  }
}

export default App;

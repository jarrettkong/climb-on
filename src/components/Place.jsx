import React, { Component } from 'react';
import Route from './Route.jsx';

import "./_Place.scss";

class Place extends Component {

  render() {
    let displayRoutes;
    const { place, closestTown, routes } = this.props;

    if(this.props.routes.length > 0) {
      displayRoutes = routes.map((route, index) => {
        return (
          <Route
            key={index}
            climbingPlaceId={route.climbingPlaceId}
            area={route.area}
            routeName={route.routeName}
            difficultyLevel={route.difficultyLevel}
            type={route.type}
          />
        )
      })
    } else {
      displayRoutes = <h3 className="Place-no-results-text">No routes to display</h3>
    }

    return (
      <article className="Place module">
        <section className="Place-header-container">
          <div className="Place-info">
            <h3 className="Place-name">{place}</h3>
            <h4 className="Place-nearest-town">Closest City: {closestTown}</h4>
          </div>
        </section>
        <section className="Place-routes-container">
          {displayRoutes} 
        </section>
      </article>
    )
  }
}

export default Place;

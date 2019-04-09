import React, { Component } from 'react';
import Route from './Route.jsx';

import "./_Place.scss";

class Place extends Component {

  render() {
    const {place, closestTown, climbingId, routes} = this.props;
    return (
      <article className="Place module">
        <section className="Place-header-container">
          <div className="Place-info">
            <h3 className="Place-name">{place}</h3>
            <h4 className="Place-nearest-town">Closest City: {closestTown}</h4>
          </div>
        </section>
        <section className="Place-routes-container">
          {
            routes.map((route, index) => {
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
          } 
        </section>
      </article>
    )
  }
}

export default Place;

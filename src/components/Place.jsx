import React, { Component } from 'react';
import Route from './Route.jsx';

import "./Place.css";

class Place extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isFavorited: false
  //   }
  // }

  render() {
    const {place, closestTown, climbingId, routes} = this.props;
    return (
      <article className="Place module">
        <section className="Place-header-container">
          <div className="Place-info">
            <h3 className="Place-name">{place}</h3>
            {/* <h3 className="Place-name">{area}</h3> */}
            <h4 className="Place-nearest-town">Closest City: {closestTown}</h4>
          </div>
          {/*<img className="Place-photo" src={photo} alt="location photo"/>*/}
        </section>
        <h3 className="Place-routes-label">Routes</h3>
        {/* <hr className="Place-divider"/> */}
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

import React, { Component } from 'react';
import Route from './Route.jsx';

import "./Place.css";

class Place extends Component {

  render() {
    const {area, closestTown, routes, photo} = this.props;
    return (
      <article className="Place">
        <section className="place-header-container">
          <div className="place-info">
            <h3 className="place-name">Golden Cliffs</h3>
            {/* <h3 className="place-name">{area}</h3> */}
            <h4 className="place-nearest-town">Closest City: Golden</h4>
            {/* <h4 className="place-nearest-town">{closestTown}</h4> */}
          </div>
          <img className="place-photo" src={photo} alt="location photo"/>
        </section>
        <h3 className="place-routes-label">Routes</h3>
        <hr className="place-divider"/>
        <section className="place-routes-container">
          {/* {
            routes.map(route =>{
              return <Route routeName={route.routeName}/>
            })
          } */}
            <Route routeName="Louise" area="Brown Cloud Crags" difficultyLevel="5.8" type={["sport"]}/>
            <Route routeName="Thelma" area="Brown Cloud Crags" difficultyLevel="5.7" type={["sport"]}/>
            <Route routeName="Mister Squirrel Places a Nut" area="Overhang Area" difficultyLevel="5.11c" type={["sport", "top-rope"]}/>
        </section>
      </article>
    )
  }
}

export default Place

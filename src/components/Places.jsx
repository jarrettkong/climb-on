import React, { Component } from 'react';
import Sidebar from './SideBar.jsx';
import Place from './Place.jsx';

import './Places.css';

class Places extends Component {

  // constructor() {
  //   super();
  // }

  render() {
    return (
      <section className="Places-bottom-container">
        <Sidebar />
        <div>

        <Place />
        <Place />
        <Place />
        <Place />
        </div>
        {/* {
          this.props.places.map( (place) => {
            return (
              <Place
                closestTown = {place.closestTown}
                key = {place.climbingId}
                routes = {place.routes}
                photo = {place.photo} />
            )
          })
        } */}
      </section>
    )
  }
}

export default Places;
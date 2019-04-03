import React, { Component } from 'react';
import Sidebar from './SideBar.jsx';
import Place from './Place.jsx';

import './Places.css';

const Places = (props) => {
  console.log(props.places);
  return (
    <section className="Places-bottom-container">
      <Sidebar />
      <div>
        {
          props.places.map((currentPlace) => {
            return ( 
              <Place
                place={currentPlace.place}
                closestTown={currentPlace.closestTown}
                key={currentPlace.climbingId}
                routes={currentPlace.routes}
              />
            )
          });
        }
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


export default Places;
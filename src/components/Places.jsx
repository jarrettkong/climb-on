import React, { Component } from 'react';
import Sidebar from './SideBar.jsx';
import Place from './Place.jsx';

import './Places.css';

const Places = (props) => {
  return (
    <section className="Places">
      <Sidebar />
      <div>
        {
          props.places.map((currentPlace, index) => {
            return ( 
              <Place
                key={index}
                place={currentPlace.place}
                closestTown={currentPlace.closestTown}
                climbingId={currentPlace.climbingId}
                routes={currentPlace.routes}
              />
            )
          })
        }
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
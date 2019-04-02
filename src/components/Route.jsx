import React, { Component } from 'react';

import './Route.css';

class Route extends Component {
  render() {
    const { area, routeName, difficultyLevel, type } = this.props;
    return (
      <section className="Route">
        <h4 className="route-name">{routeName}</h4>
        <div className="route-info-container">
        <h5 className="route-area">Area: {area}</h5>
        <h5 className="route-difficulty">Difficulty: {difficultyLevel}</h5>
        <h5 className="route-type">Type: {type.join(', ')}</h5>
        </div>
        <button className="route-favorite-button">Favorite</button>
      </section>
    )
  }
}

export default Route;

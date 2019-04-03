import React, { Component } from 'react';

import './Route.css';

class Route extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false
    }
    this.handleFavoriteClick =this.handleFavoriteClick.bind(this);
  }
  
  handleFavoriteClick() {
    this.setState({
      favorite: !this.state.favorite
    })
  }

  render() {
    const { area, routeName, difficultyLevel, type } = this.props;
    return (
      <section className="Route">
        <h4 className="Route-name">{routeName}</h4>
        <div className="Route-info-container">
        <h5 className="Route-area">Area: {area}</h5>
        <h5 className="Route-difficulty">Difficulty: {difficultyLevel}</h5>
        <h5 className="Route-type">Type: {type.join(', ')}</h5>
        </div>
        <button className="Route-favorite-button" onClick={this.handleFavoriteClick}>Favorite</button>
      </section>
    )
  }
}

export default Route;

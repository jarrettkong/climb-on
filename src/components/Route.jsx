import React, { Component } from 'react';

import './Route.css';

class Route extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false
    }
    // this.handleFavoriteClick =this.handleFavoriteClick.bind(this);
  }

  _handleFavoriteClick = () => {
    this.setState({
      favorite: !this.state.favorite 
    })   
  }

  componentDidUpdate = () => {
    localStorage.setItem(this.props.routeName, JSON.stringify(this.state.favorite))
  }

  componentDidMount = () => {
    this.setState({
      favorite: JSON.parse(localStorage.getItem(this.props.routeName)) || false
    })
  }

  render() {
    // TODO refactor
    let favButton = this.state.favorite ? <i className="fas fa-heart Route-favorite-button Route-favorited" onClick={this._handleFavoriteClick}></i> : <i className="fas fa-heart Route-favorite-button" onClick={this._handleFavoriteClick}></i>;
    const { area, routeName, difficultyLevel, type } = this.props;
    return (
      <section className="Route">
        <h4 className="Route-name">{routeName}</h4>
        <div className="Route-info-container">
        <h5 className="Route-area">Area: {area}</h5>
        <h5 className="Route-difficulty">Difficulty: {difficultyLevel}</h5>
        <h5 className="Route-type">Type: {type.join(', ')}</h5>
        </div>
        {favButton}
      </section>
    )
  }
}

export default Route;

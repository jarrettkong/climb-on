import React, { Component } from 'react';

import './_Route.scss';

class Route extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false
    }
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
    const { area, routeName, difficultyLevel, type } = this.props;
    return (
      <section className="Route">
        <h4 className="Route-name">{routeName}</h4>
        <div className="Route-info-container">
          <h6 className="Route-area">Area: <span>{area}</span></h6>
          <h6 className="Route-difficulty">Difficulty: <span>{difficultyLevel}</span></h6>
          <h6 className="Route-type">Type: <span>{type.join(', ')}</span></h6>
        </div>
        <i className={"fas fa-heart Route-favorite-button" + (this.state.favorite ? ' favorited' : '')} onClick={this._handleFavoriteClick}></i>
      </section>
    )
  }
}

export default Route;

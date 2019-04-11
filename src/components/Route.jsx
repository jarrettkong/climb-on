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
        <h4 class="Route-name">{routeName}</h4>
        <div className="Route-info-container">
          <h3 className="Route-area">Area: <span className="Route-field">{area}</span></h3>
          <h3 className="Route-difficulty">Difficulty: <span className="Route-field">{difficultyLevel}</span></h3>
          <h3 className="Route-type">Type: <span className="Route-field">{type.join(', ')}</span></h3>
        </div>
        <i className={"fas fa-heart Route-favorite-button" + (this.state.favorite ? ' favorited' : '')} onClick={this._handleFavoriteClick}></i>
      </section>
    )
  }
}

export default Route;

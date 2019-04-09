import './_SideBar.scss';
import React, { Component } from 'react';
import App from '../App.jsx'

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: {
        types: [],
        difficulties: []
      }
    }
  }

  _handleSubmit = e => {
    e.preventDefault();
    this.props.updateFilters(this.state.filters);
  }

  // TODO should use e.target.value and add value prop to checkbox?
  _handleFilterType = e => {
    const filters = Object.assign({}, this.state.filters);
    if(e.target.checked) { 
      filters.types.push(e.target.name);
    } else {
      filters.types.splice(filters.types.indexOf(e.target.name), 1);
    }
    this.setState({ filters: filters });
  }

  _handleDifficulty = e => {
    const filters = Object.assign({}, this.state.filters);
    if(e.target.checked) { 
      filters.difficulties.push(e.target.name);
    } else {
      filters.difficulties.splice(filters.difficulties.indexOf(e.target.name), 1);
    }
    this.setState({ filters: filters });
  }

  render() {
    return (
      <aside className='SideBar'>
        <form action="" className="SideBar-filter-form" onSubmit={this._handleSubmit}>
          <fieldset>
            <legend>Sort:</legend>
            <select id="sort">
              <option>Highest to Lowest</option>
              <option>Lowest to Highest</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Type:</legend>
            <div className="checkbox-container">
              <input type="checkbox" id="sport" name="sport" onChange={this._handleFilterType}/>
              <label htmlFor="sport">Sport</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="top-rope" name="top-rope" onChange={this._handleFilterType}/>
              <label htmlFor="top-rope">Top-rope</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="trad" name="trad" onChange={this._handleFilterType}/>
              <label htmlFor="trad">Trad</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Difficulty:</legend>
            <div className="checkbox-container">
              <input type="checkbox" id="5.13" name="5.13" onChange={this._handleDifficulty}/>
              <label htmlFor="5.13">5.13</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.12" name="5.12" onChange={this._handleDifficulty}/>
              <label htmlFor="5.12">5.12</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.11" name="5.11" onChange={this._handleDifficulty}/>
              <label htmlFor="5.11">5.11</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.10" name="5.10" onChange={this._handleDifficulty}/>
              <label htmlFor="5.10">5.10</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.9" name="5.9" onChange={this._handleDifficulty}/>
              <label htmlFor="5.9">5.9</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.8" name="5.8" onChange={this._handleDifficulty}/>
              <label htmlFor="5.8">5.8</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.7" name="5.7" onChange={this._handleDifficulty}/>
              <label htmlFor="5.7">5.7</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.6" name="5.6" onChange={this._handleDifficulty} />
              <label htmlFor="5.6">5.6</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.5" name="5.5" onChange={this._handleDifficulty}/>
              <label htmlFor="5.5">5.5</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.4" name="5.4" onChange={this._handleDifficulty}/>
              <label htmlFor="5.4">5.4</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.3" name="5.3" onChange={this._handleDifficulty}/>
              <label htmlFor="5.3">5.3</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="5.2" name="5.2" onChange={this._handleDifficulty}/>
              <label htmlFor="5.2">5.2</label>
            </div>
          </fieldset>
          <input type="submit" value="Filter"/>
        </form>
      </aside>
    )
  }
}

export default Sidebar;
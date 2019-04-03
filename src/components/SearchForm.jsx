import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

 constructor() {
  super();
  this.state = {
    inputValue: ''
  };
 }

  _handleChange = e => {
    this.setState({ inputValue: e.target.value });
  }

  _handleSubmit = e => {
    e.preventDefault();
    this.props.submitSearch(this.state.inputValue);
  }

 render() {
  return (
   <div className="SearchForm-header">
    <form onSubmit={this._handleSubmit}>
      <input className="SearchForm-search-bar" type="text" name="search" autoComplete="on" placeholder="Search" onChange={this._handleChange}/>
      <button className="SearchForm-submit-button"><i className="fas fa-search"></i></button>
      {/* make a button */}
    </form>
   </div>
  )
 }
}

export default SearchForm;
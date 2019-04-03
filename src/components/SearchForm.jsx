import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
 constructor() {
  super();
  this.state = {
    inputValue: ''
  };
 }

 render() {
  return (
   <div className="SearchForm-header">
    <form >
      <input className="SearchForm-search-bar" type="text" name="search" autoComplete="on" placeholder="Search" />
      <button className="submit-button"><i className="fas fa-search"></i></button>
      {/* make a button */}
    </form>
   </div>
  )
 }
}

export default SearchForm;
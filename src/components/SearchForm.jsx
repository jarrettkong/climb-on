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
    <form>
      <input className="search-bar" type="text" name="search" autoComplete="on" placeHolder="Search" />
      <i role="button" class="fas fa-search thesearch"></i>
      {/* make a button */}
    </form>
  )
 }
}

export default SearchForm;
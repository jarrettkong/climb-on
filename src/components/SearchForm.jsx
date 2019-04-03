import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

 constructor() {
  super();
  this.state = {
    inputValue: ''
  };
 }

  updateInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  }

 render() {
  return (
   <div className="SearchForm-header">
    <form onSubmit={this.props.submitSearch}>
      <input className="SearchForm-search-bar" type="text" name="search" autoComplete="on" placeholder="Search" onChange={this.updateInputValue}/>
      <button className="submit-button"><i className="fas fa-search"></i></button>
      {/* make a button */}
    </form>
   </div>
  )
 }
}

export default SearchForm;
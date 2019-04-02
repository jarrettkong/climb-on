import React, { Component } from 'react';


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
     <input className="search-bar" type="text" name="search" autoComplete="on" placeHolder="Search" value={} />
     <i role="button" class="fas fa-search thesearch"></i>
   </form>
  )
 }
}

export default SearchForm;
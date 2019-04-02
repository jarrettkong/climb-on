import './SideBar.css';
import React, { Component } from 'react';

class Sidebar extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <aside className='SideBar'>
        <fieldset>
          <legend>Sort:</legend>
          <select id="sort">
              <option>Highest to Lowest</option>
              <option>Lowest to Highest</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Type:</legend>
          <input type="checkbox" id="sport" name="sport" />
          <label for="sport">Sport</label>
          <input type="checkbox" id="top-rope" name="top rope" />
          <label for="top-rope">Top-rope</label>
          <input type="checkbox" id="trad" name="trad" />
          <label for="trad">Trad</label>
        </fieldset>
        <fieldset>
          <legend>Difficulty:</legend>
          <input type="checkbox" id="5.13" name="5.13" />
          <label for="5.13">5.13</label>
          <input type="checkbox" id="5.12" name="5.12" />
          <label for="5.12">5.12</label>
          <input type="checkbox" id="5.11" name="5.11" />
          <label for="5.11">5.11</label>
          <input type="checkbox" id="5.10" name="5.10" />
          <label for="5.10">5.10</label>
          <input type="checkbox" id="5.9" name="5.9" />
          <label for="5.9">5.9</label>
          <input type="checkbox" id="5.8" name="5.8" />
          <label for="5.8">5.8</label>
          <input type="checkbox" id="5.7" name="5.7" />
          <label for="5.7">5.7</label>
          <input type="checkbox" id="5.6" name="5.6" />
          <label for="5.6">5.6</label>
          <input type="checkbox" id="5.5" name="5.5" />
          <label for="5.5">5.5</label>
          <input type="checkbox" id="5.4" name="5.4" />
          <label for="5.4">5.4</label>
          <input type="checkbox" id="5.3" name="5.3" />
          <label for="5.3">5.3</label>
          <input type="checkbox" id="5.2" name="5.2" />
          <label for="5.2">5.2</label>
        </fieldset>
      </aside>
    )
  }
}

export default Sidebar;
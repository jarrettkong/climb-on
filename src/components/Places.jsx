import React from 'react';
import Sidebar from './Sidebar';
import Place from './Place';
import './Places.css';

class Places extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <section class="bottom-container">
        <Sidebar />
        {
          props.places.map( (place, index) => {
            return (
              <Place
                closestTown = {place.closestTown}
                key = {place.climbingId}
                routes = {place.routes}
                photo = {place.photo} />
            )
          });
        }
      </section>
    )
  }
}

export default Places;
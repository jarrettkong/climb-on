import React from 'react';
import Sidebar from './Sidebar';
import Place from './Place';
import './Places.css';

class Places extends Component {
  constructor(props) {
    super();
    this.state = {};
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
                climbingId = {place.climbingId}
                routes = {place.routes} />
            )
          });
        }
      </section>
    )
  }
}

export default Places;
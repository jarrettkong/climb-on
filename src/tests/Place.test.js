import React from 'react';
import Place from '../components/Place';
import { shallow } from 'enzyme';

const mockPlace = { 
  "place": "Golden Cliffs",
  "closestTown": "Golden, Colorado",
  "climbingId": 1,
  "routes": [
    { "climbingPlaceId": 1,
      "area": "Brown Cloud Crags",
      "routeName": "Louise",
      "difficultyLevel": "5.8",
      "type": ["sport"] },
    { "climbingPlaceId": 1,
      "area": "Brown Cloud Crags",
      "routeName": "Thelma",
      "difficultyLevel": "5.7",
      "type": ["sport"] }
  ]
}

describe('SearchForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Place
        key={0}
        place={mockPlace.place}
        closestTown={mockPlace.closestTown}
        climbingId={mockPlace.climbingId}
        routes={mockPlace.routes}
      />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display No routes to display if there are no routes', () => {
    let wrapper2 = shallow(
      <Place
        key={0}
        place={mockPlace.place}
        closestTown={mockPlace.closestTown}
        climbingId={mockPlace.climbingId}
        routes={[]}
      />
    )

    expect(wrapper2).toMatchSnapshot();
  });









});
import React from 'react';
import Places from '../components/Places';
import { shallow } from 'enzyme';

const mockUpdateFilters = jest.fn();
const mockResults = [
  { 
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
  },
  { 
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
]

describe('SearchForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Places 
        places={mockResults} 
        updateFilters={mockUpdateFilters}
      />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
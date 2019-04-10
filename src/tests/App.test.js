import React from 'react';
import App from '../App.jsx';
import { shallow } from "enzyme";

const mockRoute = { 
  "climbingPlaceId": 1,
  "area": "Brown Cloud Crags",
  "routeName": "Louise",
  "difficultyLevel": "5.8",
  "type": ["sport"] 
}

const mockRoute2 = { 
  "climbingPlaceId": 1,
  "area": "Brown Cloud Crags",
  "routeName": "Louise",
  "difficultyLevel": "5.9",
  "type": ["sport"] 
}

const mockAllowedDifficulties = ["5.8"]

describe("App", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("isRouteDifficultyAllowed Method", () => {
    it("should return true if difficulty is allowed", () => {
      expect(wrapper.instance().isRouteDifficultyAllowed(mockAllowedDifficulties, mockRoute)).toEqual(true);
    });

    it("should return false if difficulty is allowed", () => {
      expect(wrapper.instance().isRouteDifficultyAllowed(mockAllowedDifficulties, mockRoute2)).toEqual(false);
    });
  });

  it("should change filters state when updateFilters is invoked", () => {
    let newFilters = {
      types: ['trad'],
      difficulties: ['5.10b', '5.7'],
      sortOrder: true
    }
    expect(wrapper.state().filters).toEqual({
      types: [],
      difficulties: [],
      sortOrder: true
    });
    wrapper.instance().updateFilters(newFilters);
    expect(wrapper.state().filters).toEqual(newFilters);
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
     	combinedData: null,
      searchQuery: '',
      filters: {
        types: [],
        difficulties: [],
        sortOrder: true
      }
    });
  });
});
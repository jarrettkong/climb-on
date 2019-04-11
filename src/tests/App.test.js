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
  "type": ["trad"] 
}

const mockRoute3 = { 
  "climbingPlaceId": 2,
  "area": "Brown Cloud Crags",
  "routeName": "Louise",
  "difficultyLevel": "5.7",
  "type": ["top-rope"] 
}

const mockRoutes = [mockRoute, mockRoute2, mockRoute3];

const mockPlaces = [
  { 
    "place": "Golden Cliffs",
    "closestTown": "Golden, Colorado",
    "climbingId": 1,
  },
  { 
    "place": "Hot Mess",
    "closestTown": "Denver, Colorado",
    "climbingId": 2,
  }
]

const mockPlacesWithRoutes = [
  { 
    "place": "Golden Cliffs",
    "closestTown": "Golden, Colorado",
    "climbingId": 1,
    "routes": [mockRoute, mockRoute2]
  },
  { 
    "place": "Hot Mess",
    "closestTown": "Denver, Colorado",
    "climbingId": 2,
    "routes": [mockRoute3]
  }
]

const mockAllowedTypes = ["sport"];
const mockAllowedDifficulties = ["5.8"];

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

  describe("mergeData Method", () => {
    it("should return places with routes that match the place id", () => {
      let result = wrapper.instance().mergeData(mockRoutes, mockPlaces);
      expect(result).toEqual(mockPlacesWithRoutes);
    });
  });

  describe("updateSearch Method", () => {
    it("should update searchQuery state when invoked", () => {
      expect(wrapper.state().searchQuery).toEqual('');
      wrapper.instance().updateSearch('Golden');
      expect(wrapper.state().searchQuery).toEqual('Golden');
    });
  });

  describe("searchData Method", () => {
    it("should filter combinedData by the search query", () => {
      let expectedResult = [
        { 
          "place": "Golden Cliffs",
          "closestTown": "Golden, Colorado",
          "climbingId": 1,
          "routes": [mockRoute, mockRoute2]
        }
      ];
      wrapper.state().combinedData = mockPlacesWithRoutes;
      wrapper.instance().updateSearch('Golden');
      let result = wrapper.instance().searchData();
      expect(result).toEqual(expectedResult);
    });
  });

  describe("filterResult Method", () => {
    it("should return places with routes that match the climbing id", () => {
      let placesWithRoutes = wrapper.instance().filterResults(mockPlacesWithRoutes)
      expect(placesWithRoutes).toEqual(mockPlacesWithRoutes)
    });
  });

  describe("filterRoutes Method", () => {
    it("should return all routes if there is no filter criteria", () => {
      let filteredRoutes = wrapper.instance().filterRoutes(mockRoutes);
      expect(filteredRoutes).toEqual(mockRoutes);
    });

    it("should filter by both difficulty and type if they both exist in state", () => {
      let newFilters = {
        types: ['trad'],
        difficulties: ['5.9'],
        sortOrder: true
      }
      wrapper.instance().updateFilters(newFilters);
      let filteredRoutes = wrapper.instance().filterRoutes(mockRoutes);
      expect(filteredRoutes).toEqual([mockRoute2]);
    });

    it("should only filter by difficulty if there is no type filter criteria", () => {
      let newFilters = {
        types: [],
        difficulties: ['5.9'],
        sortOrder: true
      }
      wrapper.instance().updateFilters(newFilters);
      let filteredRoutes = wrapper.instance().filterRoutes(mockRoutes);
      expect(filteredRoutes).toEqual([mockRoute2]);
    });

    it("should only filter by type if there is no difficulty filter criteria", () => {
      let newFilters = {
        types: ['sport'],
        difficulties: [],
        sortOrder: true
      }
      wrapper.instance().updateFilters(newFilters);
      let filteredRoutes = wrapper.instance().filterRoutes(mockRoutes);
      expect(filteredRoutes).toEqual([mockRoute]);
    });
  })

  describe("isRouteTypeAllowed Method", () => {
    it("should return true if the route type is allowed", () => {
      expect(wrapper.instance().isRouteTypeAllowed(mockAllowedTypes, mockRoute)).toEqual(true);
    });

    it("should return false if the route doesn't have any approved types", () => {
      expect(wrapper.instance().isRouteTypeAllowed(mockAllowedTypes, mockRoute2)).toEqual(false);
    });
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
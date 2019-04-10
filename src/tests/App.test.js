import React from 'react';
import App from '../App.jsx';
import { shallow } from "enzyme";

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
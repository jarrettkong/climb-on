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
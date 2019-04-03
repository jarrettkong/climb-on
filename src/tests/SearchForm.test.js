import React from 'react';
import SearchForm from '../components/SearchForm';
import { shallow } from 'enzyme';

const mock_handleSubmit = jest.fn();

describe('SearchForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchForm submitSearch={mock_handleSubmit}/>
    )
  });

  it('should start with an inputValue of an empty string', () => {
    expect(wrapper.state('inputValue')).toEqual('');
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state of inputValue on change', () => {
    expect(wrapper.state()).toEqual({ inputValue: '' })
    wrapper.instance()._handleChange({ target: {value: 'new value' }});
    expect(wrapper.state()).toEqual({ inputValue: 'new value' })
  });
});
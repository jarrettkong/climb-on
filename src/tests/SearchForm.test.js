import React from 'react';
import SearchForm from '../components/SearchForm';
import { shallow } from 'enzyme';

const mock_updateSearch = jest.fn();

describe('SearchForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchForm updateSearch={mock_updateSearch}/>
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
    wrapper.instance()._handleChange({ target: { value: 'new value' }});
    expect(wrapper.state()).toEqual({ inputValue: 'new value' })
  });

  it('should call updateSearch when search form is submitted', () => {
    wrapper.find('.SearchForm-form').simulate('submit', { preventDefault: () => {} });
    expect(mock_updateSearch).toBeCalled();
  });
});




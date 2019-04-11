import React from 'react';
import SideBar from '../components/SideBar';
import { shallow } from 'enzyme';

// updateFilters={this.props.updateFilters}
// const mockFilter = 'top-rope'

describe('SideBar', () => {
 let wrapper;

 // let preventDefault ;
 const mockupdateFilters = jest.fn()

 beforeEach(() => {
   // preventDefault = jest.fn()
   wrapper = shallow(
     <SideBar updateFilters={mockupdateFilters}/>
   )
 });

 it('should match the snapshot with all the data passed in', () => {
  expect(wrapper).toMatchSnapshot();
});
 it('should have the proper default state', () => {
 expect(wrapper.state()).toEqual({filters: {types: [], difficulties: [], sortOrder: true}});
 });



//  it('should update invoke handleSubmit', () => {
//   const preventDefault = jest.fn();
//    wrapper.find('.SideBar-filter-form').simulate('click', { preventDefault })
//     wrapper.instance()._handleSubmit()
//     expect(preventDefault).toBeCalled();

//  });

 //  expect(wrapper.state([filters]'difficulties')).toEqual([]);
 //  wrapper.instance()._handleFilterType({ target: { value: 'top-rope'}});
 //  expect(wrapper.state([filters]'difficulties')).toEqual(['top-rop'])
 // });
 // describe('directly invoking the "incrementCounter" method from component instance', () => {
 //  it('should update the count by 1 when invoked by default', () => {
 //    // const wrapper = shallow(<Home />);
 //    const instance = wrapper.instance();
 //    expect(wrapper.state('filters')).toBe( {
 //     types: [],
 //     difficulties: [],
 //     sortOrder: true
 //   });
 //    instance._handleSubmit();
 //    expect(wrapper.state('filters')).toBe(1);
 //  });


});
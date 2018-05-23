import React from 'react';
import { shallow } from 'enzyme';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });

import Address from './Address';

describe('Component: Address', () => {
  const spy = jest.fn();

  const wrapper = shallow(
    <Address state={spy} />
  );

  it('renders a Address component', () => {
    expect(wrapper.find('#address').exists()).toBe(true);
  });

  it('renders a country dropdown', () => {
    expect(wrapper.find('#country').exists()).toBe(true);
  });

  it('renders a state dropdown', () => {
    expect(wrapper.find('#state').exists()).toBe(true);
  });

  it('renders a city dropdown', () => {
    expect(wrapper.find('#city').exists()).toBe(true);
  });

  it('renders a area dropdown', () => {
    expect(wrapper.find('#area').exists()).toBe(true);
  });

  it('renders a Add to table button', () => {
    expect(wrapper.find('#add').exists()).toBe(true);
  });

  it('renders a clear table button', () => {
    expect(wrapper.find('#clear').exists()).toBe(true);
  });
});

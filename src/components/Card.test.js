import React from 'react';
import { shallow } from 'enzyme';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });

import Card from './Card';

describe('Component: Card', () => {
  const spy = jest.fn();
  var obj = {
    userDetails: {}
  };

  const wrapper = shallow(
    <Card state={obj} />
  );

  it('renders a Card component', () => {
    expect(wrapper.find('#card').exists()).toBe(true);
  });

  it('renders a userId div', () => {
    expect(wrapper.find('#userId').exists()).toBe(true);
  });

  it('renders a get details button', () => {
    expect(wrapper.find('#details').exists()).toBe(true);
  });
});

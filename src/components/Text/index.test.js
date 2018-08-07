import React from 'react';
import { shallow } from 'enzyme';
import Text from './index';

describe('<Text />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Text />);
    const divs = wrapper.find('div');
    console.log('divs', divs);
    expect(divs.length).toEqual(1);
  });
});

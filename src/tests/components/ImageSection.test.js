import React from 'react';
import { shallow } from 'enzyme';
import ImageSection from '../../components/ImageSection';

test('should render Header correctly', () => {
    const wrapper = shallow(<ImageSection />);
    expect(wrapper).toMatchSnapshot();
});

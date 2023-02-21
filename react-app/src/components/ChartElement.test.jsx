import React from 'react';
import { shallow } from 'enzyme';
import ChartElement from './ChartElement';

describe('ChartElement', () => {
    it('should have the correct props', () => {
        const expectedProps = {
            elementId: 'tagId',
            chartOptions: Object,
            onResize: false,
            theme: Object,
        };
        const wrapper = shallow(<ChartElement {...expectedProps} />);
        expect(wrapper.props()).toEqual(expectedProps);
    });    
});
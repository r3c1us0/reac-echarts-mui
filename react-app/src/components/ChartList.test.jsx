import { mount } from 'enzyme';
import dataList from '../data/data.json';
import ChartList from './ChartList';
import { ChartOptions } from './ChartOptions';

describe('ChartList test incoming data to prepare charts', () => {
    it('contains an array of data', () => {
        expect(Array.isArray(dataList)).toBe(true);
    });

    it('an array is not empty and contain at least one item', () => {
        expect(dataList.length).toBeGreaterThan(0);
    });

    it('each item contains an left_bar, right_bar, bar_marker key name', () => {
        dataList.forEach(function(item) {
            expect(item).toHaveProperty('left_bar');
            expect(item).toHaveProperty('right_bar');
            expect(item).toHaveProperty('bar_marker');
        });
    });

    it('renders the correct number of nested components', () => {
        const wrapper = mount(<ChartList />);
        const nestedComponents = wrapper.find('ChartElement');
        expect(nestedComponents).toHaveLength(dataList.length); // assert on the number of instances
    });    

    it('Conver data to Chart Options', () => {
        const chartOptions = new ChartOptions(dataList[0].left_bar, dataList[0].right_bar, dataList[0].bar_marker, null);
        const examOptions = chartOptions.getOptions();
        expect(examOptions.series[0].data[0]).toEqual(32);
        expect(examOptions.series[1].data[0]).toEqual(68);
        expect(examOptions.series[1].markPoint.data[0].coord[0]).toEqual(15);
    });
});
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import 'jsdom-global/register'; // import jsdom-global to provide a browser-like environment
import echarts from 'echarts';

configure({ adapter: new Adapter() });

// set up a global variable for echarts
global.echarts = echarts;

jest.mock('echarts', () => ({
    init: jest.fn(() => ({
      setOption: jest.fn(),
    })),
    setOption: jest.fn(),
}));
  

import { getByText, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import ChartList from './components/ChartList';

describe('<App />', () => {

  test('renders children <ChartList/> component', async () => {
    const { getByText } = render(<ChartList/>);
    expect(getByText('Chart List')).toBeInTheDocument();
    expect(getByText('Below Inv. Average')).toBeInTheDocument();
    expect(getByText('Above Inv. Average')).toBeInTheDocument();
  });

  it('renders the correct number of children', () => {
    const wrapper = shallow(<ChartList />);
    expect(wrapper.children().length).toEqual(2);
  });

});
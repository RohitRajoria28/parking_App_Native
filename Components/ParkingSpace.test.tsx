import React from 'react';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
 
import { render, fireEvent } from '@testing-library/react-native';
import ParkingSpace from './ParkingSpace';

describe('ParkingSpace component', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<ParkingSpace />);
    expect(getByTestId('available-space')).toBeTruthy();
    expect(getByTestId('parking-space-required')).toBeTruthy();
  });

  
});

describe('ParkingSpace component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ParkingSpace />);
  });

  it('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('initializes the state variables correctly', () => {
    expect(wrapper.state('addVehicalFlag')).toEqual(false);
    expect(wrapper.state('time')).toEqual('');
    expect(wrapper.state('availableSpace')).toEqual(10);
    expect(wrapper.state('registrationNumber')).toEqual('');
    expect(wrapper.state('vehicalData')).toEqual([]);
  });

  it('updates the addVehicalFlag state variable correctly', () => {
    expect(wrapper.state('addVehicalFlag')).toEqual(false);
    wrapper.find('[testID="add-vehicle-button"]').simulate('press');
    expect(wrapper.state('addVehicalFlag')).toEqual(true);
  });

  it('updates the vehicalData and availableSpace state variables correctly', () => {
    const registrationNumber = 'ABCD1234';
    wrapper.setState({ registrationNumber });

    expect(wrapper.state('vehicalData')).toEqual([]);
    expect(wrapper.state('availableSpace')).toEqual(10);

    wrapper.find('[testID="add-vehicle-button"]').simulate('press');
    wrapper.find('[testID="submit-vehicle-button"]').simulate('press');

    expect(wrapper.state('vehicalData')).toEqual([registrationNumber]);
    expect(wrapper.state('availableSpace')).toEqual(9);
  });

  it('does not update vehicalData or availableSpace if there is no available space', () => {
    wrapper.setState({ availableSpace: 0 });

    expect(wrapper.state('vehicalData')).toEqual([]);
    expect(wrapper.state('availableSpace')).toEqual(0);

    wrapper.find('[testID="add-vehicle-button"]').simulate('press');
    wrapper.find('[testID="submit-vehicle-button"]').simulate('press');

    expect(wrapper.state('vehicalData')).toEqual([]);
    expect(wrapper.state('availableSpace')).toEqual(0);

    expect(wrapper.find('Alert')).toHaveLength(1);
  });

  it('updates the time state variable correctly', () => {
    const time = '12:00 PM';
    wrapper.find('[testID="time-input"]').simulate('changeText', time);
    expect(wrapper.state('time')).toEqual(time);
  });

  it('updates the registrationNumber state variable correctly', () => {
    const registrationNumber = 'ABCD1234';
    wrapper.find('[testID="registration-number-input"]').simulate('changeText', registrationNumber);
    expect(wrapper.state('registrationNumber')).toEqual(registrationNumber);
  });
});
 
describe('ParkingSpace Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ParkingSpace />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('initializes state variables correctly', () => {
    const state = wrapper.instance().state;
    expect(state.addVehicalFlag).toBe(false);
    expect(state.time).toBe('');
    expect(state.availableSpace).toBe(10);
    expect(state.registrationNumber).toBe('');
    expect(state.vehicalData).toEqual([]);
  });

  it('updates availableSpace state when a new vehicle is added', () => {
    const setStateSpy = jest.spyOn(wrapper.instance(), 'setState');
    const addButton = wrapper.find({ testID: 'add-vehicle-button' });
    addButton.simulate('press');
    const regNumberInput = wrapper.find({ testID: 'registration-number-input' });
    regNumberInput.simulate('changeText', 'ABC123');
    const addButton2 = wrapper.find({ testID: 'add-button' });
    addButton2.simulate('press');
    expect(setStateSpy).toHaveBeenCalledWith(
      expect.objectContaining({ availableSpace: 9, vehicalData: ['ABC123'] })
    );
  });
});

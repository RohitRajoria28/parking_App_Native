import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Components/Home';

describe('Home Component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

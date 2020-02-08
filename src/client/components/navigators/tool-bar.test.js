import Chance from 'chance';
import React from 'react';
import { render } from '@testing-library/react';
import ToolBar from './tool-bar';

const chance = new Chance();
const generateNavButton = () => jest.fn(() => (
  <button type="button">
    {chance.string()}
  </button>
));
describe('<ToolBar/>', () => {
  test('should be truthy', () => {
    expect(ToolBar).toBeTruthy();
  });

  describe('When toolbar brings in children', () => {
    let expectedNavButtons;
    let numberOfNavButtons;

    beforeEach(() => {
      numberOfNavButtons = chance.d10();
      expectedNavButtons = [];
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    test('should call map on the given property for a given amount of times', () => {
      expectedNavButtons = chance.n(generateNavButton, numberOfNavButtons);
      expectedNavButtons.map = jest.fn();
      const value = render(<ToolBar>{expectedNavButtons}</ToolBar>);
      expect(value).toBeTruthy();
    });

    test('should not call map on an empty property array', () => {
      expectedNavButtons = [];
      expectedNavButtons.map = jest.fn();
      render(<ToolBar>{expectedNavButtons}</ToolBar>);
      expect(expectedNavButtons.map).toHaveBeenCalledTimes(1);
    });
  });
});

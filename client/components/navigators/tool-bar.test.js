import Chance from 'chance';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ToolBar from './tool-bar';

const chance = new Chance();
const generateNavButton = () => (
  <button key={chance.natural()} type="button">
    {chance.string()}
  </button>
);

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
      cleanup();
      jest.resetAllMocks();
    });

    test('should call map on the given property for a given amount of times', () => {
      let i = 0;
      for (; i < numberOfNavButtons; i += 1) {
        expectedNavButtons.push(generateNavButton());
      }
      expectedNavButtons.map = jest.fn();
      render(<ToolBar>{expectedNavButtons}</ToolBar>);
      expect(expectedNavButtons.map).toHaveBeenCalled();
    });

    test('should not call map on an empty property array', () => {
      expectedNavButtons = [];
      expectedNavButtons.map = jest.fn();
      render(<ToolBar>{expectedNavButtons}</ToolBar>);
      expect(expectedNavButtons.map).toHaveBeenCalledTimes(1);
    });

    test('should default ot an empty property array when nothing is passed in', () => {
      expectedNavButtons = {};
      expectedNavButtons.map = jest.fn();
      render(<ToolBar>{expectedNavButtons}</ToolBar>);
      expect(expectedNavButtons.map).toHaveBeenCalledTimes(1);
    });
  });
});

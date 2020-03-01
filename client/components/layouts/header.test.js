import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';

import Header from './header';

const chance = new Chance();

describe('<Header/>', () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      title: chance.name(),
      children: chance.name(),
    };
  });

  afterEach(() => jest.resetAllMocks());

  describe('When header is given a title prop', () => {
    test('should display title', () => {
      render(<Header title={expectedProps.title} />);

      expect(screen.queryByText(expectedProps.title)).toBeTruthy();
    });
  });

  describe('When header is not given a title prop', () => {
    test('should not display a title', () => {
      render(<Header />);

      expect(screen.queryByText(expectedProps.title)).toBeNull();
    });
  });

  describe('When a child is provided', () => {
    test('should display the child component', () => {
      render(<Header>{expectedProps.children}</Header>);

      expect(screen.queryByText(expectedProps.children)).toBeTruthy();
    });
  });

  describe('When a child is not provided', () => {
    test('should not display a child component', () => {
      render(<Header />);

      expect(screen.queryByText(expectedProps.children)).toBeNull();
    });
  });
});

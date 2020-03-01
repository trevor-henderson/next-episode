import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import FrontPageToolBar from './front-page-tool-bar';

describe('<FrontPageToolBar/>', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('When user is signed on', () => {
    test('should be truthy', () => {
      render(<FrontPageToolBar isSignedOn />);
      expect(screen.queryByText('Home Page')).toBeTruthy();
    });
  });

  describe('When user is not signed on', () => {
    test('should return null', () => {
      render(<FrontPageToolBar isSignedOn={false} />);

      expect(screen.queryByText('Home Page')).toBeNull();
    });
  });
});

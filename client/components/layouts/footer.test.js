import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './footer';

describe('<Footer/>', () => {
  afterEach(jest.resetAllMocks);

  describe('When Footer is rendered', () => {
    test('Should display its contributors names', () => {
      render(<Footer />);

      expect(screen.queryByText('Trevor Henderson')).toBeTruthy();
    });
  });
});

import React from 'react';
import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import FrontPageLayout from './front-page-layout';

describe('<FooterPageLayout', () => {
  test('should be exists when rendered', () => {
    const container = render(<FrontPageLayout />);

    expect(container).toBeTruthy();
  });
});

import React from 'react';
import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import Content from './content';

describe('<Content/>', () => {
  test('should be exists when rendered', () => {
    const container = render(<Content />);

    expect(container).toBeTruthy();
  });
});

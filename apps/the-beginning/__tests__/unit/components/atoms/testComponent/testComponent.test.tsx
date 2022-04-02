import React from 'react';
import { render } from '@testing-library/react';
import testComponent from '@components/atoms/testComponent';

test('renders', () => {
  render(<testComponent />);
});
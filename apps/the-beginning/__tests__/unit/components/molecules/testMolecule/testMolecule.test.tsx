import React from 'react';
import { render } from '@testing-library/react';
import testMolecule from '@components/molecules/testMolecule';

test('renders', () => {
  render(<testMolecule />);
});
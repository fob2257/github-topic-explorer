import React from 'react';
import { render, screen } from '@testing-library/react';

import Layout from './Layout';

describe('<Layout />', () => {
  it('should render correctly', () => {
    render(<Layout>hello</Layout>);

    const element = screen.getByText('hello');

    expect(element).toBeInTheDocument();
  });
});

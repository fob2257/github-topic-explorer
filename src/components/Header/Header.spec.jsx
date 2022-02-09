import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Header from './Header';

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />);

    const formElement = screen.getByRole('form', { name: 'search form' });

    expect(formElement).toBeInTheDocument();
  });

  it('should value typing on search bar', () => {
    render(<Header />);

    const inputElement = screen.getByRole('textbox', { name: 'search input' });
    const value = 'python';

    fireEvent.change(inputElement, { target: { value } });
    expect(inputElement.value).toBe(value);
  });

  it('should submit typed value', () => {
    const mockedSubmit = jest.fn(() => {});

    render(<Header onSubmit={mockedSubmit} />);

    const formElement = screen.getByRole('form', { name: 'search form' });
    const inputElement = screen.getByRole('textbox', { name: 'search input' });
    const value = 'python';

    formElement.onsubmit = mockedSubmit;

    fireEvent.change(inputElement, { target: { value } });
    fireEvent.submit(formElement);

    expect(inputElement.value).toBe(value);
    expect(mockedSubmit).toHaveBeenCalled();
  });
});

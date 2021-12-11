import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render', () => {
    render(<App />);

    expect(screen.queryByText('Buy Teddy Bear')).toBeInTheDocument();
    expect(screen.queryByLabelText('Email')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.queryByLabelText('Card information')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('0000 0000 0000 0000')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('MM/YY')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('CVC')).toBeInTheDocument();
    expect(screen.queryByLabelText('Name on card')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.queryByLabelText('Country or region')).toBeInTheDocument();
    expect(screen.queryByText('Pay $55.00')).toBeInTheDocument();
  });

  it('should focused email input', () => {
    render(<App />);

    expect(screen.queryByPlaceholderText('Email')).toHaveFocus();
  });

  it('should be able to fill input fields', () => {
    render(<App />);

    const emailInput = screen.getByLabelText('Email');
    const cardNumberInput = screen.getByLabelText('Card information');
    const expireDateInput = screen.getByPlaceholderText('MM/YY');
    const cvcInput = screen.getByPlaceholderText('CVC');
    const nameInput = screen.getByLabelText('Name on card');
    const countrySelect = screen.getByLabelText('Country or region');

    fireEvent.change(emailInput, { target: { value: 'Test@test.com' } });
    fireEvent.change(cardNumberInput, { target: { value: '1234 4567 7899 8765' } });
    fireEvent.change(expireDateInput, { target: { value: '04/93' } });
    fireEvent.change(cvcInput, { target: { value: '123' } });
    fireEvent.change(nameInput, { target: { value: 'Test' } });
    fireEvent.change(countrySelect, { target: { value: 'Latvia' } });

    expect(emailInput).toHaveValue('Test@test.com');
    expect(cardNumberInput).toHaveValue('1234 4567 7899 8765');
    expect(expireDateInput).toHaveValue('04/93');
    expect(cvcInput).toHaveValue('123');
    expect(nameInput).toHaveValue('Test');
    expect(countrySelect).toHaveValue('Latvia');
  });

  it('should be able to change select value', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Country'));
    expect(screen.getAllByLabelText('Countries')[0]).toBeInTheDocument();
    fireEvent.click(screen.getAllByLabelText('Countries')[2]);
    expect(screen.getByText('Estonia')).toBeInTheDocument();
  });

  it('should be able click button', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Pay $55.00'));
  });
});

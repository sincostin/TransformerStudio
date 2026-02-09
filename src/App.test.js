// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Transformer title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Transformer/i);
    expect(titleElement).toBeInTheDocument();
});

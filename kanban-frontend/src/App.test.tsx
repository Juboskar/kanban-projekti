import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('Application renders', () => {
  render(<App />);
  const title = screen.getByText(/Kanban tool for project management/);
  expect(title).toBeInTheDocument();
});

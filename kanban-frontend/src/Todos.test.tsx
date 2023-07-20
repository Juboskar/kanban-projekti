import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Todos from './Todos';
import { QueryClient, QueryClientProvider } from 'react-query';

test('renders content', () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );

  const element = screen.getByText('Todos');
  expect(element).toBeDefined();
});

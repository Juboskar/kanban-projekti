import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Todos from './Todos';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
};

export default App;

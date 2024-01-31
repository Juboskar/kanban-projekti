import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import LandingPage from './pages/LandingPage';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <LandingPage />
      </div>
    </QueryClientProvider>
  );
};

export default App;

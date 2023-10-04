import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import LandingPage from './pages/LandingPage';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-mono tracking-wide">
        <LandingPage />
      </div>
    </QueryClientProvider>
  );
};

export default App;

import React from 'react';
import SignUpForm from './components/SignUpForm';
import Card from '../../components/Card';

const LandingPage = () => {
  return (
    <div>
      <h1 className="max-w-sm p-4 align-baseline text-4xl">
        Kanban tool for project management
      </h1>
      <div className="pt-16">
        <Card>
          <SignUpForm />
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;

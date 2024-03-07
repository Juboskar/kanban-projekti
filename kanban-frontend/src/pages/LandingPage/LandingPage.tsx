import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import Card from '../../components/Card';
import CardNavigation from './components/CardNavigation';

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <div>
      <h1 className="max-w-sm p-4 align-baseline text-4xl">
        Kanban tool for project management
      </h1>
      <div className="py-16">
        <CardNavigation setShowLogin={setShowLogin} showLogin={showLogin} />
        <Card>
          {!showLogin && <SignUpForm />}
          {showLogin && <p>todo login</p>}
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;

import React from 'react';

type Props = {
  setShowLogin: (showLogin: boolean) => void;
  showLogin: boolean;
};

const CardNavigation = ({ setShowLogin, showLogin }: Props) => {
  if (showLogin) {
    return (
      <div className="relative top-2">
        <nav
          className="m-auto grid max-w-sm grid-flow-col justify-stretch 
          overflow-hidden rounded-t-lg border-2 border-b-0 border-gray-600
          bg-white"
        >
          <button
            className="flex skew-x-[-45deg] justify-center border-b-2 
            border-solid border-gray-600 p-4 hover:font-bold"
            onClick={() => setShowLogin(false)}
          >
            <span className="skew-x-[45deg]">SIGN UP</span>
          </button>
          <div
            className="flex skew-x-[-45deg] justify-center  border-l-2 
            border-gray-600 p-4 shadow-[-3px_0px_2px_0px] shadow-gray-500"
          >
            <span className="skew-x-[45deg]">LOG IN</span>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="relative top-2">
      <nav
        className="m-auto grid max-w-sm grid-flow-col justify-stretch 
        overflow-hidden rounded-t-lg border-2 border-b-0 border-gray-600
        bg-white"
      >
        <div
          className="flex skew-x-[45deg] justify-center border-r-2 border-solid
          border-gray-600 p-4 shadow-[3px_0px_2px_0px] shadow-gray-500"
        >
          <span className="skew-x-[-45deg]">SIGN UP</span>
        </div>
        <button
          className="flex skew-x-[45deg] justify-center border-b-2 
          border-gray-600 p-4 hover:font-bold"
          onClick={() => setShowLogin(true)}
        >
          <span className="skew-x-[-45deg]">LOG IN</span>
        </button>
      </nav>
    </div>
  );
};

export default CardNavigation;

import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Large screen: show simulated mobile screen */}
      <div className="hidden lg:block border border-gray-300 rounded-md bg-gray-100 shadow-lg">
        <div className="w-[360px] h-[700px] flex flex-col justify-end p-6">
          <WelcomeContent navigate={navigate} />
        </div>
      </div>

      {/* Mobile screen: real full-screen layout */}
      <div className="block lg:hidden min-h-screen w-full flex flex-col justify-end bg-gray-100 p-6">
        <WelcomeContent navigate={navigate} />
      </div>
    </div>
  );
};

const WelcomeContent = ({ navigate }) => (
  <>
    <div className="mb-8">
      <h1 className="text-xl font-semibold text-gray-900">Welcome to PopX</h1>
      <p className="mt-2 text-sm text-gray-600 leading-snug">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>
    </div>

    <div className="space-y-3">
      <button
        onClick={() => navigate('/create-account')}
        className="w-full py-3 text-white bg-purple-600 rounded-md font-medium hover:bg-purple-700"
      >
        Create Account
      </button>
      <button
        onClick={() => navigate('/login')}
        className="w-full py-3 bg-purple-100 text-purple-700 rounded-md font-medium hover:bg-purple-200"
      >
        Already Registered? Login
      </button>
    </div>
  </>
);

export default WelcomePage;

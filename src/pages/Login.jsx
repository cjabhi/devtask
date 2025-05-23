import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Large screen: show simulated mobile screen */}
      <div className="hidden lg:block border border-gray-300 rounded-md bg-gray-50 shadow-lg">
        <div className="w-[360px] h-[700px] flex flex-col justify-start p-6">
          <Formcontent navigate={navigate} />
        </div>
      </div>

      {/* Mobile screen: real full-screen layout */}
      <div className="block lg:hidden min-h-screen w-full flex flex-col justify-start bg-gray-100 p-6">
        <Formcontent navigate={navigate} />
      </div>
    </div>
  );
};


const Formcontent = ({ navigate }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in:', { email, password });
    navigate('/profile')
    // navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md relative">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Signin to your <br />PopX account
      </h2>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Email Input with floating label */}
      <div className="relative mb-4">
        <label
          htmlFor="email"
          className="absolute -top-2 left-3 px-1 text-sm font-semibold text-purple-600 bg-gray-50 z-10"
        >
          Email Address<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 pt-4 pb-2 border border-gray-300 rounded-md outline-none placeholder-gray-400 bg-gray-50"
          required
        />
      </div>

      {/* Password Input with floating label */}
      <div className="relative mb-6">
        <label
          htmlFor="password"
          className="absolute -top-2 left-3 px-1 text-sm font-semibold text-purple-600 bg-gray-50 z-10"
        >
          Password<span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 pt-4 pb-2 border border-gray-300 rounded-md outline-none placeholder-gray-400 bg-gray-50"
          required
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-2 font-semibold rounded-md transition-colors duration-200 ${
          isFormValid
            ? 'bg-green-500 text-white cursor-pointer'
            : 'bg-gray-300 text-white cursor-not-allowed'
        }`}
      >
        Login
      </button>
    </form>
  );
};



export default Login;

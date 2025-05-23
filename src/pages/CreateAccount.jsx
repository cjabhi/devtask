import React , { useState} from 'react';
import { useNavigate } from 'react-router-dom';


const CreateAccount = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Large screen: show simulated mobile screen */}
      <div className="hidden lg:block border border-gray-300 rounded-md bg-gray-50 shadow-lg">
        <div className="w-[360px] h-[700px] flex flex-col justify-start p-6">
          <SignupForm navigate={navigate} />
        </div>
      </div>

      {/* Mobile screen: real full-screen layout */}
      <div className="block lg:hidden min-h-screen w-full flex flex-col justify-start bg-gray-100 p-6">
        <SignupForm navigate={navigate} />
      </div>
    </div>
  );
};

const SignupForm = ({navigate}) => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });

   const isFormValid =
    form.fullName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.password.trim() &&
    form.isAgency.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRadioChange = (value) => {
    setForm({ ...form, isAgency: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Implement submission logic
    navigate('/profile')
  };

  const inputStyle = "w-full px-3 pt-4 pb-2 mb-2 border border-gray-300 rounded-md outline-none placeholder-gray-400 bg-gray-50";

  const floatingLabel = "absolute -top-2 left-3 px-1 text-sm font-semibold text-purple-600 bg-gray-50 z-10";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create your<br />PopX account</h2>

      {/* Full Name */}
      <div className="relative mb-4">
        <label className={floatingLabel}>Full Name<span className="text-red-500">*</span></label>
        <input
          type="text"
          name="fullName"
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>

      {/* Phone Number */}
      <div className="relative mb-4">
        <label className={floatingLabel}>Phone number<span className="text-red-500">*</span></label>
        <input
          type="text"
          name="phone"
          placeholder="Marry Doe"
          value={form.phone}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>

      {/* Email Address */}
      <div className="relative mb-4">
        <label className={floatingLabel}>Email address<span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          placeholder="Marry Doe"
          value={form.email}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>

      {/* Password */}
      <div className="relative mb-4">
        <label className={floatingLabel}>Password <span className="text-red-500">*</span></label>
        <input
          type="password"
          name="password"
          placeholder="Marry Doe"
          value={form.password}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>

      {/* Company Name */}
      <div className="relative mb-4">
        <label className={floatingLabel}>Company name</label>
        <input
          type="text"
          name="company"
          placeholder="Marry Doe"
          value={form.company}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      {/* Radio Buttons */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700">
          Are you an Agency?<span className="text-red-500">*</span>
        </label>
        <div className="mt-2 flex items-center gap-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === 'yes'}
              onChange={() => handleRadioChange('yes')}
              className="form-radio text-purple-600"
              required
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === 'no'}
              onChange={() => handleRadioChange('no')}
              className="form-radio text-purple-600"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
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
        Create Account
      </button>
    </form>
  );
};



export default CreateAccount;

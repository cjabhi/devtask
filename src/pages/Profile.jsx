import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Large screen: simulated mobile view */}
      <div className="hidden lg:block border border-gray-300 rounded-md bg-gray-100 shadow-md">
        <div className="w-[360px] h-[700px] flex flex-col justify-start">
          <Setting navigate={navigate} />
        </div>
      </div>

      {/* Mobile screen: real layout */}
      <div className="block lg:hidden min-h-screen w-full flex flex-col justify-start bg-gray-100">
        <Setting navigate={navigate} />
      </div>
    </div>
  );
};

const Setting = ({ navigate }) => {
  return (
    <div>
      <div className="border-b border-gray-200 px-6 py-4 bg-white">
        <h2 className="text-gray-700 text-base font-medium">Account Settings</h2>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-14 h-14">
            <img
              src="./profilepicture.png"
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 p-[4px] rounded-full">
              <Camera size={12} color="white" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-800">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      <hr className="border-t border-dotted border-gray-500" />

    </div>
  );
};

export default Profile;

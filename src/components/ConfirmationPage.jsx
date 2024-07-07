import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className="bg-orange-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold text-center mb-8">Appointment Confirmed</h2>
          <div className="mb-4">
            <p className="text-gray-700"><span className="font-bold">Name:</span> {formData.name}</p>
            <p className="text-gray-700"><span className="font-bold">Email:</span> {formData.email}</p>
            <p className="text-gray-700"><span className="font-bold">Phone Number:</span> {formData.phone}</p>
            <p className="text-gray-700"><span className="font-bold">Date:</span> {formData.date}</p>
            <p className="text-gray-700"><span className="font-bold">Service:</span> {formData.service}</p>
            <p className="text-gray-700"><span className="font-bold">Expert:</span> {formData.expert}</p>
            <p className="text-gray-700"><span className="font-bold">Message:</span> {formData.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

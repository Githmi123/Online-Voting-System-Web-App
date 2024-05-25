import React from 'react';

const PersonalDetailsForm = ({ handleNext, handleChange, personalDetails }) => {
  return (
    <div>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={personalDetails.firstName}
        onChange={handleChange}
      />

      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={personalDetails.lastName}
        onChange={handleChange}
      />

      <label>Date of Birth:</label>
      <input
        type="text"
        name="dOB"
        value={personalDetails.dOB}
        onChange={handleChange}
      />

      <label>NIC:</label>
      <input
        type="text"
        name="nIC"
        value={personalDetails.nIC}
        onChange={handleChange}
      />

      <label>Contact Number:</label>
      <input
        type="text"
        name="contactNumber"
        value={personalDetails.contactNumber}
        onChange={handleChange}
      />

      <label>Stakeholder Role:</label>
      <input
        type="text"
        name="stakeholderRole"
        value={personalDetails.stakeholderRole}
        onChange={handleChange}
      />

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalDetailsForm;

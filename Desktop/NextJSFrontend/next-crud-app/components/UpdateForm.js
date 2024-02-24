// Example: components/UpdateForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateForm = () => {
  const [formData, setFormData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await axios.put(`/api/update/${formData.id}`, formData);
      setSuccessMessage('Item updated successfully!');
    } catch (error) {
      setError('An error occurred while updating the item.');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        {/* Form fields for update */}
        <button type="submit" disabled={isUpdating}>Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;

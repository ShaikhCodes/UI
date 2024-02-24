// Example: components/CreateForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateForm = () => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await axios.post('/api/create', formData);
      setSuccessMessage('Item created successfully!');
    } catch (error) {
      setError('An error occurred while creating the item.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit" disabled={isSubmitting}>Create</button>
      </form>
    </div>
  );
};

export default CreateForm;

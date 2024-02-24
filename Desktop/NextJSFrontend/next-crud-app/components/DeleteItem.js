// Example: components/DeleteItem.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteItem = ({ id }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await axios.delete(`/api/delete/${id}`);
      setSuccessMessage('Item deleted successfully!');
    } catch (error) {
      setError('An error occurred while deleting the item.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <button onClick={handleDelete} disabled={isDeleting}>Delete</button>
    </div>
  );
};

export default DeleteItem;

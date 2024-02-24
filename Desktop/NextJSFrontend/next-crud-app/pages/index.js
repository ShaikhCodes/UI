// pages/index.js
import React, { useState, useEffect } from 'react'; // Import useEffect
import CreateForm from '../components/CreateForm';
import ReadData from '../components/ReadData';
import UpdateForm from '../components/UpdateForm';
import DeleteItem from '../components/DeleteItem';

const Home = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [data, setData] = useState([]); // Define data state

  const handleItemClick = (id) => {
    setSelectedItemId(id);
  };

  // Fetch data function
  const fetchData = async () => {
    try {
      // Fetch data from your API
      const response = await fetch('/api/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CreateForm />
      <ReadData />
      <ul>
        {/* Assuming data is an array of objects with id property */}
        {data.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
      {selectedItemId && (
        <>
          <UpdateForm id={selectedItemId} />
          <DeleteItem id={selectedItemId} />
        </>
      )}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminAssetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiEndpoints = [
    "https://onegrcirabackend.onrender.com/catone/catoneget",
    "https://onegrcirabackend.onrender.com/cattwo/cattwoget",
    "https://onegrcirabackend.onrender.com/catthree/catthreeget",
    "https://onegrcirabackend.onrender.com/catfour/catfourget",
    "https://onegrcirabackend.onrender.com/catfive/catfiveget",
    "https://onegrcirabackend.onrender.com/catsix/catsixget",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          apiEndpoints.map(async (endpoint) => {
            const response = await axios.get(endpoint);
            return response.data;
          })
        );

        setData(responses);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map((apiData, index) => (
        <div key={index}>
          <h3>Table {index + 1}</h3>
          <table>
            <thead>
              <tr>
                <th>IAR Category</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item, itemIndex) => (
                <tr key={itemIndex}>
                  <td>{item.iarCategory}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AdminAssetData;

import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminAssetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get("http://localhost:8000/catone/catoneget");
        const response2 = await axios.get("http://localhost:8000/cattwo/cattwoget");
        const response3 = await axios.get("http://localhost:8000/catthree/catthreeget");
        const response4 = await axios.get("http://localhost:8000/catfour/catfourget");
        const response5 = await axios.get("http://localhost:8000/catfive/catfiveget");
        const response6 = await axios.get("http://localhost:8000/catsix/catsixget");

        // ... fetch data from other APIs

        // Organize and merge data from different APIs into a single array
        const mergedData = [
          ...response1.data,
          ...response2.data,
          ...response3.data,
          ...response4.data,
          ...response5.data,
          ...response6.data,
          // ... data from other APIs
        ];

        setData(mergedData);
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
      <table>
        <thead>
          <tr>
            <th>IAR Category</th>
            <th>Asset Categories</th>
            <th>IAR Category Two</th>
            <th>Impact Heads</th>
            <th>Assets List</th>
            <th>Asset Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.iarCategory}</td>
              <td>{item.assetCategories ? item.assetCategories : "-"}</td>
              <td>{item.iarCategoryTwo}</td>
              <td>{item.impactHeads ? item.impactHeads : "-"}</td>
              <td>{item.assetsList ? item.assetsList : "-"}</td>
              <td>{item.assetCategory ? item.assetCategory : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAssetData;

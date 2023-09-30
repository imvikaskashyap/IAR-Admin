import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Category } from '@mui/icons-material';

const AdminAssets = () => {
  const [iarCategory, setIarCategory] = useState('');
  const [assetCategories, setAssetCategories] = useState('');
  const [iarCategoryTwo, setIarCategoryTwo] = useState('');
  const [impactHeads, setImpactHeads] = useState('');
  const [assetsList, setassetsList] = useState('');
  const [assetCategory, setassetCategory] = useState('');

  const handleIarCategorySubmit = async () => {
    try {
      await axios.post('http://localhost:8000/catone/catonesave', { iarCategory });
      // Handle success, for example show a success message to the user
      alert("Category Added Proceed to Next")
    } catch (error) {
      // Handle error, show an error message to the user
    }
  };

  const handleAssetCategoriesSubmit = async () => {
    try {
      await axios.post('http://localhost:8000/cattwo/cattwosave', { assetCategories });
      // Handle success
      alert("Category Added Proceed to Next")
    } catch (error) {
      // Handle error
    }
  };

  const handleIarCategoryTwoSubmit = async () => {
    try {
      await axios.post('http://localhost:8000/catthree/catthreesave', { iarCategoryTwo });
      // Handle success, for example show a success message to the user
      alert("Category Added Proceed to Next")
    } catch (error) {
      // Handle error, show an error message to the user
    }
  };

  const handleImpactHeadsSubmit = async () => {
    try {
      await axios.post('http://localhost:8000/catfour/catfoursave', { impactHeads });
      // Handle success
      alert("Category Added Proceed to Next")

    } catch (error) {
      // Handle error
    }
  };

  const handleassetsListSubmit = async () => {
    try {
      await axios.post('http://localhost:8000/catfive/catfivesave', { assetsList });
      // Handle success
      alert("Category Added Proceed to Next")

    } catch (error) {
      // Handle error
    }
  };

  const handleassetCategorySubmit = async () => {
    try {
      await axios.post('http://localhost:8000/catsix/catsixsave', { assetCategory });
      // Handle success
      alert("Final Category Added Click ok To finish")

    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <div style={{}}>
        <TextField
          sx={{ ml: 5, mt: 1, textAlign: 'center' }}
          id="iar-category"
          label="IAR-Category"
          variant="outlined"
          value={iarCategory}
          onChange={(e) => setIarCategory(e.target.value)}
        />

        <Button
          sx={{ ml: 5, mt: 2.5, textAlign: 'center' }}
          variant="contained"
          onClick={handleIarCategorySubmit}
        >
          Add
        </Button>
      </div>
      <div style={{}}>
        <TextField
          sx={{ ml: 5, mt: 1, textAlign: 'center' }}
          id="asset-category"
          label="Asset-Category"
          variant="outlined"
          value={assetCategories}
          onChange={(e) => setAssetCategories(e.target.value)}
        />

        <Button
          sx={{ ml: 5, mt: 2.5, textAlign: 'center' }}
          variant="contained"
          onClick={handleAssetCategoriesSubmit}
        >
          Add
        </Button>
      </div>
      <div style={{}}>
        <TextField
          sx={{ ml: 5, mt: 1, textAlign: 'center' }}
          id="iar-category"
          label="IAR-Category"
          variant="outlined"
          value={iarCategoryTwo}
          onChange={(e) => setIarCategoryTwo(e.target.value)}
        />

        <Button
          sx={{ ml: 5, mt: 2.5, textAlign: 'center' }}
          variant="contained"
          onClick={handleIarCategoryTwoSubmit}
        >
          Add
        </Button>
      </div>
      <div style={{}}>
        <TextField
          sx={{ ml: 5, mt: 1, textAlign: 'center' }}
          id="impact-heads"
          label="Impact-Heads"
          variant="outlined"
          value={impactHeads}
          onChange={(e) => setImpactHeads(e.target.value)}
        />

        <Button
          sx={{ ml: 5, mt: 2.5, textAlign: 'center' }}
          variant="contained"
          onClick={handleImpactHeadsSubmit}
        >
          Add
        </Button>
      </div>
      <div style={{}}>
        <TextField
          sx={{ ml: 5, mt: 1, textAlign: 'center' }}
          id="asset-list"
          label="Asset-List"
          variant="outlined"
          value={assetsList}
          onChange={(e) => setassetsList(e.target.value)}
        />

        <Button
          sx={{ ml: 5, mt: 2.5, textAlign: 'center' }}
          variant="contained"
          onClick={handleassetsListSubmit}
        >
          Add
        </Button>
      </div>
      <div style={{}}>
        <TextField
          sx={{ ml: 5, mt: 1, textAlign: 'center' }}
          id="asset-category-text"
          label="Asset-Category-Text"
          variant="outlined"
          value={assetCategory}
          onChange={(e) => setassetCategory(e.target.value)}
        />

        <Button
          sx={{ ml: 5, mt: 2.5, textAlign: 'center' }}
          variant="contained"
          onClick={handleassetCategorySubmit}
        >
          Add
        </Button>
      </div>
    </>
  );
};

export default AdminAssets;

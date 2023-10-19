import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import axios from 'axios';

const AdminAssets = () => {
  // const [iarCategory, setIarCategory] = useState('');
  const [parTypes, setParTypes] = useState('');
  // const [assetCategories, setAssetCategories] = useState('');
  const [parSubTypes, setParSubTypes] = useState('');
  // const [iarCategoryTwo, setIarCategoryTwo] = useState('');

  const [parSelect, setParSelect] = useState('');

  // const [impactHeads, setImpactHeads] = useState('');
  // const [assetsList, setassetsList] = useState('');
  // const [assetCategory, setassetCategory] = useState('');
  const [select, setSelect] = useState('');
  const [rows, setRows] = React.useState([
    {
      id: 1,
      serialNo: 1,
      selectedIARCategory: '',
      selectedIARCategories: '',
      selectedImpactHeads: '',
      selectedAssetsList: '',
      selectedAssetCategory: '',
      selectedAssetCategories: '',
    },
    {
      id: 2,
      serialNo: 2,
      selectedIARCategory: '',
      selectedIARCategories: '',
      selectedImpactHeads: '',
      selectedAssetsList: '',
      selectedAssetCategory: '',
      selectedAssetCategories: '',
    },
    {
      id: 3,
      serialNo: 3,
      selectedIARCategory: '',
      selectedIARCategories: '',
      selectedImpactHeads: '',
      selectedAssetsList: '',
      selectedAssetCategory: '',
      selectedAssetCategories: '',
    },
    {
      id: 4,
      serialNo: 4,
      selectedIARCategory: '',
      selectedIARCategories: '',
      selectedImpactHeads: '',
      selectedAssetsList: '',
      selectedAssetCategory: '',
      selectedAssetCategories: '',
    },
    {
      id: 5,
      serialNo: 5,
      selectedIARCategory: '',
      selectedIARCategories: '',
      selectedImpactHeads: '',
      selectedAssetsList: '',
      selectedAssetCategory: '',
      selectedAssetCategories: '',
    },
  ]);

  const [PARTypes, setPARTypes] = useState([]);
  const getParTypes = async () => {
    const parSubTypes = await axios.get('https://onegrcirabackend.onrender.com/cattwo/cattwoget');
  };

  const handleIarCategorySubmit = async () => {
    try {
      await axios.post('https://onegrcirabackend.onrender.com/catone/catonesave', { parTypes });

      // Handle success, for example show a success message to the user
      alert('Category Added Proceed to Next');
    } catch (error) {
      // Handle error, show an error message to the user
    }
  };

  const handleAssetCategoriesSubmit = async () => {
    try {
      await axios.post('https://onegrcirabackend.onrender.com/cattwo/cattwosave', {
        parSubTypes,
        parSelect,
      });
      // Handle success
      alert('Category Added Proceed to Next');
    } catch (error) {
      // Handle error
    }
  };

  // const handleIarCategoryTwoSubmit = async () => {
  //   try {
  //     await axios.post('https://onegrcirabackend.onrender.com/catthree/catthreesave', { parTypes: iarCategoryTwo });
  //     // Handle success, for example show a success message to the user
  //     alert('Category Added Proceed to Next');
  //   } catch (error) {
  //     // Handle error, show an error message to the user
  //   }
  // };

  // const handleImpactHeadsSubmit = async () => {
  //   try {
  //     await axios.post('https://onegrcirabackend.onrender.com/catfour/catfoursave', { parTypes: impactHeads });
  //     // Handle success
  //     alert('Category Added Proceed to Next');
  //   } catch (error) {
  //     // Handle error
  //   }
  // };

  // const handleassetsListSubmit = async () => {
  //   try {
  //     await axios.post('https://onegrcirabackend.onrender.com/catfive/catfivesave', { parTypes: assetsList });
  //     // Handle success
  //     alert('Category Added Proceed to Next');
  //   } catch (error) {
  //     // Handle error
  //   }
  // };

  // const handleassetCategorySubmit = async () => {
  //   try {
  //     await axios.post('https://onegrcirabackend.onrender.com/catsix/catsixsave', { parTypes: assetCategory });
  //     // Handle success
  //     alert('Final Category Added Click ok To finish');
  //   } catch (error) {
  //     // Handle error
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parTypes = await axios.get('https://onegrcirabackend.onrender.com/catone/catoneget');
        const parSubTypes = await axios.get('https://onegrcirabackend.onrender.com/cattwo/cattwoget');

        const PARTypesResponse = parTypes.data;
        const PARSubTypesResponse = parSubTypes.data;

        console.log(PARTypesResponse);
        console.log(PARSubTypesResponse);

        const PARTypes = [...new Set(PARTypesResponse.map((item) => item.parTypes))];
        const PARSubTypes = [...new Set(PARSubTypesResponse.map((item) => item.parSubTypes))];

        setPARTypes(PARTypes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div style={{}}>
          <TextField
            sx={{ ml: 5, mt: 1, textAlign: 'center' }}
            id="iar-category"
            label="Par Types"
            variant="outlined"
            value={parTypes}
            onChange={(e) => setParTypes(e.target.value)}
          />
          <br />
          <Button sx={{ ml: 5, mt: 2.5, textAlign: 'center' }} variant="contained" onClick={handleIarCategorySubmit}>
            Add
          </Button>
        </div>
        <div style={{}}>
          {/* <InputLabel sx={{ fontSize: '15px', textAlign: 'center' }}>PAR Types</InputLabel> */}
          <FormControl variant="standard" sx={{ minWidth: '100%', maxWidth: '200px' }}>
            <Select
              // style={{ fontSize: '15px', width: '220px' }}
              sx={{ ml: 5, mt: 2.5, textAlign: 'center' }}
              // value={row.selectedPARTypes}
              value={parSelect}
              // label="Par Types"
              onChange={(event) => {
                setParSelect(event.target.value);
                // handleChange(event, row.id, "selectedPARTypes");
                getParTypes(event.target.value);
              }}
            >
              <MenuItem style={{ fontSize: '15px' }} value="">
                <em>None</em>
              </MenuItem>
              {PARTypes.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            sx={{ ml: 5, mt: 1, textAlign: 'center' }}
            id="asset-category"
            label="Par Sub Types"
            variant="outlined"
            value={parSubTypes}
            onChange={(e) => setParSubTypes(e.target.value)}
          />
          <br />
          <Button
            sx={{ ml: 5, mt: 2.5, textAlign: 'center' }}
            variant="contained"
            onClick={handleAssetCategoriesSubmit}
          >
            Add
          </Button>
        </div>
      </div>

      {/* <div style={{}}>
        <InputLabel sx={{ fontSize: '15px' }}>PAR Types</InputLabel>
        <Select
          style={{ fontSize: '15px' }}
          // value={row.selectedPARTypes}
          onChange={(event) => {
            setSelect(event.target.value);
            // handleChange(event, row.id, "selectedPARTypes");
            getParTypes(event.target.value);
          }}
        >
          <MenuItem style={{ fontSize: '15px' }} value="">
            <em>None</em>
          </MenuItem>
          {PARTypes.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </div> */}
      {/* <div style={{}}>
        <TextField
          sx={{ ml: 5, mt: 1, textAlign: 'center' }}
          id="iar-category"
          label="IAR-Category"
          variant="outlined"
          value={iarCategoryTwo}
          onChange={(e) => setIarCategoryTwo(e.target.value)}
        />

        <Button sx={{ ml: 5, mt: 2.5, textAlign: 'center' }} variant="contained" onClick={handleIarCategoryTwoSubmit}>
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

        <Button sx={{ ml: 5, mt: 2.5, textAlign: 'center' }} variant="contained" onClick={handleImpactHeadsSubmit}>
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

        <Button sx={{ ml: 5, mt: 2.5, textAlign: 'center' }} variant="contained" onClick={handleassetsListSubmit}>
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

        <Button sx={{ ml: 5, mt: 2.5, textAlign: 'center' }} variant="contained" onClick={handleassetCategorySubmit}>
          Add
        </Button>
      </div> */}
    </>
  );
};

export default AdminAssets;

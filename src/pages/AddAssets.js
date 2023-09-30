import { Alert } from '@mui/material';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import './index.css';

const AddAssets = () => {
  const [textReq, setTextReq] = useState('');
  const [file, setFile] = useState(null);
  const [alert, setAlert] = useState(null);
  const [CourseDetails, setCourseDetails] = useState(null);
  const [open, setOpen] = useState(false);
  const [AlltableData, setAllTableData] = useState([]);
  const [approvedRows, setApprovedRows] = useState([]);

  const columnsAllUser = [
    { field: 'assetId', headerName: 'ID' },
    { field: 'assetName', headerName: 'Assest Name', width: 600 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <button
            onClick={() => handleOpen(params.row)}
            style={{
              border: 'none',
              padding: '5px 10px',
              marginRight: '5px',
              fontSize: '14px',
              cursor: 'pointer',
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            Upload
          </button>
        </>
      ),
    },
  ];

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 25,
    page: 0,
  });

  const handleOpen = (row) => {
    setTextReq(row);
    console.log(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('courseName', textReq);

    const baseUrl = 'https://onegrcirabackend.onrender.com/dropDown/select';

    // try {
    //   await axios.post(baseUrl, formData,{
    //     headers: {
    //       'Content-Type': 'multipart/form-data', // Set the content type for file upload
    //     },
    //   });
    //   setAlert(<Alert severity="success"> Asset Successfully Uploaded</Alert>);
    //   // clearAlertAfterDelay();
    //   setTextReq('');
    //   setFile(null);
    // } catch (error) {
    //   console.log(error);
    //   setAlert(<Alert severity="error">{error.message}</Alert>);
    //   // clearAlertAfterDelay();
    // }

    event.preventDefault(); // Prevent the form from submitting the traditional way

    try {
      if (textReq.trim() === '') {
        throw new Error('Text Fields Cannot be empty.');
      }

      // Make an HTTP POST request to your backend API
      const response = await axios.post(baseUrl, { textReq });

      // Check if the request was successful
      if (response.status === 201) {
        // Clear the input field and any previous errors
        setTextReq('');
        setFile(null);

        // setError(null);
        // You can also update your todo list state here if needed.
      }
    } catch (error) {
            // console.log(error);
      setAlert(<Alert severity="error">{error.message}</Alert>);
    }
  };
  const clearAlertAfterDelay = () => {
    setTimeout(() => {
      setAlert(null);
      window.location.reload();
    }, 5000);
  };

  return (
    <>
      <>
        <div
          style={{
            position: 'fixed',
            top: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '1000',
            width: '80%',
            maxWidth: '400px',
          }}
        >
          {alert}
        </div>

        <div style={{ width: '100%', marginTop: '8%' }}>
          <h2 className="brand-title" style={{ margin: '20px' }}>
            Assets
          </h2>
          <DataGrid
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            rows={AlltableData}
            columns={columnsAllUser}
            pageSize={10}
            getRowId={(row) => row.courseId}
            onSelectionModelChange={({ selectionModel }) => {
              const rowIds = selectionModel.map((rowId) => parseInt(String(rowId), 10));
              const rowsToApprove = AlltableData.filter((row) => rowIds.includes(row.registrationId));
              setApprovedRows(rowsToApprove);
            }}
          />
        </div>
        <div>
          <Dialog open={open} onClose={handleClose} aria-labelledby="upload-dialog-title">
            <DialogTitle id="upload-dialog-title">Upload Files</DialogTitle>
            <DialogContent>
              <TextField
                type="text"
                // className={classes.fileInput}
                // onChange={handleBatchURLChange}
                label="Batch URL"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              {/* <TextField
              type="file"
              className={classes.fileInput}
              onChange={handleCertificatePdfChange}
              label="Certificate PDF"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              required
            /> */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                // onClick={handleUpload}
                color="primary"
                variant="contained"
              >
                Upload
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>

      <div
        style={{
          position: 'fixed',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '1000',
          width: '80%',
          maxWidth: '400px',
        }}
      >
        {alert}
      </div>

      <div className="main_container">
        <div>
          <div className="brand-title">Add Assets </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <h4 htmlFor="courseName" className="labelss">
                  Assets:
                </h4>
                <input
                  id="courseName"
                  className="login-form-input"
                  type="text"
                  value={textReq}
                  onChange={(e) => setTextReq(e.target.value)}
                />
              </div>

              <button className="add-course-btn" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAssets;

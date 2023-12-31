import React, { useState, useEffect } from 'react';
import { CToast, CToastBody, CToastClose } from '@coreui/react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { filter } from 'lodash';

const AllUser = () => {
  const [userRole, setUserRole] = useState('');

  const columns = [
    { field: 'userId', headerName: 'ID' },
    { field: 'orgName', headerName: 'Org. Name', width: 100 },
    {
      field: 'compLocation',
      headerName: 'Comp. Location',
      width: 150,
    },
    // {
    //   field: 'phone',
    //   headerName: 'Phone',
    //   width: 150,
    // },
    { field: 'status', headerName: 'Status', width: 150 },
    // { field: 'isActive', headerName: 'IsActive', width: 150 },
    // { field: 'createdAt', headerName: 'createdAt', width: 250 },
  ];

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 25,
    page: 0,
  });
  const [tableData, setTableData] = useState([]);
  console.log(tableData);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [deletedRows, setDeletedRows] = useState([]);
  const [approvedRows, setApprovedRows] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const AdminDetails = JSON.parse(localStorage.getItem('user'));
  const [userDetails, setUserDetails] = useState({});
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    axios
      .get('https://onegrcirabackend.onrender.com/api/allUsers')
      .then((res) => {
        setTableData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClickOpen = (row) => {
    setUserDetails(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    // Handle sending the message here
    const templateParams = {
      from_email: AdminDetails.email,
      to_email: userDetails.email,
      message: mail,
      from_name: AdminDetails.name,
      to_name: userDetails.name,
    };

    emailjs
      .send('service_knunjfm', 'template_ovttgkn', templateParams, 't6TOry913aayxbxe1')
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        setAlert(<Alert severity="success">{('Email sent!', response.status, response.text)}</Alert>);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setAlert(<Alert severity="success">{('Error sending email:', error)}</Alert>);
      });

    alert('Email send');
    setMail('');
    handleClose();
  };

  const handleChange = (event) => {
    // set send message here
    setMail(event.target.value);
  };

  useEffect(() => {
    let timeout;
    if (show) {
      timeout = setTimeout(() => {
        setShow(false);
        navigate('/admin/approve');
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Message</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            rows={7}
            variant="outlined"
            value={mail}
            onChange={handleChange}
            fullWidth
            sx={{ width: '500px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleSend} color="primary" autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
      {alert}

      <div style={{ width: '100%', marginTop: '8%' }}>
        <h2 style={{ margin: '20px' }}>All Users </h2>

        {tableData.length > 0 ? (
          <DataGrid
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            rows={tableData}
            columns={columns}
            pageSize={10}
            // checkboxSelection
            getRowId={(row) => row._id}
            onSelectionModelChange={({ selectionModel }) => {
              const rowIds = selectionModel.map((_id) => parseInt(String(_id), 10));
              const rowsToDelete = tableData.filter((row) => rowIds.includes(row.userId));
              const rowsToApprove = tableData.filter((row) => rowIds.includes(row.userId));
              setDeletedRows(rowsToDelete);
              setApprovedRows(rowsToApprove);
            }}
          />
        ) : (
          'No Data Available'
        )}
      </div>
    </>
  );
};

export default AllUser;

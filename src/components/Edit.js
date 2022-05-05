import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./Edit.css";
import { TextField } from "@mui/material";
import axios from "axios";

function Edit({ selectedRows, setSelectedRows }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editData, setEditData] = useState({
    invoice_currency: "",
    cust_payment_terms: "",
  });

  async function editDataFun() {
    console.log(editData);
    try {
      const updatedData = await axios.post(
        `http://localhost:8080/HRC_backend/update-data?s_no=${selectedRows[0]?.Sl_No}&invoice_currency=${editData.invoice_currency}&cust_payment_terms=${editData.cust_payment_terms}`
      );
      console.log(updatedData);
      if (updatedData.data === "Data Updated Successfully") {
    
        setOpen(false);
      } 
      else{
        setOpen(false);
      }
    } catch (err) {
      
      setOpen(false);
    }
  }
  return (
    <div>
      <Button className="Edit"  variant="outlined" onClick={handleOpen} disabled={selectedRows.length === 1 ? false : true}>
        EDIT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit
          </Typography>
          <div className="textfield">
          <TextField
            id="filled-basic"
            label="Invoice Currency"
            variant="filled"
            size="small"
            onChange={(e) => {
              setEditData({
                ...editData,
                invoice_currency: e.target.value,
            }); 
          }}
          />
          <TextField
            id="filled-basic"
            label="Customer Payment Terms"
            variant="filled"
            sx={{m: 3}}
            size="small"
            type="text"
            onChange={(e) => {
              setEditData({
                ...editData,
                cust_payment_terms: e.target.value,
            }); 
          }}           
          />
          </div>         
          <div className="modal-actions">
            <Button variant="outlined" onClick={editDataFun}>EDIT</Button>
            <Button variant="outlined"onClick={handleClose}>CANCEL</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import moment from "moment";
import "./Add.css";

function Add({ selectedRows, setSelectedRows }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState({
    business_code: "",
    cust_number: "",
    clear_date: "",
    buisness_year: "",
    doc_id: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
  });

  async function handleSubmit() {
    try {
      console.log(data);
      const addedData = await axios.post(
        `http://localhost:8080/HRC_backend/add-data?business_code=${data.business_code}&cust_number=${
          data.cust_number
        }&clear_date=${data.clear_date
        }&buisness_year=${data.buisness_year}&doc_id=${
          data.doc_id
        }&posting_date=${data.posting_date
        }&document_create_date=${data.document_create_date
        }&due_in_date=${data.due_in_date}&invoice_currency=${data.invoice_currency}&document_type=${
          data.document_type
        }&posting_id=${data.posting_id}&total_open_amount=${data.total_open_amount
        }
        &baseline_create_date=${data.baseline_create_date
        }&cust_payment_terms=${data.cust_payment_terms}&invoice_id=${data.invoice_id}`
    );
      
      setOpen(false);
    } catch (e) {
      console.log(e.message);
      
    }
  }

  return (
    <div>
      <Button className="Add" variant="outlined" onClick={handleOpen} disabled={selectedRows.length === 0 ? false : true}>
        ADD
        
      </Button>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal1">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add
          </Typography>
          <div className="textfield1">
          <TextField
            id="filled-basic"
            label="Buisness Code"
            variant="filled"
            sx={{m: 0}}
            size="small"
            onChange={(e) => {
              setData({ ...data, business_code: e.target.value });
            }}
          />
          <TextField
            id="filled-basic"
            label="Customer Number"
            variant="filled"
            sx={{m: 3}}
            size="small"     
            onChange={(e) => {
            setData({ ...data, cust_number: e.target.value });
            }}       
          />
          <TextField
            id="filled-basic"
            label="Clear Date"
            variant="filled"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{m: 1}}
            size="small" 
            onChange={(e) => {
              setData({ ...data, clear_date: e.target.value });
            }}           
          />
          <TextField
            id="filled-basic"
            label="Buisness Year"
            variant="filled"
            sx={{m: 2}}
            size="small"
            onChange={(e) => {
              setData({ ...data, buisness_year: e.target.value });
            }}            
          />
          </div>
          <div className="textfield1">
          <TextField
            id="filled-basic"
            label="Document ID"
            variant="filled"
            sx={{m: 0}}
            size="small"
            onChange={(e) => {
              setData({ ...data, doc_id: e.target.value });
            }}
          />
          <TextField
            id="filled-basic"
            label="Posting Date"
            variant="filled"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{m: 3}}
            size="small"
            onChange={(e) => {
              setData({ ...data, posting_date: e.target.value });
            }}            
          />
          <TextField
            id="filled-basic"
            label="Document Create Date"
            variant="filled"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{m: 1}}
            size="small" 
            onChange={(e) => { 
            setData({...data,document_create_date: e.target.value,});
            }}          
          />
          <TextField
            id="filled-basic"
            label="Due Date"
            variant="filled"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{m: 2}}
            size="small"
            onChange={(e) => {
              setData({ ...data, due_in_date: e.target.value });
            }}            
          />
          </div>
          <div className="textfield1">
          <TextField
            id="filled-basic"
            label="Invoice Currency"
            variant="filled"
            sx={{m: 0}}
            size="small"
            onChange={(e) => {
              setData({ ...data, invoice_currency: e.target.value });
            }}
          />
          <TextField
            id="filled-basic"
            label="Document Type"
            variant="filled"
            sx={{m: 3}}
            size="small" 
            onChange={(e) => {
              setData({ ...data, document_type: e.target.value });
            }}           
          />
          <TextField
            id="filled-basic"
            label="Posting Id"
            variant="filled"
            sx={{m: 1}}
            size="small"
            onChange={(e) => {
              setData({ ...data, posting_id: e.target.value });
            }}            
          />
          <TextField
            id="filled-basic"
            label="Total Open Amount"
            variant="filled"
            sx={{m: 2}}
            size="small"
            onChange={(e) => {
              setData({ ...data, total_open_amount: e.target.value });
            }}            
          />
          </div>
          <div className="textfield1">
          <TextField
            id="filled-basic"
            label="Baseline Create Date"
            variant="filled"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{m: 0}}
            size="small"
            onChange={(e) => {setData({...data, baseline_create_date: e.target.value,});
            }}
          />
          <TextField
            id="filled-basic"
            label="Customer Payment Terms"
            variant="filled"
            sx={{m: 3}}
            size="small"
            onChange={(e) => {
              setData({ ...data, cust_payment_terms: e.target.value });
            }}            
          />
          <TextField
            id="filled-basic"
            label="Invoice Id"
            variant="filled"
            sx={{m: 1}}
            size="small" 
            onChange={(e) => {
              setData({ ...data, invoice_id: e.target.value });
            }}           
          />
          </div>
         
          <div className="modal-actions1">
            <Button variant="outlined" onClick={handleSubmit}>ADD</Button>
            <Button variant="outlined" onClick={handleClose}>CANCEL</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Add;
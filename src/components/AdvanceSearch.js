import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./AdvanceSearch.css";
import { TextField } from "@mui/material";

function AdvanceSearch({ setFilteredRows, filteredRows, data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [advanceSearch, setAdvanceSearch] = useState({
    Document_Id: "",
    Invoice_Id: "",
    Business_Year: "",
    Customer_Number: "",
  });

  function handleAdvanceSearch() {
    let filteredData = [];
    for (const rowData of data) {
      filteredData.push(rowData);
    }
    console.log(advanceSearch);
    if (advanceSearch.Document_Id) {
      filteredData = filteredData.filter((rowData) => {
        return rowData.Document_Id === advanceSearch.Document_Id;
      });
    }
    if (advanceSearch.Invoice_Id) {
      filteredData = filteredData.filter((rowData) => {
        return rowData.Invoice_Id === advanceSearch.Invoice_Id;
      });
    }
    if (advanceSearch.Business_Year) {
      filteredData = filteredData.filter((rowData) => {
        return rowData.Business_Year === advanceSearch.Business_Year;
      });
    }
    if (advanceSearch.Customer_Number) {
      filteredData = filteredData.filter((rowData) => {
        return rowData.Customer_Number === advanceSearch.Customer_Number;
      });
    }
    setFilteredRows(filteredData);
    handleClose();
  }

  return (
    <div>
      <Button className="AdvanceSearch"  variant="outlined" onClick={handleOpen}>
        ADVANCE SEARCH
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal3">
          <Typography id="modal-modal-title3" variant="h6" component="h2">
            Advance Search
          </Typography>
          <div className="textfield3">
          <div>
          <TextField
            id="filled-basic"
            label="Document Id"
            variant="filled"
            sx={{m: 2}}
            size="small"
            type="text"
            onChange={(e) => {
              setAdvanceSearch({
                ...advanceSearch,
                Document_Id: e.target.value,
              });
            }}
          />
          <TextField
            id="filled-basic"
            label="Invoice Id"
            variant="filled"
            sx={{m: 2}}
            size="small"
            type="text"
            onChange={(e) => {
              setAdvanceSearch({
                ...advanceSearch,
                Invoice_Id: e.target.value,
              });
            }}            
          />
          </div>
          <div>
          <TextField
            id="filled-basic"
            label="Customer Number"
            variant="filled"
            sx={{m: 2}}
            size="small"
            type="text"
            onChange={(e) => {
              setAdvanceSearch({
                ...advanceSearch,
                Customer_Number: e.target.value,
              });
            }}
          />
          <TextField
            id="filled-basic"
            label="Buisness Year"
            variant="filled"
            sx={{m: 2}}
            size="small"
            type="text"
            onChange={(e) => {
              setAdvanceSearch({
                ...advanceSearch,
                Business_Year: e.target.value,
              });
            }}            
          />
          </div>
          </div>         
          <div className="modal-actions3">
            <Button variant="outlined" onClick={handleAdvanceSearch}>
              SEARCH
            </Button>
            <Button variant="outlined" onClick={handleClose}>CANCEL</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AdvanceSearch;
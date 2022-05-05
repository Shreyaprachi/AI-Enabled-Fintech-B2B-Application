import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./Delete.css";

function Delete({ selectedRows, setSelectedRows, data, setFilteredRows }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function handleDelete() {
    let filteredData = [];
    for (const rowData of data) {
      for (const deletedRow of selectedRows) {
        if (deletedRow.Sl_No !== rowData.Sl_No) {
          filteredData.push(rowData);
        }
      }
    }

    setFilteredRows(filteredData);
    handleClose();

  }

  return (
    <div>
      <Button className="Delete" variant="outlined" onClick={handleOpen} disabled={selectedRows.length === 0 ? true : false}>
        DELETE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal2">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Records ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete these record[s] ?
          </Typography>
          <div className="modal-actions2">
            <Button variant="outlined" onClick={handleClose}>
              CANCEL
            </Button>
            <Button variant="outlined" onClick={handleDelete}>DELETE</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default Delete;
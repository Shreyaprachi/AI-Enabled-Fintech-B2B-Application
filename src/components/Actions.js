import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import RefreshIcon from '@mui/icons-material/Refresh';
import Delete from "./Delete";
import Add from "./Add";
import Edit from "./Edit"
import "./Actions.css";
import AdvanceSearch from "./AdvanceSearch";


function Actions({
  selectedRows,
  setSelectedRows,
  filterSearch,
  setFilteredRows,
  filteredRows,
  data,
})
{
  const refreshPage = ()=>{
    window.location.reload();
 }
  
  return (
    <div className="actions">
      <div className="toggle">
      <Button className="Predict_Button" variant="outlined" disabled={selectedRows.length === 0 ? true : false}>PREDICT</Button>
      <Button className="Analytics_Button" variant="outlined" >ANALYTICS VIEW</Button>
      <AdvanceSearch 
      setFilteredRows={setFilteredRows}
      filteredRows={filteredRows}
      data={data}
      />  
      <Button className="Refresh_icon" variant="outlined" onClick={refreshPage}><RefreshIcon style={{ color: "#2196f3" }}/></Button>
      </div>
      <div>
        <TextField
          id="filled-basic"
          label="Search Customer Id"
          variant="filled"
          size="small"
          type="text"
          onChange={(e) => {
            filterSearch(e.target.value);
          }}
        />
      </div>
      <div>
        <Stack direction="row">
          <Add selectedRows={selectedRows} setSelectedRows={setSelectedRows} />
          <Edit selectedRows={selectedRows} setSelectedRows={setSelectedRows} />
          <Delete 
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          data={data}
          setFilteredRows={setFilteredRows}
          />
        </Stack>
      </div>
    </div>
  );
}

export default Actions;
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./DataTable.css";


const columns = [
  { field: "Sl_No", headerName: "Sl No"},
  { field: "Business_Code", headerName: "Business Code" },
  { field: "Customer_Number", headerName: "Customer Number" },
  {
    field: "Clear_Date",
    headerName: "Clear Date",
  },
  {
    field: "Business_Year",
    headerName: "Business Year",
  },
  {
    field: "Document_Id",
    headerName: "Document Id",
  },
  {
    field: "Posting_Date",
    headerName: "Posting Date",
  },
  {
    field: "Document_Created",
    headerName: "Document Created",
  },
  {
    field: "Due_Date",
    headerName: "Due Date",
  },
  {
    field: "Invoice_Currency",
    headerName: "Invoice Currency",
  },
  {
    field: "Document_Type",
    headerName: "Document Type",
  },
  {
    field: "Posting_Id",
    headerName: "Posting Id",
  },
  {
    field: "Total_Open_Amount",
    headerName: "Total Open Amount",
  },
  {
    field: "Baseline_Create_Date",
    headerName: "Baseline Create Date",
  },
  {
    field: "Cust_Payment_Terms",
    headerName: "Customer Payment Terms",
  },
  {
    field: "Invoice_Id",
    headerName: "Invoice Id",
  },
  {
    field: "Aging_Bucket",
    headerName: "Aging Bucket",
  },
];

function DataTable({
  pageSize,
  setPageSize,
  selectedRow,
  setSelectedRows,
  data,
  setData,
  filteredRows,
}) {
  return (
      <div style={{ height: 490, minWidth: "100%" }}>
        <DataGrid
          density="compact"
          headerHeight={100}
          rowHeight={50}
          rows={filteredRows}
          columns={columns}
          checkboxSelection
          onSelectionModelChange={(e) => {
            const selectedIDs = new Set(e);
            console.log(selectedIDs);
            const selectedRows = data.filter((r) => selectedIDs.has(r.id));
            setSelectedRows(selectedRows);
          }}
          pageSize={pageSize} 
          rowsPerPageOptions={[5, 10, 50, 100]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
          sx={{
            "& .MuiDataGrid-columnHeaderTitle": {
              textOverflow: "clip",
              whiteSpace: "break-spaces",
              lineHeight: 1.3,
            },
          }}
        />
      </div>
  );
}

export default DataTable;
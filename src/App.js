import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Actions from "./components/Actions";
import DataTable from "./components/DataTable";
import axios from "axios";
import Footer from "./components/Footer";
import moment from "moment";
import "./App.css";

function App() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchedId, setSearchedId] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  

  function getData() {
    axios
      .get("http://localhost:8080/HRC_backend/get-all-data")
      .then((res) => {
        const data = res.data.map((excelData, index) => {
          let data = {
            id: index,
            Sl_No: excelData.sl_no,
            Business_Code: excelData.business_code,
            Customer_Number: excelData.cust_number,
            Clear_Date: excelData.clear_date,
            Business_Year: moment(excelData.buisness_year).format("YYYY"),
            Document_Id: excelData.doc_id,
            Posting_Date: excelData.posting_date,
            Document_Created: excelData.document_create_date,
            Due_Date: excelData.due_in_date,
            Invoice_Currency: excelData.invoice_currency,
            Document_Type: excelData.document_type,
            Posting_Id: excelData.posting_id,
            Total_Open_Amount: excelData.total_open_amount,
            Baseline_Create_Date: excelData.baseline_create_date,
            Cust_Payment_Terms: excelData.cust_payment_terms,
            Invoice_Id: excelData.invoice_id,
            Aging_Bucket: excelData.aging_bucket,
          };
          return data;
        });

        setData(data);
        setFilteredRows(data);
      })
  }

  useEffect(() => {
    getData();
  }, []);

  async function filterSearch(value) {
    const searchedLetter = value.toLowerCase();
    const filteredData = data.filter((singleRow) => {
      if (
        singleRow.Customer_Number.substring(
          0,
          searchedLetter.length
        ).toLowerCase() === searchedLetter
      )
        return singleRow;
    });
    setFilteredRows(filteredData);
  }
  return (
    <div className="App">
      <Header />
      <Actions
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        searchedId={searchedId}
        setSearchedId={setSearchedId}
        filterSearch={filterSearch}
        filteredRows={filteredRows}
        setFilteredRows={setFilteredRows}
        data={data}
      />
      <DataTable
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        pageSize={pageSize}
        setPageSize={setPageSize}
        searchedId={searchedId}
        setSearchedId={setSearchedId}
        data={data}
        setData={setData}
        filteredRows={filteredRows}
      />
      <Footer />
    </div>
  );
}

export default App;
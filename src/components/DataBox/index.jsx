import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "transaction",
    headerName: "Transaction",
    width: 150,
  },
  {
    field: "value",
    headerName: "Value",
    type: "number",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    width: 110,
  },
  {
    field: "cpf",
    headerName: "Cpf",
    width: 110,
  },
  {
    field: "card",
    headerName: "Card",
    width: 110,
  },
  {
    field: "hour",
    headerName: "Hour",
    width: 110,
  },
  {
    field: "owner",
    headerName: "Owner",
    width: 110,
  },
  {
    field: "store",
    headerName: "Store",
    width: 110,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DataBox = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default DataBox;

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { StatesContext } from "../../contexts/StateContext";

export default function SelectInput() {
  const { store, setStore } = React.useContext(StatesContext);

  const handleChange = (event) => {
    setStore(event.target.value);
  };
  const list = [
    "BAR DO JOÃO",
    "LOJA DO Ó - MATRIZ",
    "MERCADO DA AVENIDA",
    "MERCEARIA 3 IRMÃOS",
    "LOJA DO Ó - FILIAL",
  ];
  return (
    <Box sx={{ minWidth: 120, maxHeight: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="simple">Store</InputLabel>
        <Select
          labelId="simple"
          id="storeInput"
          value={store}
          label="Store"
          onChange={handleChange}
          autoWidth
        >
          {list.map((elem, index) => (
            <MenuItem key={index} value={elem}>
              {elem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

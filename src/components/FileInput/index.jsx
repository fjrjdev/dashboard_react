import React from "react";
import { Button } from "@mui/material";

const FileInput = (setFile) => {
  return (
    <Button variant="contained" component="label">
      Upload File
      <input type="file" hidden onChange={(e) => setFile(e.target.files)} />
    </Button>
  );
};

export default FileInput;

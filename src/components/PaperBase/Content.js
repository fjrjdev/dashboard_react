import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import FileInput from "../FileInput";
import DataBox from "../DataBox";
import TabPanel from "../TabsPanel";
import { StatesContext } from "../../contexts/StateContext";

export default function Content() {
  const { tab, data, uploadFile } = React.useContext(StatesContext);
  return (
    <Paper sx={{ maxWidth: 1800, margin: "auto", overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: "block" }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by store, date, or cpf"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: "default" },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <FileInput
                uploadFile={uploadFile}
                variant="contained"
                sx={{ mr: 1 }}
              >
                Add user
              </FileInput>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: "block" }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <TabPanel value={tab} index={0}>
        {data.length === 0 ? (
          <Typography
            sx={{ my: 5, mx: 2 }}
            color="text.secondary"
            align="center"
          >
            No data uploaded in database
          </Typography>
        ) : (
          <DataBox />
        )}
      </TabPanel>
      <TabPanel value={tab} index={1}>
        {data.length === 0 ? (
          <Typography
            sx={{ my: 5, mx: 2 }}
            color="text.secondary"
            align="center"
          >
            No Store Selected
          </Typography>
        ) : (
          <DataBox />
        )}
      </TabPanel>

      {/* <DataBox /> */}
    </Paper>
  );
}

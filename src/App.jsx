import { Box, Stack, Typography } from "@mui/material";
import "./app.css";
import CreateForm from "./modules/create-task/CreateForm";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
    .get("https://crudtaskpro-qfy0-dev.fl0.io/all")
    .then(res => {
      const { data } = res;
      if(data) {
        setData(data)
      }
    })
  }, [])
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CreateForm /> 
      <Stack gap="20px">
        {
          data.map(user => (
            <Typography key={user.email} color="secondary">
              {user.username}
            </Typography>
          ))
        }
      </Stack>
    </Box>
  );
}

export default App;

import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import CustomCard from "../components/CustomCard";
import Input from "../components/Input";

function CreateForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleValue = (field, value) => {
    const copyState = { ...formValues };
    copyState[field] = value;
    setFormValues(copyState);
  };

  const handleSubmit = () => {
    console.log(formValues);
    axios
    .post("https://crudtaskpro-qfy0-dev.fl0.io/all", formValues)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
  };

  return (
    <CustomCard>
      <Box
        sx={{
          padding: "35px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Typography variant="h4" color="secondary">
          Crear Usuario
        </Typography>
        <Input
          variant="outlined"
          size="medium"
          label="Title"
          color="secondary"
          focused
          fullWidth
          onChange={(e) => handleValue("Title", e.target.value)}
        />
        <Input
          variant="outlined"
          size="medium"
          label="Description"
          color="secondary"
          focused
          fullWidth
          onChange={(e) => handleValue("Description", e.target.value)}
        />
        <Input
          type="password"
          variant="outlined"
          size="medium"
          label="Completed"
          color="secondary"
          focused
          fullWidth
          onChange={(e) => handleValue("Completed", e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSubmit}
        >
          Crear
        </Button>
      </Box>
    </CustomCard>
  );
}

export default CreateForm;

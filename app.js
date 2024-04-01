const express = reqiure("express");
require("dotenv").config;
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Successfully connected to ${PORT}`);
});

const express = require("express");
const axios2 = require("axios");
const app = express();
const port = 3000;
const BASE_URL = "http://localhost:3333";
const axios = axios2.create({
  baseUrl: BASE_URL,
});

app.get("/games", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("List of games");
});

app.post("/games", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({});
});

app.get("/users", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("List of users");
});

app.post("/users", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({});
});

app.listen(port, () => {
  console.log(`URL: http://localhost:${port}`);
  console.log(`Server is running on port ${port}`);
});

const sendRequest = async (endpoint) => {
  try {
    const response = await axios.get(`http://other-server.com${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

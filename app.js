const express = require("express");
const path = require("path");

const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client", "dist")));

app.get("/health", (req, res) => {
  res.send("All Healthy Good to Go!");
});

// api routes
app.use("/api", require("./api"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});

app.use((error, req, res, next) => {
  res.satus(500).send(error);
});

module.exports = app;

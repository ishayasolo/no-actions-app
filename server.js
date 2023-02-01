const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js server");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Node.js server running on port ${port}`);
});

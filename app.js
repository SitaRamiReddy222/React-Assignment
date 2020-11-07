const express = require("express");
const importData = require("./data.json");
const app = express();
const port = process.env.PORT || 5000;

let obj = importData;
app.get("/api/data", (req, res) => {
  res.send(obj);
});


app.listen(port, () => console.log(`Listening at port ${port}...`));

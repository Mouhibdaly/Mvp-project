// index.js
const express = require("express");
const itemRoutes = require('./routes/item.routes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));


app.use("/api/clothes", itemRoutes);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

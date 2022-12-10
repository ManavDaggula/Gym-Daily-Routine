const connToMong = require("./database");
connToMong();

// mongodb://localhost:27017
const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

app.use('/api/auth', require("./routes/auth"));
// app.use('/routineGym', require("./routes/routines"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/api/auth`);
})
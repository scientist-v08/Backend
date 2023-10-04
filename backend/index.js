const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 6000;
const environment = process.env.ENVIRONMENT || 'development';
const FormMain = require('./Routes/FormMain');
const connectDB = require('./Middleware/mongoose');

connectDB();

app.use(cors(
  {
    origin: ["https://manojvfullstackexample.in"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
  }
));
  app.use(express.json());



app.get("/", (req, res) => {
  res.json("Hello");
})
app.use('/api/details', FormMain);

app.listen(port, () => {
  console.log("Server is Running")
})
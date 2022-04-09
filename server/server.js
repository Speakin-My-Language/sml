const path = require('path')
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;
require('dotenv').config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const signupRouter = require(path.join(__dirname, './routers/signupRouter'))

app.use('/signup', signupRouter);

app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`)
})
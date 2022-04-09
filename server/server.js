const path = require('path')
const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();

const signupRouter = require(path.join(__dirname, './routers/signupRouter'))

app.use('/signup', signupRouter);

app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`)
})
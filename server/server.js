const path = require('path');
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;
require('dotenv').config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const signupRouter = require(path.join(__dirname, './routers/signupRouter'));

app.use('/signup', signupRouter);

// app.get('/style.css', (req, res) => {
//   res.setHeader('content-type', 'text/css');
//   return res.status(200).sendFile(path.resolve(__dirname, './../client/scss/styles.scss'));
// });

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});



app.use((req, res) => res.status(404).send('Nothing here'));

app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`);
});

/* eslint-disable import/no-dynamic-require */
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

// user router
const userRouter = require('./routers/userRouter');
app.use('/user', userRouter);

// // signup router
const signupRouter = require('./routers/signupRouter');
app.use('/signup', signupRouter);

// pairProgram router
const pairProgramRouter = require('./routers/pairProgramRouter');
app.use('/pairProgram', pairProgramRouter);

// newProgrammer router
const newProgrammerRouter = require('./routers/newProgrammerRouter');
app.use('/newProgrammer', newProgrammerRouter);

// matches router
const matchesRouter = require('./routers/matchesRouter');
app.use('/matches', matchesRouter);

// logout router ?
const logoutRouter = require('./routers/logoutRouter');
app.use('/logout', logoutRouter);

// login router ?
const loginRouter = require('./routers/loginRouter');
app.use('/login', loginRouter);

// route for landing page
app.get('/', (req, res) => {
  res.status(200).sendFile('./client/index.html');
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Looks like you\'re doomed to code alone forever'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  return res.status(errorObj.status).json(errorObj.message);
});

// Beware of server (she's eavesdropping...)
app.listen(PORT, (req, res) => {
  console.log(`Beware on ${PORT}`);
});

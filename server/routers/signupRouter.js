const express = require('express');

const router = express.Router();

router.get('/github/auth', (req, res, next) => {
  const url = 'https://github.com/login/oauth/authorize?' +
              'scope=read:user&' +
              'redirect_uri=http://localhost:3000/github/callback&' +
              'client_id=' + process.env.GITHUB_CLIENT_ID;
  res.redirect(url);
})

router.get('/github/callback', async (req, res, next) => {
  res.send(200)
})

module.exports = router;
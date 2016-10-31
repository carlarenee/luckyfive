const express    = require('express');
const guestRouter  = express.Router();

guestRouter.get('/', (req, res) => {
  res.render('guest/index')
});

module.exports = guestRouter;
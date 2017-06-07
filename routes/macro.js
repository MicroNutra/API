const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res, next) => {
console.log('They see me routing!');
  queries.getAllMacro()
  .then((macro) => {
    res.json({
      status: 'success',
      data: macro
    });
  })
  .catch((err) => {
console.log(err);
      return next(err);
     //res.json(err);
  });
});

module.exports = router;

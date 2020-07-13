const express = require('express');
const router = express.Router();

//Models
const record = require('../models/record');
router.post('/', (req, res, next) => {
  const record = new record(req.body);

  movie.save((err,data) => {
    if(err)
      res.json(err);

    res.json(data);
  });



});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/food', function(req, res) {

  res.json({message : "Food route"});

});

module.exports = router;

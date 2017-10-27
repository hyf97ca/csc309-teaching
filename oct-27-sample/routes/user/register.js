const express = require('express');
const router = express.Router();

router.post('register', function(req, res) {

  res.json({message : "Register route"});

});

module.exports = router;

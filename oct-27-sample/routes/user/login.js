const express = require('express');
const router = express.Router();

router.post('login', function(req, res) {

  res.json({message : "Login route"});

});

module.exports = router;
